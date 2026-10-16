/**
 * Design tokens. Screens and components take colors, spacing and font sizes
 * from here so the look can be changed in one place (and dark mode is easy).
 */

export const palette = {
  primary: '#0891B2', // teal, same as the MemberStack web app
  primaryDark: '#0E7490',
  success: '#16A34A',
  warning: '#D97706',
  danger: '#DC2626',
} as const

export const lightColors = {
  background: '#F4F8FB',
  surface: '#FFFFFF',
  border: '#E2E8F0',
  text: '#10202E',
  textMuted: '#5B6B7B',
  primary: palette.primary,
  onPrimary: '#FFFFFF',
  success: palette.success,
  warning: palette.warning,
  danger: palette.danger,
} as const

export const darkColors = {
  background: '#0B1620',
  surface: '#132433',
  border: '#1F3447',
  text: '#F1F5F9',
  textMuted: '#94A3B8',
  primary: '#22B8D8',
  onPrimary: '#06222B',
  success: '#4ADE80',
  warning: '#FBBF24',
  danger: '#F87171',
} as const

export type Colors = typeof lightColors | typeof darkColors

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const

export const radius = {
  sm: 8,
  md: 12,
  lg: 20,
  full: 999,
} as const

export const fontSize = {
  caption: 12,
  body: 16,
  title: 22,
  heading: 28,
} as const
