import { useEffect, useState } from 'react';
import { View, Platform, StatusBar as RNStatusBar, BackHandler } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SettingsProvider, useSettings } from './src/settings';
import { Home } from './src/screens/Home';
import { MapGame } from './src/screens/MapGame';
import { TypeGame } from './src/screens/TypeGame';
import { MCGame } from './src/screens/MCGame';
import { Leaderboard } from './src/screens/Leaderboard';
import { Study } from './src/screens/Study';
import { MODE_NAMES } from './src/screens/ResultsModal';
import { C } from './src/theme';

function Main() {
  const { settings } = useSettings();
  const [screen, setScreen] = useState({ name: 'home' });
  const [lastPlayed, setLastPlayed] = useState({ diff: 'medium', mode: 'Map' });

  const goHome = () => setScreen({ name: 'home' });
  const play = (mode) => {
    setLastPlayed({ diff: settings.difficulty, mode: MODE_NAMES[mode] });
    setScreen({ name: 'game', mode, nonce: Date.now() });
  };
  const playAgain = () => setScreen(s => ({ ...s, nonce: Date.now() }));

  // Android back button returns home instead of exiting mid-game
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (screen.name === 'home') return false;
      goHome();
      return true;
    });
    return () => sub.remove();
  }, [screen.name]);

  if (screen.name === 'game') {
    const { mode, nonce } = screen;
    const props = { key: nonce, settings, onHome: goHome, onPlayAgain: playAgain };
    if (mode === 'map') return <MapGame {...props} />;
    if (mode === 'mc' || (mode === 'flag' && settings.difficulty !== 'hard')) return <MCGame mode={mode} {...props} />;
    return <TypeGame mode={mode} {...props} />;
  }
  if (screen.name === 'lb') return <Leaderboard initialDiff={lastPlayed.diff} initialMode={lastPlayed.mode} onHome={goHome} />;
  if (screen.name === 'study') return <Study onHome={goHome} />;
  return <Home onPlay={play} onLeaderboard={() => setScreen({ name: 'lb' })} onStudy={() => setScreen({ name: 'study' })} />;
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SettingsProvider>
        <View style={{ flex: 1, backgroundColor: C.bg, paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0 }}>
          <StatusBar style="light" />
          <Main />
        </View>
      </SettingsProvider>
    </GestureHandlerRootView>
  );
}
