import { useColors } from "@/hooks/useColors";
import { Colors } from "@/theme";
import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const createScreenStyles = (colors: Colors) =>
  StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flexGrow: 1,
      paddingHorizontal: 22,
      paddingTop: 20,
      paddingBottom: 24,
    },

    eyebrow: {
      fontSize: 10,
      fontWeight: "800",
      letterSpacing: 1.5,
      color: colors.textMuted,
    },
    title: {
      fontSize: 28,
      fontWeight: "800",
      letterSpacing: -0.7,
      color: colors.text,
      marginTop: 5,
    },
    subtitle: {
      fontSize: 13,
      lineHeight: 20,
      color: colors.textMuted,
      marginTop: 7,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "800",
      color: colors.text,
      marginBottom: 12,
      marginTop: 24,
    },

    card: {
      backgroundColor: colors.surface,
      borderRadius: 18,
      padding: 18,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 14,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: 13,
    },

    center: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    message: {
      textAlign: "center",
      marginBottom: 20,
    },
    button: {
      backgroundColor: colors.primary,
      borderRadius: 14,
      paddingHorizontal: 24,
      paddingVertical: 14,
    },
    buttonText: {
      color: colors.onPrimary,
      fontWeight: "800",
    },
    link: {
      marginTop: 18,
      padding: 8,
    },
    linkText: {
      color: colors.danger,
      fontWeight: "700",
    },
  });

export function useScreenStyles() {
  const colors = useColors();

  return useMemo(() => createScreenStyles(colors), [colors]);
}
