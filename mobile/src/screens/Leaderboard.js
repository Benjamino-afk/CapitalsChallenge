import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { fetchScores } from '../api';
import { Chip, GameHeader } from '../components';
import { C } from '../theme';

const MODES = ['Map', 'Type', 'MC', 'Rev', 'Flag'];
const MEDALS = ['🥇', '🥈', '🥉'];

export function Leaderboard({ initialDiff = 'medium', initialMode = 'Map', onHome }) {
  const [diff, setDiff] = useState(initialDiff);
  const [mode, setMode] = useState(initialMode);
  const [scores, setScores] = useState(undefined); // undefined=loading, null=error

  useEffect(() => {
    let live = true;
    setScores(undefined);
    fetchScores(diff, mode)
      .then(s => live && setScores(s))
      .catch(() => live && setScores(null));
    return () => { live = false; };
  }, [diff, mode]);

  return (
    <View style={st.screen}>
      <GameHeader title="🏆 LEADERBOARD" qNum={0} qTotal={0} onBack={onHome} />
      <View style={st.chips}>
        {['easy', 'medium', 'hard'].map(d => (
          <Chip key={d} label={d.toUpperCase()} active={diff === d} onPress={() => setDiff(d)} />
        ))}
      </View>
      <View style={st.chips}>
        {MODES.map(m => (
          <Chip key={m} label={m} active={mode === m} onPress={() => setMode(m)} />
        ))}
      </View>
      <ScrollView contentContainerStyle={st.list}>
        {scores === undefined && <ActivityIndicator color={C.accent} style={{ marginTop: 40 }} />}
        {scores === null && <Text style={st.empty}>Could not load scores — check your connection.</Text>}
        {Array.isArray(scores) && scores.length === 0 && (
          <Text style={st.empty}>No scores yet for this mode & difficulty!</Text>
        )}
        {Array.isArray(scores) && scores.length > 0 && (
          <>
            <View style={st.row}>
              <Text style={[st.h, st.rank]}>Rank</Text>
              <Text style={[st.h, st.name]}>Player</Text>
              <Text style={[st.h, st.num]}>Score</Text>
              <Text style={[st.h, st.num]}>Correct</Text>
            </View>
            {scores.map((s, i) => (
              <View key={i} style={[st.row, st.scoreRow]}>
                <Text style={[st.rank, { fontSize: i < 3 ? 18 : 14, color: C.muted }]}>
                  {MEDALS[i] ?? `#${i + 1}`}
                </Text>
                <Text style={[st.name, st.player]} numberOfLines={1}>{s.name}</Text>
                <Text style={[st.num, st.score]}>{s.score}</Text>
                <Text style={[st.num, st.corr]}>{s.correct ?? '—'}</Text>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const st = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  chips: { flexDirection: 'row', gap: 8, paddingHorizontal: 14, paddingVertical: 5, flexWrap: 'wrap' },
  list: { padding: 14, gap: 6 },
  empty: { color: C.muted, textAlign: 'center', marginTop: 40, fontSize: 15 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 12 },
  scoreRow: { backgroundColor: C.card, borderRadius: 12, paddingVertical: 11, borderWidth: 1, borderColor: C.border },
  h: { color: C.muted, fontSize: 11, letterSpacing: 1 },
  rank: { width: 48 },
  name: { flex: 1 },
  num: { width: 56, textAlign: 'right' },
  player: { color: C.text, fontWeight: '700', fontSize: 15 },
  score: { color: C.gold, fontWeight: '900', fontSize: 15 },
  corr: { color: C.muted, fontSize: 14 },
});
