import { useColors } from "@/hooks/useColors";
import type { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    listContent: {
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 32,
      flexGrow: 1,
    },
    emptyListContent: {
      flexGrow: 1,
    },
    stateContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 24,
      paddingVertical: 48,
    },
    stateIcon: {
      color: colors.success,
      fontSize: 32,
      fontWeight: "700",
      marginBottom: 14,
    },
    stateTitle: {
      color: colors.text,
      fontSize: 16,
      fontWeight: "700",
      textAlign: "center",
    },
    stateDescription: {
      color: colors.textMuted,
      fontSize: 13,
      lineHeight: 20,
      textAlign: "center",
      marginTop: 8,
    },
    retryButton: {
      color: colors.primary,
      fontSize: 14,
      fontWeight: "700",
      marginTop: 18,
      padding: 10,
    },
    footerLoader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      paddingVertical: 20,
    },
    footerText: {
      color: colors.textMuted,
      fontSize: 12,
    },
  });

export function usePaymentHistoryListStyles() {
  const colors = useColors();

  return createStyles(colors);
}
