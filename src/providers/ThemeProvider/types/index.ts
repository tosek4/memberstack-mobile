import { Colors, ThemeMode } from "@/theme";

export interface ThemeContextValue {
  mode: ThemeMode;
  colors: Colors;
  isDark: boolean;
  setMode: (mode: ThemeMode) => Promise<void>;
}
