import { useColors } from "@/hooks/useColors";
import { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 24,
      marginBottom: 12,
    },

    headerTitle: {
      marginTop: 0,
      marginBottom: 0,
    },

    actionText: {
      color: colors.primary,
      fontWeight: "800",
    },

    loader: {
      paddingVertical: 12,
    },

    retryText: {
      color: colors.primary,
      fontWeight: "800",
      marginTop: 12,
    },

    visitRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },

    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 14,
      backgroundColor: colors.primarySoft,
      alignItems: "center",
      justifyContent: "center",
    },

    checkIcon: {
      fontSize: 20,
      color: colors.success,
      fontWeight: "700",
    },

    visitContent: {
      flex: 1,
    },

    visitTitle: {
      fontSize: 14,
      fontWeight: "800",
      color: colors.text,
    },
  });

export function useRecentCheckInsStyles() {
  const colors = useColors();

  return createStyles(colors);
}
