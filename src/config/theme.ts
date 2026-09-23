import type { ThemeConfig, ThemePreset } from '@/types';

// ============================================================
// Theme Presets — each preset defines a complete visual identity.
// To customize for a client, pick a preset and override any values.
// ============================================================

export const themePresets: Record<ThemePreset, ThemeConfig> = {
  luxury: {
    preset: 'luxury',
    colors: {
      primary: '#b08968',
      primaryDark: '#8b6a4f',
      primaryLight: '#d4b59a',
      secondary: '#1c1416',
      accent: '#c9a96a',
      background: '#121013',
      surface: '#1c1719',
      surfaceAlt: '#261f22',
      text: '#e8ddd5',
      textMuted: '#a89a90',
      heading: '#f5ece4',
      border: '#2e2528',
      success: '#5a8c6a',
      warning: '#c9a96a',
      error: '#b23a3a',
    },
    fonts: {
      heading: "'Cormorant Garamond', Georgia, serif",
      body: "'Jost', system-ui, sans-serif",
    },
    radius: { sm: '3px', md: '6px', lg: '12px', full: '9999px' },
    buttonStyle: 'solid',
  },
  modern: {
    preset: 'modern',
    colors: {
      primary: '#2563eb',
      primaryDark: '#1d4ed8',
      primaryLight: '#60a5fa',
      secondary: '#0f172a',
      accent: '#06b6d4',
      background: '#ffffff',
      surface: '#f8fafc',
      surfaceAlt: '#f1f5f9',
      text: '#1e293b',
      textMuted: '#64748b',
      heading: '#0f172a',
      border: '#e2e8f0',
      success: '#16a34a',
      warning: '#f59e0b',
      error: '#dc2626',
    },
    fonts: {
      heading: "'Poppins', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
    },
    radius: { sm: '6px', md: '12px', lg: '20px', full: '9999px' },
    buttonStyle: 'solid',
  },
  minimal: {
    preset: 'minimal',
    colors: {
      primary: '#1a1a1a',
      primaryDark: '#000000',
      primaryLight: '#404040',
      secondary: '#f5f5f5',
      accent: '#8b7355',
      background: '#fafaf9',
      surface: '#ffffff',
      surfaceAlt: '#f5f5f4',
      text: '#27272a',
      textMuted: '#71717a',
      heading: '#18181b',
      border: '#e4e4e7',
      success: '#16a34a',
      warning: '#f59e0b',
      error: '#dc2626',
    },
    fonts: {
      heading: "'Inter', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
    },
    radius: { sm: '2px', md: '4px', lg: '8px', full: '9999px' },
    buttonStyle: 'outline',
  },
  cafe: {
    preset: 'cafe',
    colors: {
      primary: '#9c6b3f',
      primaryDark: '#7a5230',
      primaryLight: '#c4986e',
      secondary: '#3e2723',
      accent: '#d7a86e',
      background: '#faf6f0',
      surface: '#fff9f2',
      surfaceAlt: '#f3ebe0',
      text: '#4a3728',
      textMuted: '#8b7a68',
      heading: '#3e2723',
      border: '#e8dccd',
      success: '#5a8c5a',
      warning: '#d4a03c',
      error: '#c0392b',
    },
    fonts: {
      heading: "'Playfair Display', Georgia, serif",
      body: "'Inter', system-ui, sans-serif",
    },
    radius: { sm: '4px', md: '10px', lg: '18px', full: '9999px' },
    buttonStyle: 'solid',
  },
  traditional: {
    preset: 'traditional',
    colors: {
      primary: '#8b0000',
      primaryDark: '#6b0000',
      primaryLight: '#b22222',
      secondary: '#2d1b0e',
      accent: '#daa520',
      background: '#fdf8f0',
      surface: '#fffaf0',
      surfaceAlt: '#f5ead8',
      text: '#3d2b1f',
      textMuted: '#8a7560',
      heading: '#2d1b0e',
      border: '#e8d9c5',
      success: '#5a8c5a',
      warning: '#d4a03c',
      error: '#c0392b',
    },
    fonts: {
      heading: "'Playfair Display', Georgia, serif",
      body: "'Inter', system-ui, sans-serif",
    },
    radius: { sm: '3px', md: '6px', lg: '12px', full: '9999px' },
    buttonStyle: 'solid',
  },
  'premium-dark': {
    preset: 'premium-dark',
    colors: {
      primary: '#c9a36a',
      primaryDark: '#a8824e',
      primaryLight: '#e0c69a',
      secondary: '#0a0a0a',
      accent: '#d4af37',
      background: '#0a0a0a',
      surface: '#141414',
      surfaceAlt: '#1c1c1c',
      text: '#e8e0d4',
      textMuted: '#8a8070',
      heading: '#f5f0e6',
      border: '#2a2a2a',
      success: '#4a7c59',
      warning: '#c9a36a',
      error: '#c0392b',
    },
    fonts: {
      heading: "'Cormorant Garamond', Georgia, serif",
      body: "'Jost', system-ui, sans-serif",
    },
    radius: { sm: '2px', md: '4px', lg: '8px', full: '9999px' },
    buttonStyle: 'solid',
  },
  casual: {
    preset: 'casual',
    colors: {
      primary: '#f97316',
      primaryDark: '#ea580c',
      primaryLight: '#fdba74',
      secondary: '#1f2937',
      accent: '#22c55e',
      background: '#ffffff',
      surface: '#fff7ed',
      surfaceAlt: '#ffedd5',
      text: '#292524',
      textMuted: '#78716c',
      heading: '#1c1917',
      border: '#fde6d3',
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#dc2626',
    },
    fonts: {
      heading: "'Poppins', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
    },
    radius: { sm: '8px', md: '16px', lg: '24px', full: '9999px' },
    buttonStyle: 'solid',
  },
};

// ============================================================
// Apply theme to the document root via CSS custom properties.
// This is the single source of truth for colors/fonts in the UI.
// ============================================================

export function applyTheme(theme: ThemeConfig): void {
  const root = document.documentElement;
  const { colors, fonts, radius } = theme;

  const vars: Record<string, string> = {
    '--color-primary': colors.primary,
    '--color-primary-dark': colors.primaryDark,
    '--color-primary-light': colors.primaryLight,
    '--color-secondary': colors.secondary,
    '--color-accent': colors.accent,
    '--color-background': colors.background,
    '--color-surface': colors.surface,
    '--color-surface-alt': colors.surfaceAlt,
    '--color-text': colors.text,
    '--color-text-muted': colors.textMuted,
    '--color-heading': colors.heading,
    '--color-border': colors.border,
    '--color-success': colors.success,
    '--color-warning': colors.warning,
    '--color-error': colors.error,
    '--font-heading': fonts.heading,
    '--font-body': fonts.body,
    '--radius-sm': radius.sm,
    '--radius-md': radius.md,
    '--radius-lg': radius.lg,
    '--radius-full': radius.full,
  };

  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
