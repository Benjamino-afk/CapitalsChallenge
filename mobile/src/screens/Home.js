import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useSettings } from '../settings';
import { DIFF_DESC } from '../data';
import { Chip } from '../components';
import { C } from '../theme';

const MODES = [
  { id: 'map', icon: '🗺️', title: 'MAP CLICK', desc: 'Find the country on the world map' },
  { id: 'type', icon: '⌨️', title: 'TYPE IT', desc: 'Type the capital city' },
  { id: 'mc', icon: '🔤', title: 'MULTIPLE CHOICE', desc: 'Pick the right capital' },
  { id: 'reverse', icon: '🔄', title: 'REVERSE', desc: 'Capital → name the country' },
  { id: 'flag', icon: '🚩', title: 'FLAGS', desc: 'Match the flag to the country' },
];

const REGIONS = [['all', 'All'], ['Africa', 'Africa'], ['Americas', 'Americas'], ['Asia', 'Asia'], ['Europe', 'Europe'], ['Oceania', 'Oceania']];

export function Home({ onPlay, onLeaderboard, onStudy }) {
  const { settings, update } = useSettings();

  return (
    <ScrollView style={st.screen} contentContainerStyle={st.body}>
      <Text style={st.logo}>GEO{'\n'}CHALLENGER</Text>
      <Text style={st.tagline}>HOW WELL DO YOU KNOW THE WORLD?</Text>

      <View style={st.panel}>
        <Text style={st.label}>DIFFICULTY</Text>
        <View style={st.chipRow}>
          {['easy', 'medium', 'hard'].map(d => (
            <Chip key={d} label={d.toUpperCase()} active={settings.difficulty === d} onPress={() => update({ difficulty: d })} />
          ))}
        </View>
        <Text style={st.diffDesc}>{DIFF_DESC[settings.difficulty]}</Text>

        <Text style={st.label}>REGION</Text>
        <View style={st.chipRow}>
          {REGIONS.map(([val, lbl]) => (
            <Chip key={val} label={lbl} active={settings.region === val} onPress={() => update({ region: val })} />
          ))}
        </View>

        <View style={st.toggleRow}>
          <Chip label={`⏱️ Timer ${settings.timed ? 'ON' : 'OFF'}`} active={settings.timed} onPress={() => update({ timed: !settings.timed })} />
          <Chip label={`🔊 Sound ${settings.sound ? 'ON' : 'OFF'}`} active={settings.sound} onPress={() => update({ sound: !settings.sound })} />
        </View>
      </View>

      {MODES.map(m => (
        <Pressable key={m.id} onPress={() => onPlay(m.id)} style={({ pressed }) => [st.mode, pressed && st.modePressed]}>
          <Text style={st.modeIcon}>{m.icon}</Text>
          <View style={{ flex: 1 }}>
            <Text style={st.modeTitle}>{m.title}</Text>
            <Text style={st.modeDesc}>{m.desc}</Text>
          </View>
          <Text style={st.modeGo}>›</Text>
        </Pressable>
      ))}

      <View style={st.navRow}>
        <Pressable onPress={onStudy} style={({ pressed }) => [st.navBtn, pressed && st.modePressed]}>
          <Text style={st.navTxt}>📚 Study</Text>
        </Pressable>
        <Pressable onPress={onLeaderboard} style={({ pressed }) => [st.navBtn, pressed && st.modePressed]}>
          <Text style={st.navTxt}>🏆 Leaderboard</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const st = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  body: { padding: 18, paddingTop: 28, gap: 10, alignItems: 'stretch' },
  logo: {
    color: C.gold, fontSize: 44, fontWeight: '900', textAlign: 'center', lineHeight: 46,
    letterSpacing: 3, textShadowColor: C.accent, textShadowOffset: { width: 3, height: 3 }, textShadowRadius: 0,
  },
  tagline: { color: C.muted, fontSize: 11, letterSpacing: 2, textAlign: 'center', marginBottom: 8 },
  panel: { backgroundColor: C.card, borderColor: C.border, borderWidth: 1, borderRadius: 16, padding: 14, gap: 8 },
  label: { color: C.muted, fontSize: 10, letterSpacing: 2 },
  chipRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  diffDesc: { color: C.muted, fontSize: 12, fontStyle: 'italic' },
  toggleRow: { flexDirection: 'row', gap: 8, marginTop: 2 },
  mode: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: C.panel, borderColor: C.border, borderWidth: 1, borderRadius: 16,
    paddingHorizontal: 16, paddingVertical: 14,
  },
  modePressed: { backgroundColor: C.card, borderColor: C.accent },
  modeIcon: { fontSize: 30 },
  modeTitle: { color: C.text, fontWeight: '900', fontSize: 16, letterSpacing: 1 },
  modeDesc: { color: C.muted, fontSize: 12, marginTop: 1 },
  modeGo: { color: C.accent, fontSize: 28, fontWeight: '900' },
  navRow: { flexDirection: 'row', gap: 10, marginTop: 4, marginBottom: 24 },
  navBtn: {
    flex: 1, alignItems: 'center', backgroundColor: C.panel,
    borderColor: C.border, borderWidth: 1, borderRadius: 14, paddingVertical: 12,
  },
  navTxt: { color: C.text, fontWeight: '800', fontSize: 14 },
});
