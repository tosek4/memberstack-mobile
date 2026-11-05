import { useColors } from "@/hooks/useColors";
import type { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    hero: {
      backgroundColor: colors.heroBackground,
      borderRadius: 22,
      padding: 22,
      marginTop: 22,
      marginBottom: 4,
    },

    heroTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    eyebrow: {
      fontSize: 10,
      fontWeight: "800",
      letterSpacing: 1.3,
      color: colors.heroTextMuted,
    },

    pill: {
      backgroundColor: colors.successBackground,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 20,
    },

    pillText: {
      fontSize: 10,
      fontWeight: "900",
      color: colors.success,
    },

    name: {
      fontSize: 30,
      fontWeight: "800",
      color: colors.heroText,
      marginTop: 22,
    },

    desc: {
      fontSize: 12,
      color: colors.heroTextMuted,
      marginTop: 6,
    },

    priceRow: {
      flexDirection: "row",
      alignItems: "baseline",
      marginTop: 24,
    },

    price: {
      fontSize: 31,
      fontWeight: "900",
      color: colors.daysNumber,
    },

    per: {
      fontSize: 12,
      color: colors.heroTextMuted,
    },

    detail: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },

    key: {
      fontSize: 12,
      color: colors.textMuted,
    },

    val: {
      fontSize: 12,
      fontWeight: "800",
      color: colors.text,
      textAlign: "right",
      flexShrink: 1,
    },

    note: {
      backgroundColor: colors.primarySoft,
      padding: 17,
      borderRadius: 16,
      marginTop: 3,
    },

    noteTitle: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.text,
    },

    actionText: {
      color: colors.primary,
      fontWeight: "800",
      marginTop: 12,
    },
  });

export function useMyPlanScreenStyles() {
  const colors = useColors();

  return createStyles(colors);
}
