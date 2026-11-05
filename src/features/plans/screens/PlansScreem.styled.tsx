
import { useColors } from "@/hooks/useColors";
import type { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    back: {
      alignSelf: "flex-start",
      paddingVertical: 4,
      marginBottom: 10,
    },
    backText: {
      color: colors.primary,
      fontWeight: "800",
      fontSize: 15,
    },
    pad: {
      paddingVertical: 40,
    },
    loading: {
      marginTop: 8,
    },
    errorCard: {
      marginTop: 20,
    },
    plan: {
      marginTop: 14,
    },
    planCurrent: {
      borderColor: colors.primary,
      borderWidth: 2,
    },
    top: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.text,
      flexShrink: 1,
    },
    badge: {
      backgroundColor: colors.primary,
      borderRadius: 999,
      paddingHorizontal: 10,
      paddingVertical: 4,
    },
    badgeText: {
      color: colors.onPrimary,
      fontSize: 10,
      fontWeight: "800",
      letterSpacing: 1,
    },
    desc: {
      fontSize: 13,
      lineHeight: 20,
      color: colors.textMuted,
      marginTop: 8,
    },
    priceRow: {
      flexDirection: "row",
      alignItems: "baseline",
      marginTop: 14,
    },
    price: {
      fontSize: 26,
      fontWeight: "800",
      color: colors.text,
    },
    per: {
      fontSize: 13,
      color: colors.textMuted,
    },
    action: {
      color: colors.primary,
      fontWeight: "800",
      textAlign: "center",
      marginTop: 14,
    },
    foot: {
      textAlign: "center",
      fontSize: 12,
      color: colors.textMuted,
      marginTop: 18,
    },
  });

export function usePlansScreenStyles() {
  const colors = useColors();

  return createStyles(colors);
}
