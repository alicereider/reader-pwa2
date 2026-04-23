import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const defaultSettings = {
  theme: 'wood',
  fontFamily: 'literata',
  fontSize: 18,
  lineHeight: 1.7,
  pagePadding: 20,
  readingMode: 'scroll',
  textAlign: 'left',
  brightness: 100
};

const themeMap = {
  wood: {
    '--reader-bg': '#f1e4cf',
    '--reader-fg': '#231810',
    '--reader-muted': '#71553d',
    '--surface': 'rgba(38, 27, 20, 0.82)',
    '--surface-strong': 'rgba(44, 31, 23, 0.94)',
    '--surface-border': 'rgba(255, 244, 232, 0.08)',
    '--text': '#f6efe6',
    '--muted': '#cab8a5',
    '--accent': '#9b6337',
    '--accent-2': '#d3a26f',
    '--button-dark-bg': '#13100d',
    '--button-dark-text': '#ffffff',
    '--button-light-bg': '#f4ecdf',
    '--button-light-text': '#1f1710'
  },
  light: {
    '--reader-bg': '#f6f2ea',
    '--reader-fg': '#211d17',
    '--reader-muted': '#5f564a'
  },
  sepia: {
    '--reader-bg': '#efe4d0',
    '--reader-fg': '#2c241b',
    '--reader-muted': '#6d5c49'
  },
  dark: {
    '--reader-bg': '#0b0d12',
    '--reader-fg': '#f4f0e8',
    '--reader-muted': '#a6a3a0'
  },
  night: {
    '--reader-bg': '#050608',
    '--reader-fg': '#d8d4cb',
    '--reader-muted': '#89847d'
  }
};

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('velvet-reader-settings');
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  useEffect(() => {
    localStorage.setItem('velvet-reader-settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    const themeVars = themeMap[settings.theme] ?? themeMap.dark;
    Object.entries(themeVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    document.documentElement.style.setProperty('--reader-font-size', `${settings.fontSize}px`);
    document.documentElement.style.setProperty('--reader-line-height', settings.lineHeight);
    document.documentElement.style.setProperty('--reader-padding', `${settings.pagePadding}px`);
    document.documentElement.style.setProperty('--app-brightness', `${settings.brightness}%`);
    document.documentElement.dataset.font = settings.fontFamily;
  }, [settings]);

  const value = useMemo(
    () => ({
      settings,
      updateSettings: (patch) => setSettings((prev) => ({ ...prev, ...patch })),
      resetSettings: () => setSettings(defaultSettings)
    }),
    [settings]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used inside SettingsProvider');
  }
  return context;
}
