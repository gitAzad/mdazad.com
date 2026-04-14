export type ThemeSlots = {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  accent: string;
  border: string;
  ring: string;
  success: string;
  warning: string;
  destructive: string;
};

export type ThemePalette = {
  id: string;
  label: string;
  light: ThemeSlots;
  dark: ThemeSlots;
};

export type ThemeSource = 'preset' | 'custom';
