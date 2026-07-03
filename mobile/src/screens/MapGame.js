import { useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { geoNaturalEarth1, geoPath, geoContains } from 'd3-geo';
import { feature } from 'topojson-client';
import { useGame } from '../useGame';
import { DATA, TIMER_SECS, geoHint, HINT_PEN } from '../data';
import { HUD, TimerBar, Feedback, StreakBurst, Btn, GameHeader } from '../components';
import { C } from '../theme';
import { ResultsModal } from './ResultsModal';
import topo from '../../assets/countries-110m.json';

const FEATS = feature(topo, topo.objects.countries).features;
const MAX_ZOOM = 8;

const clampW = (v, min, max) => { 'worklet'; return Math.min(max, Math.max(min, v)); };

export function MapGame({ settings, onHome, onPlayAgain }) {
  const { g, country, answerCorrect, answerWrong, skip, useHint, next } = useGame('map', settings);
  const [size, setSize] = useState(null);
  const [flash, setFlash] = useState({});          // { correctIso, wrongIso, targetIso }
  const [feedback, setFeedback] = useState(null);  // { msg, ok }
  const [hintText, setHintText] = useState('');
  const [burst, setBurst] = useState({ key: 0, streak: 0 });
  const busy = useRef(false);

  const { proj, paths } = useMemo(() => {
    if (!size) return { proj: null, paths: [] };
    const proj = geoNaturalEarth1().fitSize([size.w, size.h], { type: 'Sphere' });
    const path = geoPath(proj);
    return { proj, paths: FEATS.map(f => ({ iso: +f.id, d: path(f), f })).filter(p => p.d) };
  }, [size]);

  // ── pan / pinch (zoom to center, like the web's d3.zoom 1–8x) ──
  const scale = useSharedValue(1), savedScale = useSharedValue(1);
  const tx = useSharedValue(0), ty = useSharedValue(0);
  const savedTx = useSharedValue(0), savedTy = useSharedValue(0);

  const maxT = (s, dim) => { 'worklet'; return (dim * (s - 1)) / 2; };

  const pinch = Gesture.Pinch()
    .onUpdate(e => { scale.value = clampW(savedScale.value * e.scale, 1, MAX_ZOOM); })
    .onEnd(() => {
      savedScale.value = scale.value;
      if (size) {
        tx.value = clampW(tx.value, -maxT(scale.value, size.w), maxT(scale.value, size.w));
        ty.value = clampW(ty.value, -maxT(scale.value, size.h), maxT(scale.value, size.h));
      }
      savedTx.value = tx.value; savedTy.value = ty.value;
    });

  const pan = Gesture.Pan()
    .minDistance(10)
    .maxPointers(1)
    .onUpdate(e => {
      if (!size) return;
      tx.value = clampW(savedTx.value + e.translationX, -maxT(scale.value, size.w), maxT(scale.value, size.w));
      ty.value = clampW(savedTy.value + e.translationY, -maxT(scale.value, size.h), maxT(scale.value, size.h));
    })
    .onEnd(() => { savedTx.value = tx.value; savedTy.value = ty.value; });

  const tap = Gesture.Tap().onEnd((e, success) => {
    if (success) handleTapJS(e.x, e.y);
  }).runOnJS(true);

  const gestures = Gesture.Race(Gesture.Simultaneous(pan, pinch), tap);

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: tx.value }, { translateY: ty.value }, { scale: scale.value }],
  }));

  // Invert view transform (translate, then scale about center) back to map coords,
  // then unproject to lon/lat and hit-test polygons.
  function handleTapJS(x, y) {
    if (!proj || g.done || busy.current) return;
    const cx = size.w / 2, cy = size.h / 2, s = scale.value;
    const mapX = cx + (x - tx.value - cx) / s;
    const mapY = cy + (y - ty.value - cy) / s;
    const lonlat = proj.invert([mapX, mapY]);
    if (!lonlat) return;
    const hit = FEATS.find(f => geoContains(f, lonlat));
    if (!hit) return;
    handleAnswer(+hit.id);
  }

  function handleAnswer(clickedIso) {
    busy.current = true;
    if (clickedIso === country.iso) {
      const { pts, streak, milestone } = answerCorrect();
      setFlash({ correctIso: clickedIso });
      setFeedback({ msg: streak >= 3 ? `🔥 ${pts} PTS!` : `✓ ${pts} PTS`, ok: true });
      if (milestone) setBurst(b => ({ key: b.key + 1, streak }));
      setTimeout(() => advance(), 1000);
    } else {
      answerWrong();
      const clicked = DATA.find(d => d.iso === clickedIso);
      setFlash({ wrongIso: clickedIso, targetIso: country.iso });
      setFeedback({ msg: clicked ? `✗ That's ${clicked.name}` : '✗ WRONG!', ok: false });
      setTimeout(() => advance(), 1300);
    }
  }

  function handleSkip() {
    if (g.done || busy.current) return;
    busy.current = true;
    skip();
    setFlash({ targetIso: country.iso });
    setFeedback({ msg: `📍 ${country.name}`, ok: false });
    setTimeout(() => advance(), 1800);
  }

  function advance() {
    busy.current = false;
    setFlash({});
    setFeedback(null);
    setHintText('');
    next();
  }

  function handleHint() {
    if (!useHint()) return;
    setHintText(`💡 ${geoHint(country)} (−${HINT_PEN} pts if correct)`);
  }

  const fillFor = (iso) =>
    iso === flash.correctIso ? C.green
    : iso === flash.wrongIso ? C.red
    : iso === flash.targetIso ? '#f39c12'
    : '#2a5272';

  const timed = settings.timed && settings.difficulty !== 'easy';

  return (
    <View style={st.screen}>
      <GameHeader title="🗺️ MAP CLICK" qNum={Math.min(g.qi + 1, g.q.length)} qTotal={g.q.length} onBack={onHome} />
      <HUD g={g} onHint={handleHint} />
      {timed && !g.finished && (
        <TimerBar seconds={TIMER_SECS[settings.difficulty]} qKey={g.qi} paused={g.done} onExpire={handleSkip} />
      )}
      <View style={st.question}>
        <Text style={st.qText}>{country ? `${country.flag} ${country.name}` : ''}</Text>
        {!!hintText && <Text style={st.hint}>{hintText}</Text>}
      </View>
      <View style={st.mapWrap} onLayout={e => {
        const { width, height } = e.nativeEvent.layout;
        if (!size && width && height) setSize({ w: width, h: height });
      }}>
        {size && (
          <GestureDetector gesture={gestures}>
            <Animated.View style={[{ width: size.w, height: size.h }, animStyle]}>
              <Svg width={size.w} height={size.h}>
                {paths.map(p => (
                  <Path key={p.iso + p.d.slice(0, 24)} d={p.d} fill={fillFor(p.iso)} stroke="#3a7a9a" strokeWidth={0.4} />
                ))}
              </Svg>
            </Animated.View>
          </GestureDetector>
        )}
        <Feedback msg={feedback?.msg} ok={feedback?.ok} />
        <StreakBurst streak={burst.streak} burstKey={burst.key} />
      </View>
      <View style={st.footer}>
        <Btn label="SKIP →" color={C.panel} small disabled={g.done} onPress={handleSkip} />
      </View>
      {g.finished && <ResultsModal g={g} settings={settings} onPlayAgain={onPlayAgain} onHome={onHome} />}
    </View>
  );
}

const st = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  question: { alignItems: 'center', paddingVertical: 8, paddingHorizontal: 16 },
  qText: { color: C.text, fontSize: 22, fontWeight: '900' },
  hint: { color: C.gold, fontSize: 13, marginTop: 4 },
  mapWrap: { flex: 1, overflow: 'hidden', backgroundColor: '#0a1422' },
  footer: { padding: 12, alignItems: 'flex-end' },
});
