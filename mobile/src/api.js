export const API = 'https://7bk6medhc2.execute-api.ap-southeast-2.amazonaws.com';

export async function fetchScores(difficulty, mode) {
  const res = await fetch(`${API}/scores?difficulty=${difficulty}&mode=${mode}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export function postScore({ name, score, mode, correct, streak, difficulty }) {
  return fetch(API + '/scores', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, score, mode, correct, streak, difficulty }),
  }).catch(() => {});
}
