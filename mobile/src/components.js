import { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Animated } from 'react-native';
import { C } from './theme';
import { LIVES, flagISO2 } from './data';

// ── HUD ── score / streak / lives (+ hint button outside MC mode)
export function HUD({ g, onHint, showHint = true }) {
  const lives = g.lives === Infinity ? '∞'
    : '❤️'.repeat(g.lives) + '🖤'.repeat(Math.max(0, LIVES - g.lives));
  return (
    <View style={hud.row}>
      <Stat label="SCORE" value={String(g.score)} color={C.gold} />
      <Stat label="STREAK" value={g.streak + (g.streak >= 3 ? '🔥' : '')} color={C.accent} />
      <Stat label="LIVES" value={lives} color={C.text} />
      {showHint && (
        <Pressable
          onPress={onHint}
          disabled={g.hints <= 0 || g.hused}
          style={({ pressed }) => [hud.hintBtn, (g.hints <= 0 || g.hused) && hud.hintOff, pressed && hud.pressed]}
        >
          <Text style={hud.hintTxt}>💡 {g.hints}</Text>
        </Pressable>
      )}
    </View>
  );
}

function Stat({ label, value, color }) {
  return (
    <View style={hud.stat}>
      <Text style={hud.label}>{label}</Text>
      <Text style={[hud.value, { color }]} numberOfLines={1}>{value}</Text>
    </View>
  );
}

const hud = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 12, paddingVertical: 8 },
  stat: { backgroundColor: C.card, borderColor: C.border, borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 4, minWidth: 64, alignItems: 'center' },
  label: { color: C.muted, fontSize: 9, letterSpacing: 1.5 },
  value: { fontSize: 15, fontWeight: '800' },
  hintBtn: { marginLeft: 'auto', backgroundColor: C.card, borderColor: C.gold, borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8 },
  hintOff: { opacity: 0.35 },
  hintTxt: { color: C.gold, fontWeight: '800', fontSize: 13 },
  pressed: { opacity: 0.7 },
});

// ── TIMER BAR ── width animates down; turns gold <50%, red <25%
export function TimerBar({ seconds, qKey, paused, onExpire }) {
  const [remaining, setRemaining] = useState(seconds);
  const expired = useRef(false);

  // Reset only on a new question — pausing (answer shown) freezes the bar in place
  useEffect(() => {
    expired.current = false;
    setRemaining(seconds);
  }, [qKey]);

  useEffect(() => {
    if (paused) return;
    const end = Date.now() + seconds * 1000;
    const iv = setInterval(() => {
      const rem = Math.max(0, end - Date.now());
      setRemaining(rem / 1000);
      if (rem <= 0 && !expired.current) {
        expired.current = true;
        clearInterval(iv);
        onExpire();
      }
    }, 100);
    return () => clearInterval(iv);
  }, [qKey, paused]);

  const pct = (remaining / seconds) * 100;
  const color = pct < 25 ? C.red : pct < 50 ? C.gold : C.green;
  return (
    <View style={timer.wrap}>
      <View style={timer.track}>
        <View style={[timer.bar, { width: `${pct}%`, backgroundColor: color }]} />
      </View>
      <Text style={[timer.val, { color: pct < 50 ? color : C.muted }]}>{Math.ceil(remaining)}s</Text>
    </View>
  );
}

const timer = StyleSheet.create({
  wrap: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 12, paddingBottom: 6 },
  track: { flex: 1, height: 8, backgroundColor: C.panel, borderRadius: 4, overflow: 'hidden' },
  bar: { height: '100%', borderRadius: 4 },
  val: { fontSize: 12, fontWeight: '800', width: 34, textAlign: 'right' },
});

// ── FEEDBACK BANNER ── replaces the web toast/map feedback pill
export function Feedback({ msg, ok }) {
  if (!msg) return null;
  return (
    <View style={[fb.pill, { backgroundColor: ok ? C.green : C.red }]}>
      <Text style={fb.txt}>{msg}</Text>
    </View>
  );
}

const fb = StyleSheet.create({
  pill: { position: 'absolute', top: 100, alignSelf: 'center', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, zIndex: 10, elevation: 4 },
  txt: { color: '#fff', fontWeight: '900', fontSize: 16 },
});

// ── STREAK BURST ── pops on 5/10/20… streaks
export function StreakBurst({ streak, burstKey }) {
  const scale = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!burstKey) return;
    scale.setValue(0.3);
    Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }).start(() => {
      Animated.timing(scale, { toValue: 0, duration: 300, delay: 700, useNativeDriver: true }).start();
    });
  }, [burstKey]);
  if (!burstKey) return null;
  return (
    <Animated.View style={[burst.wrap, { transform: [{ scale }] }]} pointerEvents="none">
      <Text style={burst.txt}>{streak >= 10 ? `⚡ ${streak} STREAK!` : '🔥 5 STREAK!'}</Text>
    </Animated.View>
  );
}

const burst = StyleSheet.create({
  wrap: { position: 'absolute', top: '40%', alignSelf: 'center', zIndex: 20 },
  txt: { fontSize: 32, fontWeight: '900', color: C.gold, textShadowColor: C.accent, textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 0 },
});

// ── FLAG IMAGE ── flagcdn PNG with emoji fallback (flag mode)
export function FlagImg({ country, size = 120 }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <Text style={{ fontSize: size * 0.6 }}>{country.flag}</Text>;
  return (
    <Image
      source={{ uri: `https://flagcdn.com/w320/${flagISO2(country.flag)}.png` }}
      style={{ width: size * 1.5, height: size, borderRadius: 8, backgroundColor: C.panel }}
      resizeMode="contain"
      onError={() => setFailed(true)}
    />
  );
}

// ── BUTTONS / CHIPS ──
export function Btn({ label, onPress, color = C.accent, disabled, style, small }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        btn.base, small && btn.small, { backgroundColor: color },
        disabled && btn.off, pressed && btn.pressed, style,
      ]}
    >
      <Text style={[btn.txt, small && btn.txtSmall]}>{label}</Text>
    </Pressable>
  );
}

export function Chip({ label, active, onPress }) {
  return (
    <Pressable onPress={onPress} style={[chip.base, active && chip.active]}>
      <Text style={[chip.txt, active && chip.txtActive]}>{label}</Text>
    </Pressable>
  );
}

const btn = StyleSheet.create({
  base: { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 22, alignItems: 'center' },
  small: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 10 },
  txt: { color: '#fff', fontWeight: '900', fontSize: 16, letterSpacing: 1 },
  txtSmall: { fontSize: 13 },
  off: { opacity: 0.4 },
  pressed: { opacity: 0.8 },
});

const chip = StyleSheet.create({
  base: { borderRadius: 999, borderWidth: 1, borderColor: C.border, backgroundColor: C.panel, paddingHorizontal: 14, paddingVertical: 7 },
  active: { backgroundColor: C.accent, borderColor: C.accent },
  txt: { color: C.muted, fontWeight: '700', fontSize: 13 },
  txtActive: { color: '#fff' },
});

// ── GAME HEADER ── back button + question counter
export function GameHeader({ title, qNum, qTotal, onBack }) {
  return (
    <View style={gh.row}>
      <Pressable onPress={onBack} hitSlop={10} style={({ pressed }) => pressed && { opacity: 0.6 }}>
        <Text style={gh.back}>‹ Home</Text>
      </Pressable>
      <Text style={gh.title} numberOfLines={1}>{title}</Text>
      <Text style={gh.count}>{qNum}/{qTotal}</Text>
    </View>
  );
}

const gh = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 14, paddingVertical: 10 },
  back: { color: C.blue, fontSize: 16, fontWeight: '800' },
  title: { color: C.text, fontWeight: '900', fontSize: 15, letterSpacing: 1 },
  count: { color: C.muted, fontWeight: '800', fontSize: 14 },
});
