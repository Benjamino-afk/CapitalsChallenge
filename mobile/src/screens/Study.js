import { useMemo, useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { DATA, SUBREGION } from '../data';
import { Chip, GameHeader } from '../components';
import { C } from '../theme';

const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export function Study({ onHome }) {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');

  const list = useMemo(() => {
    let l = region !== 'All' ? DATA.filter(c => c.region === region) : DATA;
    const q = query.toLowerCase();
    if (q) l = l.filter(c => c.name.toLowerCase().includes(q) || c.capital.toLowerCase().includes(q));
    return l;
  }, [query, region]);

  return (
    <View style={st.screen}>
      <GameHeader title="📚 STUDY" qNum={0} qTotal={0} onBack={onHome} />
      <TextInput
        style={st.search}
        placeholder="Search country or capital…"
        placeholderTextColor={C.muted}
        value={query}
        onChangeText={setQuery}
        autoCorrect={false}
      />
      <View style={st.chips}>
        {REGIONS.map(r => (
          <Chip key={r} label={r} active={region === r} onPress={() => setRegion(r)} />
        ))}
      </View>
      <FlatList
        data={list}
        keyExtractor={c => c.name}
        contentContainerStyle={st.list}
        ListEmptyComponent={<Text style={st.empty}>No results found</Text>}
        renderItem={({ item: c }) => (
          <View style={st.row}>
            <Text style={st.flag}>{c.flag}</Text>
            <View style={{ flex: 1 }}>
              <Text style={st.country}>{c.name}</Text>
              <Text style={st.cap}>{c.capital}</Text>
            </View>
            <Text style={st.region}>{SUBREGION[c.name] || c.region}</Text>
          </View>
        )}
      />
    </View>
  );
}

const st = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  search: {
    backgroundColor: C.card, borderColor: C.border, borderWidth: 1, borderRadius: 12,
    color: C.text, paddingHorizontal: 14, paddingVertical: 10, fontSize: 15,
    marginHorizontal: 14, marginBottom: 8,
  },
  chips: { flexDirection: 'row', gap: 8, paddingHorizontal: 14, paddingBottom: 8, flexWrap: 'wrap' },
  list: { paddingHorizontal: 14, paddingBottom: 20, gap: 6 },
  empty: { color: C.muted, textAlign: 'center', marginTop: 40 },
  row: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: C.card, borderRadius: 12, borderWidth: 1, borderColor: C.border,
    paddingHorizontal: 12, paddingVertical: 9,
  },
  flag: { fontSize: 22 },
  country: { color: C.text, fontWeight: '800', fontSize: 15 },
  cap: { color: C.gold, fontSize: 13 },
  region: { color: C.muted, fontSize: 11 },
});
