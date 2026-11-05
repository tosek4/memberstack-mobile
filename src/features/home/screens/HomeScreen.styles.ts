import { useColors } from "@/hooks/useColors";
import { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    top: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24,
    },

    avatar: {
      width: 44,
      height: 44,
      borderRadius: 16,
      backgroundColor: colors.avatarBackground,
      alignItems: "center",
      justifyContent: "center",
    },

    avatarText: {
      fontWeight: "800",
      fontSize: 14,
      color: colors.primary,
    },

    hero: {
      backgroundColor: colors.heroBackground,
      borderRadius: 22,
      padding: 21,
      marginBottom: 16,
      overflow: "hidden",
    },

    heroTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    heroEyebrow: {
      color: colors.heroTextMuted,
      fontSize: 10,
      fontWeight: "800",
      letterSpacing: 1.4,
    },

    activePill: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      backgroundColor: colors.successBackground,
      paddingHorizontal: 9,
      paddingVertical: 6,
      borderRadius: 20,
    },

    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.success,
    },

    activeText: {
      fontSize: 9,
      fontWeight: "900",
      color: colors.success,
    },

    planName: {
      fontSize: 29,
      fontWeight: "800",
      color: colors.heroText,
      marginTop: 20,
      letterSpacing: -0.5,
    },

    heroSub: {
      fontSize: 12,
      color: colors.heroTextMuted,
      marginTop: 4,
    },

    heroBottom: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      borderTopWidth: 1,
      borderTopColor: colors.borderStrong,
      marginTop: 22,
      paddingTop: 16,
    },

    heroLabel: {
      fontSize: 9,
      color: colors.heroTextMuted,
      fontWeight: "800",
      letterSpacing: 1.2,
    },

    heroValue: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.heroText,
      marginTop: 5,
    },

    days: {
      alignItems: "flex-end",
    },

    daysNumber: {
      fontSize: 26,
      fontWeight: "800",
      color: colors.daysNumber,
    },

    daysLabel: {
      fontSize: 8,
      fontWeight: "800",
      color: colors.heroTextMuted,
      letterSpacing: 1,
    },

    qrCard: {
      backgroundColor: colors.primarySoft,
      borderRadius: 18,
      padding: 15,
      flexDirection: "row",
      alignItems: "center",
      gap: 13,
      marginBottom: 3,
    },

    qrMini: {
      width: 48,
      height: 48,
      borderRadius: 14,
      backgroundColor: colors.surfaceElevated,
      alignItems: "center",
      justifyContent: "center",
    },

    qrSymbol: {
      fontSize: 29,
      color: colors.primary,
    },

    qrContent: {
      flex: 1,
    },

    qrTitle: {
      fontSize: 14,
      fontWeight: "800",
      color: colors.text,
    },

    qrSub: {
      fontSize: 11,
      color: colors.textMuted,
      marginTop: 4,
    },

    chevron: {
      fontSize: 28,
      color: colors.primary,
      paddingHorizontal: 4,
    },

    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },

    roundIcon: {
      width: 38,
      height: 38,
      borderRadius: 13,
      backgroundColor: colors.surfaceMuted,
      alignItems: "center",
      justifyContent: "center",
    },

    roundIconText: {
      color: colors.text,
    },

    rowContent: {
      flex: 1,
    },

    rowTitle: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.text,
    },

    rowSub: {
      fontSize: 11,
      color: colors.textMuted,
      marginTop: 4,
    },

    good: {
      fontSize: 11,
      fontWeight: "800",
    },

    price: {
      fontSize: 14,
      fontWeight: "800",
      color: colors.text,
    },

    disclaimer: {
      fontSize: 10,
      color: colors.textMuted,
      textAlign: "center",
      lineHeight: 16,
      marginTop: 12,
      marginBottom: 8,
    },
  });

export function useHomeScreenStyles() {
  const colors = useColors();

  return createStyles(colors);
}
