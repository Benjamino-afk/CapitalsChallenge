// Synthesizes the SFX from the web app's Web Audio oscillators into WAV files.
// Run: node scripts/gen-sfx.mjs   (writes assets/sounds/*.wav)
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const RATE = 44100;
const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'sounds');

function osc(type, freq, t) {
  const phase = (freq * t) % 1;
  if (type === 'sine') return Math.sin(2 * Math.PI * phase);
  if (type === 'sawtooth') return 2 * phase - 1;
  return 0;
}

// tone(): matches web app — gain at vol, exponential ramp to 0.001 over dur
function render(tones) {
  const total = Math.max(...tones.map(t => t.start + t.dur)) + 0.05;
  const buf = new Float64Array(Math.ceil(total * RATE));
  for (const { freq, type, start, dur, vol = 0.25 } of tones) {
    const s0 = Math.floor(start * RATE), n = Math.floor(dur * RATE);
    for (let i = 0; i < n; i++) {
      const t = i / RATE;
      const gain = vol * Math.pow(0.001 / vol, t / dur); // exponentialRampToValueAtTime
      buf[s0 + i] += gain * osc(type, freq, t);
    }
  }
  return buf;
}

function wav(samples) {
  const pcm = Buffer.alloc(samples.length * 2);
  for (let i = 0; i < samples.length; i++) {
    pcm.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(samples[i] * 32767))), i * 2);
  }
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + pcm.length, 4); h.write('WAVEfmt ', 8);
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22);
  h.writeUInt32LE(RATE, 24); h.writeUInt32LE(RATE * 2, 28); h.writeUInt16LE(2, 32);
  h.writeUInt16LE(16, 34); h.write('data', 36); h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

const sfx = {
  correct: [
    { freq: 523, type: 'sine', start: 0,   dur: 0.12 },
    { freq: 659, type: 'sine', start: 0.1, dur: 0.12 },
    { freq: 784, type: 'sine', start: 0.2, dur: 0.2  },
  ],
  wrong: [
    { freq: 300, type: 'sawtooth', start: 0,   dur: 0.12, vol: 0.2  },
    { freq: 220, type: 'sawtooth', start: 0.1, dur: 0.18, vol: 0.15 },
  ],
  streak: [
    { freq: 523,  type: 'sine', start: 0,    dur: 0.08 },
    { freq: 659,  type: 'sine', start: 0.08, dur: 0.08 },
    { freq: 784,  type: 'sine', start: 0.16, dur: 0.08 },
    { freq: 1047, type: 'sine', start: 0.24, dur: 0.3  },
  ],
};

for (const [name, tones] of Object.entries(sfx)) {
  writeFileSync(join(outDir, `${name}.wav`), wav(render(tones)));
  console.log(`${name}.wav written`);
}
