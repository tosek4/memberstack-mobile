export const palette = {
  primary: "#0891B2",
  primaryDark: "#0E7490",
  success: "#16A34A",
  warning: "#D97706",
  danger: "#DC2626",
  good: "#159653",
} as const;

export const lightColors = {
  // General
  background: "#F4F8FB",
  surface: "#FFFFFF",
  surfaceElevated: "#FFFFFF",
  surfaceMuted: "#F0F4F8",

  // Borders
  border: "#E2E8F0",
  borderStrong: "#CBD5E1",

  // Text
  text: "#10202E",
  textMuted: "#5B6B7B",
  textDisabled: "#94A3B8",

  // Brand
  primary: palette.primary,
  primaryDark: palette.primaryDark,
  primarySoft: "#DDF5FA",
  onPrimary: "#FFFFFF",

  // Feedback
  success: palette.success,
  successBackground: "#E8F7EE",
  warning: palette.warning,
  warningBackground: "#FFF7E6",
  danger: palette.danger,
  dangerBackground: "#FEECEC",
  info: "#0284C7",
  infoBackground: "#E0F2FE",

  // Inputs
  inputBackground: "#FFFFFF",
  inputBorder: "#CBD5E1",
  placeholder: "#94A3B8",

  // Navigation
  tabBarBackground: "#FFFFFF",
  tabBarInactive: "#94A3B8",

  // Special surfaces
  heroBackground: "#10202E",
  heroText: "#FFFFFF",
  heroTextMuted: "#CBD5E1",
  avatarBackground: "#DDF5FA",
  memberIdBackground: "#F0F4F8",

  // Existing token
  daysNumber: "#6EE7B7",

  // Shadow
  shadow: "#10202E",
} as const;

export const darkColors = {
  // General
  background: "#0B1620",
  surface: "#132433",
  surfaceElevated: "#1A3042",
  surfaceMuted: "#1B3040",

  // Borders
  border: "#1F3447",
  borderStrong: "#345168",

  // Text
  text: "#F1F5F9",
  textMuted: "#94A3B8",
  textDisabled: "#64748B",

  // Brand
  primary: "#22B8D8",
  primaryDark: "#0891B2",
  primarySoft: "#123C4A",
  onPrimary: "#06222B",

  // Feedback
  success: "#4ADE80",
  successBackground: "#153A2B",
  warning: "#FBBF24",
  warningBackground: "#44351A",
  danger: "#F87171",
  dangerBackground: "#451F27",
  info: "#38BDF8",
  infoBackground: "#12364A",

  // Inputs
  inputBackground: "#132433",
  inputBorder: "#345168",
  placeholder: "#64748B",

  // Navigation
  tabBarBackground: "#132433",
  tabBarInactive: "#64748B",

  // Special surfaces
  heroBackground: "#07121B",
  heroText: "#F1F5F9",
  heroTextMuted: "#94A3B8",
  avatarBackground: "#123C4A",
  memberIdBackground: "#1B3040",

  // Existing token
  daysNumber: "#6EE7B7",

  // Shadow
  shadow: "#000000",
} as const;

export type Colors = {
  [Key in keyof typeof lightColors]: string;
};

export type ThemeMode = "system" | "light" | "dark";

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 20,
  full: 999,
} as const;

export const fontSize = {
  caption: 12,
  body: 16,
  title: 22,
  heading: 28,
} as const;
