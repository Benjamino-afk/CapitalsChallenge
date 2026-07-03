import { useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useGame } from '../useGame';
import { TIMER_SECS, shuffle, pickWrongCapitals, pickWrongCountries } from '../data';
import { HUD, TimerBar, StreakBurst, Btn, GameHeader, FlagImg } from '../components';
import { C } from '../theme';
import { ResultsModal } from './ResultsModal';

// Handles 'mc' (country → pick capital) and 'flag' below hard (flag → pick country)
export function MCGame({ mode, settings, onHome, onPlayAgain }) {
  const { g, country, answerCorrect, answerWrong, skip, next } = useGame(mode, settings);
  const [picked, setPicked] = useState(null);
  const [burst, setBurst] = useState({ key: 0, streak: 0 });

  const isFlag = mode === 'flag';
  const numChoices = (isFlag && settings.difficulty === 'easy') ? 2 : 4;

  const choices = useMemo(() => {
    if (!country) return [];
    const correct = isFlag ? country.name : country.capital;
    const wrongs = isFlag
      ? pickWrongCountries(country.name, country).slice(0, numChoices - 1)
      : pickWrongCapitals(country.capital, country);
    return shuffle([correct, ...wrongs]);
  }, [g.qi, country]);

  const correctAnswer = country ? (isFlag ? country.name : country.capital) : '';

  function handlePick(choice) {
    if (g.done) return;
    setPicked(choice);
    if (choice === correctAnswer) {
      const { streak, milestone } = answerCorrect();
      if (milestone) setBurst(b => ({ key: b.key + 1, streak }));
    } else {
      answerWrong();
    }
    setTimeout(advance, 1200);
  }

  function handleSkip() {
    if (g.done) return;
    skip();
    setPicked('__skip__');
    setTimeout(advance, 1500);
  }

  function advance() {
    setPicked(null);
    next();
  }

  const choiceStyle = (choice) => {
    if (!g.done) return null;
    if (choice === correctAnswer) return st.correct;
    if (choice === picked) return st.wrong;
    return st.faded;
  };

  const timed = settings.timed && settings.difficulty !== 'easy';

  return (
    <View style={st.screen}>
      <GameHeader title={isFlag ? '🚩 FLAGS' : '🔤 MULTIPLE CHOICE'} qNum={Math.min(g.qi + 1, g.q.length)} qTotal={g.q.length} onBack={onHome} />
      <HUD g={g} showHint={false} />
      {timed && !g.finished && (
        <TimerBar seconds={TIMER_SECS[settings.difficulty]} qKey={g.qi} paused={g.done} onExpire={handleSkip} />
      )}
      <ScrollView contentContainerStyle={st.body}>
        <Text style={st.heading}>{isFlag ? 'Which country is this flag?' : 'What is the capital of…'}</Text>
        {country && (isFlag
          ? <FlagImg country={country} size={120} />
          : <>
              <Text style={st.flag}>{country.flag}</Text>
              <Text style={st.name}>{country.name}</Text>
              <Text style={st.sub}>Region: {country.region}</Text>
            </>)}
        <View style={st.choices}>
          {choices.slice(0, numChoices).map((choice, i) => (
            <Pressable
              key={choice}
              disabled={g.done}
              onPress={() => handlePick(choice)}
              style={({ pressed }) => [st.choice, choiceStyle(choice), pressed && !g.done && st.pressed]}
            >
              <Text style={st.choiceTxt}>{i + 1}.  {choice}</Text>
            </Pressable>
          ))}
        </View>
        <Btn label="SKIP →" color={C.panel} small disabled={g.done} onPress={handleSkip} style={{ alignSelf: 'flex-end' }} />
      </ScrollView>
      <StreakBurst streak={burst.streak} burstKey={burst.key} />
      {g.finished && <ResultsModal g={g} settings={settings} onPlayAgain={onPlayAgain} onHome={onHome} />}
    </View>
  );
}

const st = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  body: { padding: 20, alignItems: 'center', gap: 8 },
  heading: { color: C.muted, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' },
  flag: { fontSize: 64, marginVertical: 4 },
  name: { color: C.text, fontSize: 26, fontWeight: '900', textAlign: 'center' },
  sub: { color: C.muted, fontSize: 13 },
  choices: { width: '100%', gap: 10, marginTop: 16, marginBottom: 12 },
  choice: {
    backgroundColor: C.card, borderColor: C.border, borderWidth: 2, borderRadius: 14,
    paddingVertical: 15, paddingHorizontal: 18,
  },
  choiceTxt: { color: C.text, fontSize: 17, fontWeight: '700' },
  correct: { borderColor: C.green, backgroundColor: '#1a3a2a' },
  wrong: { borderColor: C.red, backgroundColor: '#3a1a1a' },
  faded: { opacity: 0.45 },
  pressed: { borderColor: C.blue },
});
