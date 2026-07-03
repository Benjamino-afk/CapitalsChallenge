import { useRef, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useGame } from '../useGame';
import { ALL_CAPITALS, ALL_NAMES, TIMER_SECS, HINT_PEN, norm } from '../data';
import { HUD, TimerBar, StreakBurst, Btn, GameHeader, FlagImg } from '../components';
import { C } from '../theme';
import { ResultsModal } from './ResultsModal';

// Handles 'type' (country → capital), 'reverse' (capital → country),
// and 'flag' on hard difficulty (flag → country, typed)
export function TypeGame({ mode, settings, onHome, onPlayAgain }) {
  const { g, country, answerCorrect, answerWrong, skip, useHint, next } = useGame(mode, settings);
  const [value, setValue] = useState('');
  const [fb, setFb] = useState(null); // { msg, ok }
  const [hintText, setHintText] = useState('');
  const [burst, setBurst] = useState({ key: 0, streak: 0 });
  const inputRef = useRef(null);

  const isReverse = mode === 'reverse';
  const isFlag = mode === 'flag';
  const target = country ? ((isReverse || isFlag) ? country.name : country.capital) : '';
  const acList = (isReverse || isFlag) ? ALL_NAMES : ALL_CAPITALS;

  const q = value.trim().toLowerCase();
  const matches = (!g.done && q.length >= 2)
    ? acList.filter(x => x.toLowerCase().startsWith(q)).slice(0, 6)
    : [];

  function submit() {
    if (g.done) { advance(); return; }
    const val = value.trim();
    if (!val) return;
    if (norm(val) === norm(target)) {
      const { pts, streak, milestone } = answerCorrect();
      setFb({ msg: streak >= 3 ? `🔥 Streak! +${pts} pts` : `✓ Correct! +${pts} pts`, ok: true });
      if (milestone) setBurst(b => ({ key: b.key + 1, streak }));
    } else {
      const { lives } = answerWrong();
      setValue(target);
      setFb({ msg: `✗ It was: ${target}`, ok: false });
      if (lives <= 0) setTimeout(advance, 1200);
    }
  }

  function handleSkip() {
    if (g.done) return;
    skip();
    setValue(target);
    setFb({ msg: `Answer: ${target}`, ok: false });
    if (settings.timed) setTimeout(advance, 1500);
  }

  function advance() {
    setValue('');
    setFb(null);
    setHintText('');
    next();
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function handleHint() {
    if (!useHint()) return;
    const masked = target.split('').map((ch, i) => i === 0 || ch === ' ' ? ch : '_').join('');
    setHintText(`💡 "${masked}" (−${HINT_PEN} pts)`);
  }

  const heading = isFlag ? 'Which country is this flag?'
    : isReverse ? 'Which country has this capital?' : 'What is the capital of…';
  const title = isFlag ? '🚩 FLAG' : isReverse ? '🔄 REVERSE' : '⌨️ TYPE IT';
  const timed = settings.timed && settings.difficulty !== 'easy';

  return (
    <KeyboardAvoidingView style={st.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <GameHeader title={title} qNum={Math.min(g.qi + 1, g.q.length)} qTotal={g.q.length} onBack={onHome} />
      <HUD g={g} onHint={handleHint} />
      {timed && !g.finished && (
        <TimerBar seconds={TIMER_SECS[settings.difficulty]} qKey={g.qi} paused={g.done} onExpire={handleSkip} />
      )}
      <ScrollView contentContainerStyle={st.body} keyboardShouldPersistTaps="handled">
        <Text style={st.heading}>{heading}</Text>
        {country && (isFlag
          ? <FlagImg country={country} size={110} />
          : <Text style={st.flag}>{isReverse ? '🌍' : country.flag}</Text>)}
        {country && !isFlag && <Text style={st.name}>{isReverse ? country.capital : country.name}</Text>}
        {country && !isFlag && (
          <Text style={st.sub}>{isReverse ? 'Capital city' : `Region: ${country.region}`}</Text>
        )}
        {!!hintText && <Text style={st.hint}>{hintText}</Text>}

        <TextInput
          ref={inputRef}
          style={[st.input, g.done && (fb?.ok ? st.inputOk : st.inputBad)]}
          value={value}
          onChangeText={setValue}
          editable={!g.done}
          placeholder={isReverse || isFlag ? 'Type the country…' : 'Type the capital…'}
          placeholderTextColor={C.muted}
          autoCorrect={false}
          autoCapitalize="words"
          onSubmitEditing={submit}
          blurOnSubmit={false}
        />
        {matches.length > 0 && (
          <View style={st.ac}>
            {matches.map(m => (
              <Pressable key={m} onPress={() => setValue(m)} style={({ pressed }) => [st.acItem, pressed && { backgroundColor: C.card }]}>
                <Text style={st.acTxt}>{m}</Text>
              </Pressable>
            ))}
          </View>
        )}
        {fb && <Text style={[st.fb, { color: fb.ok ? C.green : C.red }]}>{fb.msg}</Text>}

        <View style={st.btnRow}>
          <Btn label={g.done ? 'NEXT →' : 'SUBMIT →'} onPress={submit} style={{ flex: 1 }} />
          <Btn label="SKIP" color={C.panel} disabled={g.done} onPress={handleSkip} />
        </View>
      </ScrollView>
      <StreakBurst streak={burst.streak} burstKey={burst.key} />
      {g.finished && <ResultsModal g={g} settings={settings} onPlayAgain={onPlayAgain} onHome={onHome} />}
    </KeyboardAvoidingView>
  );
}

const st = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  body: { padding: 20, alignItems: 'center', gap: 8 },
  heading: { color: C.muted, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' },
  flag: { fontSize: 64, marginVertical: 4 },
  name: { color: C.text, fontSize: 26, fontWeight: '900', textAlign: 'center' },
  sub: { color: C.muted, fontSize: 13 },
  hint: { color: C.gold, fontSize: 15, marginTop: 4 },
  input: {
    backgroundColor: C.card, borderColor: C.border, borderWidth: 2, borderRadius: 14,
    color: C.text, paddingHorizontal: 16, paddingVertical: 12, fontSize: 18,
    width: '100%', marginTop: 12, textAlign: 'center', fontWeight: '700',
  },
  inputOk: { borderColor: C.green },
  inputBad: { borderColor: C.red },
  ac: { width: '100%', backgroundColor: C.panel, borderRadius: 12, borderWidth: 1, borderColor: C.border, overflow: 'hidden' },
  acItem: { paddingHorizontal: 16, paddingVertical: 11 },
  acTxt: { color: C.text, fontSize: 15 },
  fb: { fontSize: 16, fontWeight: '800', marginTop: 6 },
  btnRow: { flexDirection: 'row', gap: 10, width: '100%', marginTop: 12 },
});
