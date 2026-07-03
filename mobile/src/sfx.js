import { createAudioPlayer, setAudioModeAsync } from 'expo-audio';

// Mix with other audio and respect the silent switch like a game should
setAudioModeAsync({ playsInSilentMode: false, interruptionMode: 'mixWithOthers' }).catch(() => {});

const players = {
  correct: createAudioPlayer(require('../assets/sounds/correct.wav')),
  wrong: createAudioPlayer(require('../assets/sounds/wrong.wav')),
  streak: createAudioPlayer(require('../assets/sounds/streak.wav')),
};

export function playSound(type) {
  const p = players[type];
  if (!p) return;
  try {
    p.seekTo(0);
    p.play();
  } catch {}
}
