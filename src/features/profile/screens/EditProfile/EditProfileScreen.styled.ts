import { useColors } from "@/hooks/useColors";
import type { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    description: {
      fontSize: 13,
      color: colors.textMuted,
      lineHeight: 20,
      marginTop: 8,
      marginBottom: 22,
    },
    formCard: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 16,
      gap: 18,
      borderWidth: 1,
      borderColor: colors.border,
    },
    readOnlyHint: {
      fontSize: 11,
      color: colors.textMuted,
      marginTop: -10,
    },
    errorBanner: {
      backgroundColor: colors.dangerBackground,
      borderRadius: 10,
      padding: 12,
      marginTop: 16,
    },
    errorText: {
      color: colors.danger,
      fontSize: 12,
      lineHeight: 18,
    },
    actions: {
      gap: 10,
      marginTop: 22,
    },
    saveButton: {
      minHeight: 50,
      borderRadius: 13,
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
    },
    saveButtonDisabled: {
      opacity: 0.6,
    },
    saveButtonText: {
      color: colors.onPrimary,
      fontSize: 14,
      fontWeight: "800",
    },
    cancelButton: {
      minHeight: 48,
      alignItems: "center",
      justifyContent: "center",
    },
    cancelButtonText: {
      color: colors.textMuted,
      fontSize: 13,
      fontWeight: "700",
    },
    pressed: {
      opacity: 0.7,
    },
  });

export function useEditProfileScreenStyles() {
  const colors = useColors();

  return createStyles(colors);
}
