import { useColors } from "@/hooks/useColors";
import type { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      marginBottom: 20,
    },
    backButton: {
      alignSelf: "flex-start",
      paddingVertical: 8,
      paddingRight: 12,
      marginBottom: 12,
    },
    backButtonText: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: "600",
    },
    backLabel: {
      color: colors.textMuted,
      fontSize: 14,
      fontWeight: "600",
    },
    title: {
      color: colors.text,
      fontSize: 28,
      fontWeight: "700",
    },
    subtitle: {
      color: colors.textMuted,
      fontSize: 14,
      marginTop: 6,
    },
    summaryCard: {
      flexDirection: "row",
      alignItems: "center",
      gap: 14,
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 18,
      marginTop: 24,
      borderWidth: 1,
      borderColor: colors.border,
    },
    summaryIcon: {
      width: 44,
      height: 44,
      borderRadius: 13,
      backgroundColor: colors.successBackground,
      alignItems: "center",
      justifyContent: "center",
    },
    summaryIconText: {
      color: colors.success,
      fontSize: 22,
      fontWeight: "700",
    },
    summaryContent: {
      flex: 1,
      gap: 4,
    },
    summaryLabel: {
      color: colors.textMuted,
      fontSize: 12,
    },
    summaryValue: {
      color: colors.text,
      fontSize: 22,
      fontWeight: "700",
    },
    sectionTitle: {
      color: colors.text,
      fontSize: 16,
      fontWeight: "700",
      marginTop: 28,
      marginBottom: 14,
    },
    pressed: {
      opacity: 0.7,
    },
  });

export function usePaymentHistoryScreenStyles() {
  const colors = useColors();

  return createStyles(colors);
}
