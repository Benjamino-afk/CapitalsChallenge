import { useState } from 'react';
import { getPool, shuffle, QUESTIONS, LIVES, HINTS, BASE_PTS, STREAK_BONUS, HINT_PEN } from './data';
import { playSound } from './sfx';

const isMilestone = (s) => s === 5 || s === 10 || (s > 10 && s % 10 === 0);

export function useGame(mode, settings) {
  const [g, setG] = useState(() => {
    const pool = getPool(settings);
    return {
      mode,
      q: shuffle(pool).slice(0, Math.min(QUESTIONS, pool.length)),
      qi: 0,
      score: 0,
      lives: settings.difficulty === 'easy' ? Infinity : LIVES,
      streak: 0, best: 0,
      hints: HINTS, hused: false,
      correct: 0, done: false, finished: false,
      missed: [],
    };
  });

  const sound = (type) => { if (settings.sound) playSound(type); };
  const country = g.q[g.qi];

  function answerCorrect() {
    const streakBonus = g.streak >= 3 ? STREAK_BONUS : 0;
    const hintPenalty = g.hused ? HINT_PEN : 0;
    const pts = Math.max(10, BASE_PTS + streakBonus - hintPenalty);
    const streak = g.streak + 1;
    const milestone = isMilestone(streak);
    sound(milestone ? 'streak' : 'correct');
    setG(prev => ({
      ...prev, done: true,
      score: prev.score + pts,
      streak,
      best: Math.max(prev.best, streak),
      correct: prev.correct + 1,
    }));
    return { pts, streak, milestone };
  }

  function answerWrong() {
    sound('wrong');
    const lives = g.lives - 1;
    setG(prev => ({ ...prev, done: true, streak: 0, lives, missed: [...prev.missed, country] }));
    return { lives };
  }

  function skip() {
    setG(prev => ({ ...prev, done: true, streak: 0, missed: [...prev.missed, country] }));
  }

  function useHint() {
    if (g.hints <= 0 || g.hused) return false;
    setG(prev => ({ ...prev, hints: prev.hints - 1, hused: true }));
    return true;
  }

  function next() {
    setG(prev =>
      prev.qi + 1 >= prev.q.length || prev.lives <= 0
        ? { ...prev, finished: true }
        : { ...prev, qi: prev.qi + 1, done: false, hused: false }
    );
  }

  return { g, country, answerCorrect, answerWrong, skip, useHint, next };
}
