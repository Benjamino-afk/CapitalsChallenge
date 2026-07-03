# GeoChallenger Mobile

React Native (Expo SDK 56) rebuild of [geochallenger.avgchap.com](https://geochallenger.avgchap.com) for the Google Play Store. Same AWS leaderboard backend (`geo-leaderboard` SAM stack); the website is unchanged.

## Structure

- `App.js` — screen switching (state-based, no navigation lib), Android back-button handling
- `src/data.js` — country dataset + game constants, extracted from the web `app.js`
- `src/useGame.js` — shared game state (scoring, lives, hints, streaks) for all 5 modes
- `src/screens/` — Home, MapGame, TypeGame (type/reverse/flag-hard), MCGame (mc/flag), Leaderboard, Study, ResultsModal
- `src/sfx.js` + `assets/sounds/` — WAVs synthesized from the web app's Web Audio oscillators (`scripts/gen-sfx.mjs` regenerates them)
- `assets/countries-110m.json` — bundled world-atlas TopoJSON (map mode works offline)

Map mode notes: rendered with `react-native-svg` + `d3-geo` (same Natural Earth projection as the web). Taps are hit-tested with `geoContains` after inverting the pan/zoom transform — country `Path`s have no touch handlers.

## Develop

```sh
npm install
npx expo start        # scan QR with the Expo Go app on your phone
```

## Build for Play Store

One-time setup (needs a free Expo account):

```sh
npm install -g eas-cli
eas login
eas build:configure   # writes the EAS projectId into app.json
```

Then:

```sh
eas build --platform android --profile preview     # installable .apk for device testing
eas build --platform android --profile production  # .aab for Play Console upload
```

EAS builds in the cloud and manages the Android signing keystore. Upload the `.aab` at https://play.google.com/console (one-time $25 registration; new personal accounts must run a 14-day closed test with 12 testers before production release).
