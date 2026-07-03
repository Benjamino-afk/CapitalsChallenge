import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DEFAULTS = { difficulty: 'medium', region: 'all', timed: false, sound: true };
const KEY = 'geo_settings';

const Ctx = createContext({ settings: DEFAULTS, update: () => {} });

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(DEFAULTS);

  useEffect(() => {
    AsyncStorage.getItem(KEY).then(raw => {
      if (raw) try { setSettings({ ...DEFAULTS, ...JSON.parse(raw) }); } catch {}
    });
  }, []);

  const update = (patch) => {
    setSettings(prev => {
      const next = { ...prev, ...patch };
      AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
      return next;
    });
  };

  return <Ctx.Provider value={{ settings, update }}>{children}</Ctx.Provider>;
}

export const useSettings = () => useContext(Ctx);
