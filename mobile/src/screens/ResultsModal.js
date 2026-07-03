import { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Modal } from 'react-native';
import { postScore } from '../api';
import { useSettings } from '../settings';
import { Btn, Chip } from '../components';
import { C } from '../theme';

export const MODE_NAMES = { map: 'Map', type: 'Type', mc: 'MC', reverse: 'Rev', flag: 'Flag' };
const MODE_LABELS = { map: '🗺️ Map', type: '⌨️ Type', mc: '🔤 MC', reverse: '🔄 Rev', flag: '🚩 Flag' };

export function ResultsModal({ g, settings, onPlayAgain, onHome }) {
  const { update } = useSettings();
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const [nextDiff, setNextDiff] = useState(settings.difficulty);

  const seen = new Set();
  const missed = g.missed.filter(c => !seen.has(c.name) && seen.add(c.name));

  function submit() {
    postScore({
      name: name.trim() || 'Anonymous',
      score: g.score, mode: MODE_NAMES[g.mode] || g.mode,
      correct: g.correct, streak: g.best, difficulty: settings.difficulty,
    });
    setSaved(true);
    setStep(2);
  }

  function pickDiff(d) {
    setNextDiff(d);
    update({ difficulty: d });
  }

  return (
    <Modal transparent animationType="fade">
      <View style={st.backdrop}>
        <ScrollView contentContainerStyle={st.scroll} style={st.card}>
          <Text style={st.title}>{g.lives <= 0 ? '💀 GAME OVER!' : '🎉 COMPLETE!'}</Text>
          <View style={st.stats}>
            <Stat label="SCORE" value={String(g.score)} color={C.gold} />
            <Stat label="CORRECT" value={`${g.correct}/${g.q.length}`} color={C.green} />
            <Stat label="BEST STREAK" value={String(g.best)} color={C.accent} />
            <Stat label="MODE" value={MODE_LABELS[g.mode] || g.mode} color={C.blue} />
          </View>

          {missed.length > 0 && (
            <View style={st.review}>
              <Text style={st.reviewTitle}>📖 ONES TO STUDY</Text>
              {missed.map(c => (
                <View key={c.name} style={st.reviewRow}>
                  <Text style={st.reviewFlag}>{c.flag}</Text>
                  <Text style={st.reviewCountry}>{c.name}</Text>
                  <Text style={st.reviewCap}>{c.capital}</Text>
                </View>
              ))}
            </View>
          )}

          {step === 1 ? (
            <View style={st.section}>
              <Text style={st.label}>SAVE YOUR SCORE</Text>
              <TextInput
                style={st.input}
                placeholder="Your name"
                placeholderTextColor={C.muted}
                value={name}
                onChangeText={setName}
                maxLength={20}
              />
              <View style={st.btnRow}>
                <Btn label="SAVE 🏆" onPress={submit} style={{ flex: 1 }} />
                <Btn label="SKIP" color={C.panel} onPress={() => setStep(2)} style={{ flex: 1 }} />
              </View>
            </View>
          ) : (
            <View style={st.section}>
              {saved && <Text style={st.savedMsg}>Score saved! 🏆</Text>}
              <Text style={st.label}>DIFFICULTY FOR NEXT ROUND</Text>
              <View style={st.btnRow}>
                {['easy', 'medium', 'hard'].map(d => (
                  <Chip key={d} label={d.toUpperCase()} active={nextDiff === d} onPress={() => pickDiff(d)} />
                ))}
              </View>
              <View style={st.btnRow}>
                <Btn label="PLAY AGAIN 🔄" onPress={onPlayAgain} style={{ flex: 1 }} />
                <Btn label="HOME" color={C.panel} onPress={onHome} style={{ flex: 1 }} />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
}

function Stat({ label, value, color }) {
  return (
    <View style={st.stat}>
      <Text style={st.statLabel}>{label}</Text>
      <Text style={[st.statValue, { color }]}>{value}</Text>
    </View>
  );
}

const st = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.75)', justifyContent: 'center', padding: 18 },
  card: { backgroundColor: C.panel, borderRadius: 20, borderWidth: 1, borderColor: C.border, maxHeight: '90%' },
  scroll: { padding: 20, gap: 16 },
  title: { color: C.text, fontSize: 26, fontWeight: '900', textAlign: 'center' },
  stats: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'center' },
  stat: { backgroundColor: C.card, borderRadius: 12, padding: 10, minWidth: 90, alignItems: 'center' },
  statLabel: { color: C.muted, fontSize: 10, letterSpacing: 1.5 },
  statValue: { fontSize: 18, fontWeight: '900', marginTop: 2 },
  review: { backgroundColor: C.card, borderRadius: 12, padding: 12, gap: 6 },
  reviewTitle: { color: C.muted, fontSize: 11, letterSpacing: 2, marginBottom: 4 },
  reviewRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  reviewFlag: { fontSize: 18 },
  reviewCountry: { color: C.text, fontWeight: '700', flex: 1 },
  reviewCap: { color: C.gold, fontWeight: '700' },
  section: { gap: 10 },
  label: { color: C.muted, fontSize: 11, letterSpacing: 2, textAlign: 'center' },
  input: { backgroundColor: C.card, borderColor: C.border, borderWidth: 1, borderRadius: 12, color: C.text, padding: 12, fontSize: 16, textAlign: 'center' },
  btnRow: { flexDirection: 'row', gap: 10, justifyContent: 'center' },
  savedMsg: { color: C.green, fontWeight: '800', textAlign: 'center' },
});
