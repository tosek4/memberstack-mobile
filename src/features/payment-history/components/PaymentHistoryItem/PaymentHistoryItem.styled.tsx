import { useColors } from "@/hooks/useColors";
import type { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: colors.border,
    },
    topRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    iconContainer: {
      width: 42,
      height: 42,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.successBackground,
    },
    icon: {
      color: colors.success,
      fontSize: 22,
      fontWeight: "700",
    },
    mainContent: {
      flex: 1,
      gap: 4,
    },
    planName: {
      color: colors.text,
      fontSize: 14,
      fontWeight: "700",
    },
    date: {
      color: colors.textMuted,
      fontSize: 12,
    },
    amount: {
      color: colors.text,
      fontSize: 15,
      fontWeight: "700",
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: 14,
    },
    bottomRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    methodContainer: {
      gap: 4,
    },
    metaLabel: {
      color: colors.textMuted,
      fontSize: 11,
    },
    metaValue: {
      color: colors.text,
      fontSize: 13,
      fontWeight: "600",
    },
    reference: {
      color: colors.textMuted,
      fontSize: 11,
      marginTop: 12,
    },
  });

export function usePaymentHistoryItemStyles() {
  const colors = useColors();

  return createStyles(colors);
}
