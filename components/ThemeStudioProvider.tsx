'use client';

import { fallbackCustomTheme, themePresets } from '@/lib/theme/presets';
import { ThemeSlots, ThemeSource } from '@/lib/theme/types';
import { useTheme } from 'next-themes';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type CustomTheme = {
  light: ThemeSlots;
  dark: ThemeSlots;
};

type ThemeStudioContextType = {
  themeMode: string | undefined;
  setThemeMode: (mode: string) => void;
  source: ThemeSource;
  setSource: (source: ThemeSource) => void;
  presetId: string;
  setPresetId: (id: string) => void;
  presets: typeof themePresets;
  customTheme: CustomTheme;
  updateCustomTheme: (
    mode: 'light' | 'dark',
    slot: keyof ThemeSlots,
    value: string,
  ) => void;
};

const STORAGE_KEYS = {
  source: 'portfolio:theme-source',
  preset: 'portfolio:theme-preset',
  custom: 'portfolio:theme-custom',
};

const ThemeStudioContext = createContext<ThemeStudioContextType | null>(null);

function normalizeColor(value: string, fallback: string) {
  const color = value.trim();
  if (!color) return fallback;

  const canUseCssSupports =
    typeof window !== 'undefined' && typeof window.CSS !== 'undefined';

  if (canUseCssSupports && window.CSS.supports('color', color)) {
    return color;
  }

  const isHex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(color);
  const isFunctional =
    /^(oklch|oklab|lch|lab|rgb|rgba|hsl|hsla|color|color-mix)\(/i.test(color);
  const isVariableRef = /^var\(--[a-z0-9\-_]+\)$/i.test(color);

  if (isHex || isFunctional || isVariableRef) {
    return color;
  }

  return fallback;
}

export default function ThemeStudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [source, setSourceState] = useState<ThemeSource>(() => {
    if (typeof window === 'undefined') return 'preset';
    const savedSource = localStorage.getItem(STORAGE_KEYS.source);
    return savedSource === 'custom' ? 'custom' : 'preset';
  });
  const [presetId, setPresetIdState] = useState(() => {
    if (typeof window === 'undefined') return 'aurora';
    const savedPreset = localStorage.getItem(STORAGE_KEYS.preset);
    if (
      savedPreset &&
      themePresets.some((preset) => preset.id === savedPreset)
    ) {
      return savedPreset;
    }
    return 'aurora';
  });
  const [customTheme, setCustomTheme] = useState<CustomTheme>(() => {
    if (typeof window === 'undefined') return fallbackCustomTheme;
    const savedCustom = localStorage.getItem(STORAGE_KEYS.custom);
    if (!savedCustom) return fallbackCustomTheme;

    try {
      return JSON.parse(savedCustom) as CustomTheme;
    } catch {
      return fallbackCustomTheme;
    }
  });

  const setSource = useCallback((nextSource: ThemeSource) => {
    setSourceState(nextSource);
    localStorage.setItem(STORAGE_KEYS.source, nextSource);
  }, []);

  const setPresetId = useCallback((id: string) => {
    setPresetIdState(id);
    localStorage.setItem(STORAGE_KEYS.preset, id);
  }, []);

  const updateCustomTheme = useCallback(
    (mode: 'light' | 'dark', slot: keyof ThemeSlots, value: string) => {
      setCustomTheme((prev) => {
        const nextValue = normalizeColor(value, prev[mode][slot]);
        const updated = {
          ...prev,
          [mode]: {
            ...prev[mode],
            [slot]: nextValue,
          },
        };

        localStorage.setItem(STORAGE_KEYS.custom, JSON.stringify(updated));
        return updated;
      });
    },
    [],
  );

  useEffect(() => {
    const html = document.documentElement;
    const mode = resolvedTheme === 'dark' ? 'dark' : 'light';

    const selectedPreset =
      themePresets.find((preset) => preset.id === presetId) ?? themePresets[0];

    const activePalette =
      source === 'custom' ? customTheme[mode] : selectedPreset[mode];

    html.dataset.themeSource = source;
    html.dataset.themePreset =
      source === 'preset' ? selectedPreset.id : 'custom';

    html.style.setProperty('--theme-background', activePalette.background);
    html.style.setProperty('--theme-surface', activePalette.surface);
    html.style.setProperty('--theme-text', activePalette.text);
    html.style.setProperty('--theme-muted-text', activePalette.mutedText);
    html.style.setProperty('--theme-primary', activePalette.primary);
    html.style.setProperty('--theme-accent', activePalette.accent);
    html.style.setProperty('--theme-border', activePalette.border);
    html.style.setProperty('--theme-ring', activePalette.ring);
    html.style.setProperty('--theme-success', activePalette.success);
    html.style.setProperty('--theme-warning', activePalette.warning);
    html.style.setProperty('--theme-destructive', activePalette.destructive);
  }, [customTheme, presetId, resolvedTheme, source]);

  const value = useMemo(
    () => ({
      themeMode: theme,
      setThemeMode: setTheme,
      source,
      setSource,
      presetId,
      setPresetId,
      presets: themePresets,
      customTheme,
      updateCustomTheme,
    }),
    [
      customTheme,
      presetId,
      setPresetId,
      setSource,
      setTheme,
      source,
      theme,
      updateCustomTheme,
    ],
  );

  return (
    <ThemeStudioContext.Provider value={value}>
      {children}
    </ThemeStudioContext.Provider>
  );
}

export function useThemeStudio() {
  const context = useContext(ThemeStudioContext);
  if (!context) {
    throw new Error('useThemeStudio must be used within ThemeStudioProvider');
  }
  return context;
}
