import { darkColors, lightColors, ThemeMode } from "@/theme";
import * as SecureStore from "expo-secure-store";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Appearance, useColorScheme } from "react-native";
import { ThemeContextValue } from "./types";
import { THEME_PREFERENCE_KEY } from "./utils";

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemColorScheme = useColorScheme();

  const [mode, setModeState] = useState<ThemeMode>("system");

  useEffect(() => {
    let mounted = true;

    const loadThemePreference = async () => {
      try {
        const savedMode = await SecureStore.getItemAsync(THEME_PREFERENCE_KEY);

        if (
          savedMode === "system" ||
          savedMode === "light" ||
          savedMode === "dark"
        ) {
          if (mounted) {
            setModeState(savedMode);
          }

          Appearance.setColorScheme(savedMode === "system" ? "unspecified" : savedMode);
        } else {
          Appearance.setColorScheme("unspecified");
        }
      } catch {
        Appearance.setColorScheme("unspecified");
      }
    };

    void loadThemePreference();

    return () => {
      mounted = false;
    };
  }, []);

  const setMode = useCallback(async (nextMode: ThemeMode) => {
    setModeState(nextMode);

    Appearance.setColorScheme(nextMode === "system" ? "unspecified" : nextMode);

    try {
      await SecureStore.setItemAsync(THEME_PREFERENCE_KEY, nextMode);
    } catch {
      // The selected theme remains active for this session.
    }
  }, []);

  const activeColorScheme = mode === "system" ? systemColorScheme : mode;

  const colors = activeColorScheme === "dark" ? darkColors : lightColors;

  const value = useMemo(
    () => ({
      mode,
      colors,
      isDark: activeColorScheme === "dark",
      setMode,
    }),
    [mode, colors, activeColorScheme, setMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
