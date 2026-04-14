'use client';

import { ThemeSlots } from '@/lib/theme/types';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Monitor, Moon, Palette, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useMemo, useRef, useState } from 'react';
import { useThemeStudio } from './ThemeStudioProvider';

function toPickerHex(value: string) {
  if (/^#[0-9A-Fa-f]{6}$/.test(value.trim())) return value.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(value.trim())) {
    const short = value.trim().slice(1);
    return `#${short[0]}${short[0]}${short[1]}${short[1]}${short[2]}${short[2]}`;
  }
  return '#2563eb';
}

function getPresetPreviewColors(
  preset: { light: ThemeSlots; dark: ThemeSlots },
  mode: string | undefined,
) {
  const palette = mode === 'dark' ? preset.dark : preset.light;
  return {
    primary: palette.primary,
    accent: palette.accent,
  };
}

export default function ThemeStudioPanel() {
  const { resolvedTheme } = useTheme();
  const {
    source,
    setSource,
    presetId,
    setPresetId,
    presets,
    customTheme,
    updateCustomTheme,
    themeMode,
    setThemeMode,
  } = useThemeStudio();

  const [customEditorMode, setCustomEditorMode] = useState<'light' | 'dark'>(
    'light',
  );
  const colorInputRefs = useRef<
    Partial<Record<keyof ThemeSlots, HTMLInputElement | null>>
  >({});
  const activeCustomPalette = customTheme[customEditorMode];
  const previewMode =
    themeMode === 'dark' || (themeMode === 'system' && resolvedTheme === 'dark')
      ? 'dark'
      : 'light';

  const editableSlots = useMemo(
    () =>
      [
        ['background', 'Background'],
        ['surface', 'Surface'],
        ['text', 'Text'],
        ['mutedText', 'Muted Text'],
        ['primary', 'Primary'],
        ['accent', 'Accent'],
        ['border', 'Border'],
        ['ring', 'Ring'],
        ['success', 'Success'],
        ['warning', 'Warning'],
        ['destructive', 'Destructive'],
      ] as [keyof ThemeSlots, string][],
    [],
  );

  return (
    <div
      className="w-[min(92vw,24rem)] rounded-2xl border p-4 shadow-xl backdrop-blur-xl"
      style={{
        background:
          'color-mix(in oklch, var(--theme-surface) 88%, transparent)',
        borderColor:
          'color-mix(in oklch, var(--theme-border) 72%, transparent)',
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold">
          <Palette className="h-4 w-4" /> Theme Studio
        </h3>
        <span
          className="rounded-full px-2 py-1 text-[11px] font-medium"
          style={{
            background:
              'color-mix(in oklch, var(--theme-primary) 14%, transparent)',
            color: 'var(--theme-primary)',
          }}
        >
          Live
        </span>
      </div>

      <div className="mb-3">
        <p
          className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em]"
          style={{ color: 'var(--theme-muted-text)' }}
        >
          Mode
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'light', label: 'Light', icon: Sun },
            { id: 'dark', label: 'Dark', icon: Moon },
            { id: 'system', label: 'System', icon: Monitor },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setThemeMode(id)}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-xs font-medium"
              style={{
                borderColor:
                  themeMode === id
                    ? 'color-mix(in oklch, var(--theme-primary) 60%, transparent)'
                    : 'color-mix(in oklch, var(--theme-border) 70%, transparent)',
                background:
                  themeMode === id
                    ? 'color-mix(in oklch, var(--theme-primary) 15%, transparent)'
                    : 'transparent',
              }}
              aria-pressed={themeMode === id}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="mb-3 flex rounded-xl border p-1"
        role="tablist"
        aria-label="Theme source"
        style={{
          background:
            'color-mix(in oklch, var(--theme-surface) 75%, transparent)',
          borderColor:
            'color-mix(in oklch, var(--theme-border) 70%, transparent)',
        }}
      >
        {(['preset', 'custom'] as const).map((value) => (
          <button
            key={value}
            onClick={() => setSource(value)}
            role="tab"
            aria-selected={source === value}
            className="relative flex-1 rounded-lg px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em]"
            style={{
              color:
                source === value
                  ? 'var(--theme-text)'
                  : 'var(--theme-muted-text)',
            }}
          >
            {source === value && (
              <motion.div
                layoutId="theme-source-active"
                className="absolute inset-0 rounded-lg border"
                style={{
                  background:
                    'color-mix(in oklch, var(--theme-primary) 14%, transparent)',
                  borderColor:
                    'color-mix(in oklch, var(--theme-primary) 45%, transparent)',
                }}
              />
            )}
            <span className="relative z-10">{value}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {source === 'preset' ? (
          <motion.div
            key="preset"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="grid grid-cols-3 gap-3"
          >
            {presets.map((preset) => {
              const preview = getPresetPreviewColors(preset, previewMode);

              return (
                <button
                  key={preset.id}
                  onClick={() => setPresetId(preset.id)}
                  className="relative rounded-md border px-2 py-2 text-xs font-medium"
                  style={{
                    borderColor:
                      preset.id === presetId
                        ? 'color-mix(in oklch, var(--theme-primary) 68%, transparent)'
                        : 'color-mix(in oklch, var(--theme-border) 70%, transparent)',
                    background:
                      preset.id === presetId
                        ? 'color-mix(in oklch, var(--theme-primary) 14%, transparent)'
                        : 'transparent',
                  }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span className="relative inline-block h-3 w-5">
                      <span
                        className="absolute left-0 top-0 h-3 w-3 rounded-full border"
                        style={{
                          background: preview.primary,
                          borderColor:
                            'color-mix(in oklch, var(--theme-surface) 72%, transparent)',
                        }}
                      />
                      <span
                        className="absolute right-0 top-0 h-3 w-3 rounded-full border"
                        style={{
                          background: preview.accent,
                          borderColor:
                            'color-mix(in oklch, var(--theme-surface) 72%, transparent)',
                        }}
                      />
                    </span>
                    <span>{preset.label}</span>
                  </span>
                  {preset.id === presetId && (
                    <Check className="absolute right-1.5 top-1.5 h-3 w-3" />
                  )}
                </button>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="custom"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            <div className="mb-2 flex gap-2">
              {(['light', 'dark'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setCustomEditorMode(mode)}
                  className="rounded-md border px-2.5 py-1 text-xs font-medium capitalize"
                  style={{
                    borderColor:
                      customEditorMode === mode
                        ? 'color-mix(in oklch, var(--theme-primary) 68%, transparent)'
                        : 'color-mix(in oklch, var(--theme-border) 70%, transparent)',
                    background:
                      customEditorMode === mode
                        ? 'color-mix(in oklch, var(--theme-primary) 14%, transparent)'
                        : 'transparent',
                  }}
                >
                  {mode}
                </button>
              ))}
            </div>

            <div className="max-h-60 space-y-2 overflow-y-auto pr-1">
              {editableSlots.map(([slot, label]) => (
                <label
                  key={slot}
                  className="flex items-center justify-between gap-3 text-xs"
                >
                  <span style={{ color: 'var(--theme-muted-text)' }}>
                    {label}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => colorInputRefs.current[slot]?.click()}
                      className="h-5 w-5 rounded border"
                      style={{
                        background: activeCustomPalette[slot],
                        borderColor:
                          'color-mix(in oklch, var(--theme-border) 70%, transparent)',
                      }}
                      aria-label={`Pick ${label} color`}
                      title={`Pick ${label} color`}
                    />
                    <input
                      ref={(node) => {
                        colorInputRefs.current[slot] = node;
                      }}
                      type="color"
                      value={toPickerHex(activeCustomPalette[slot])}
                      onChange={(event) =>
                        updateCustomTheme(
                          customEditorMode,
                          slot,
                          event.target.value,
                        )
                      }
                      className="sr-only"
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                    <input
                      value={activeCustomPalette[slot]}
                      onChange={(event) =>
                        updateCustomTheme(
                          customEditorMode,
                          slot,
                          event.target.value,
                        )
                      }
                      className="w-28 rounded-md border border-border bg-transparent px-2 py-1 font-mono text-[10px]"
                      placeholder="oklch(...) / #hex / rgb(...)"
                    />
                  </div>
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
