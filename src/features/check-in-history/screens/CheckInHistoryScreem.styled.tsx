import { useColors } from "@/hooks/useColors";
import { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },

    listContent: {
      paddingHorizontal: 20,
      paddingBottom: 32,
    },

    emptyListContent: {
      flexGrow: 1,
    },

    header: {
      paddingTop: 12,
      paddingBottom: 24,
    },

    backButton: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      marginBottom: 24,
      paddingVertical: 6,
      paddingRight: 12,
    },

    backButtonText: {
      color: colors.text,
      fontSize: 32,
      lineHeight: 32,
      marginRight: 8,
    },

    backLabel: {
      color: colors.text,
      fontSize: 15,
      fontWeight: "600",
    },

    title: {
      color: colors.text,
      fontSize: 28,
      fontWeight: "700",
      letterSpacing: -0.5,
    },

    subtitle: {
      color: colors.textMuted,
      fontSize: 15,
      lineHeight: 22,
      marginTop: 8,
    },

    summaryCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 16,
      padding: 18,
      marginTop: 24,
    },

    summaryIcon: {
      width: 44,
      height: 44,
      borderRadius: 14,
      backgroundColor: colors.primarySoft,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 14,
    },

    summaryIconText: {
      color: colors.primary,
      fontSize: 22,
      fontWeight: "700",
    },

    summaryContent: {
      flex: 1,
    },

    summaryLabel: {
      color: colors.textMuted,
      fontSize: 13,
      marginBottom: 4,
    },

    summaryValue: {
      color: colors.text,
      fontSize: 24,
      fontWeight: "700",
    },

    sectionTitle: {
      color: colors.text,
      fontSize: 18,
      fontWeight: "700",
      marginTop: 30,
      marginBottom: 14,
    },

    visitCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
    },

    visitIcon: {
      width: 42,
      height: 42,
      borderRadius: 13,
      backgroundColor: colors.primarySoft,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 12,
    },

    visitIconText: {
      color: colors.primary,
      fontSize: 19,
      fontWeight: "700",
    },

    visitContent: {
      flex: 1,
      marginRight: 8,
    },

    visitTitle: {
      color: colors.text,
      fontSize: 15,
      fontWeight: "600",
    },

    visitDate: {
      color: colors.textMuted,
      fontSize: 12,
      marginTop: 5,
    },

    visitTimeContainer: {
      alignItems: "flex-end",
      marginLeft: 10,
    },

    visitTime: {
      color: colors.text,
      fontSize: 14,
      fontWeight: "600",
    },

    visitStatus: {
      color: colors.primary,
      fontSize: 11,
      marginTop: 5,
    },

    stateContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 28,
      paddingVertical: 48,
    },

    stateIcon: {
      color: colors.primary,
      fontSize: 36,
      fontWeight: "600",
      marginBottom: 12,
    },

    stateTitle: {
      color: colors.text,
      fontSize: 17,
      fontWeight: "700",
      textAlign: "center",
      marginTop: 8,
    },

    stateDescription: {
      color: colors.textMuted,
      fontSize: 14,
      lineHeight: 21,
      textAlign: "center",
      marginTop: 8,
    },

    primaryButton: {
      backgroundColor: colors.primary,
      borderRadius: 12,
      paddingHorizontal: 22,
      paddingVertical: 12,
      marginTop: 20,
    },

    primaryButtonText: {
      color: colors.onPrimary,
      fontSize: 14,
      fontWeight: "600",
    },

    footerLoader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 20,
      gap: 10,
    },

    footerText: {
      color: colors.textMuted,
      fontSize: 13,
    },

    pressed: {
      opacity: 0.7,
    },
  });

export function useCheckInHistoryStyles() {
  const colors = useColors();

  return createStyles(colors);
}
