import { useColors } from "@/hooks/useColors";
import type { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      gap: 7,
    },
    label: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.text,
    },
    input: {
      minHeight: 48,
      borderWidth: 1,
      borderColor: colors.inputBorder,
      borderRadius: 12,
      paddingHorizontal: 13,
      fontSize: 14,
      color: colors.text,
      backgroundColor: colors.inputBackground,
    },
    disabledInput: {
      backgroundColor: colors.surfaceMuted,
      color: colors.textMuted,
    },
    errorInput: {
      borderColor: colors.danger,
    },
    error: {
      fontSize: 11,
      color: colors.danger,
    },
  });

export function useProfileFormInputStyles() {
  const colors = useColors();

  return createStyles(colors);
}
