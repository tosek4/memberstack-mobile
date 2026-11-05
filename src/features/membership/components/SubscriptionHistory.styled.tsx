import { useColors } from "@/hooks/useColors";
import { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    pad: {
      paddingVertical: 24,
    },

    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },

    planContent: {
      flex: 1,
    },

    plan: {
      fontSize: 15,
      fontWeight: "800",
      color: colors.text,
    },

    dates: {
      fontSize: 12,
      color: colors.textMuted,
      marginTop: 3,
    },

    right: {
      alignItems: "flex-end",
    },

    price: {
      fontSize: 15,
      fontWeight: "800",
      color: colors.text,
    },

    status: {
      fontSize: 10,
      fontWeight: "800",
      letterSpacing: 1,
      color: colors.textMuted,
      marginTop: 3,
    },

    statusActive: {
      color: colors.success,
    },

    action: {
      color: colors.primary,
      fontWeight: "800",
      textAlign: "center",
      marginTop: 14,
    },
  });

export function useSubscriptionHistoryStyles() {
  const colors = useColors();

  return createStyles(colors);
}
