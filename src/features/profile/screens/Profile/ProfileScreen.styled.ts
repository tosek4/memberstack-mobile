import { useColors } from "@/hooks/useColors";
import type { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    profileHeader: {
      alignItems: "center",
      paddingVertical: 20,
      marginTop: 10,
      marginBottom: 12,
    },
    avatar: {
      width: 88,
      height: 88,
      borderRadius: 30,
      backgroundColor: colors.avatarBackground,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 15,
    },
    initials: {
      fontSize: 27,
      fontWeight: "900",
      color: colors.primary,
    },
    name: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text,
      textAlign: "center",
    },
    email: {
      fontSize: 13,
      color: colors.textMuted,
      marginTop: 5,
    },
    memberId: {
      backgroundColor: colors.memberIdBackground,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 7,
      marginTop: 13,
    },
    memberIdText: {
      fontSize: 10,
      fontWeight: "800",
      letterSpacing: 1,
      color: colors.textMuted,
    },
    membershipCard: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 16,
      marginBottom: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      borderWidth: 1,
      borderColor: colors.border,
    },
    membershipInfo: {
      flex: 1,
    },
    membershipLabel: {
      fontSize: 14,
      fontWeight: "800",
      color: colors.text,
    },
    membershipDescription: {
      fontSize: 11,
      color: colors.textMuted,
      marginTop: 5,
    },
    statusBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      backgroundColor: colors.successBackground,
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderRadius: 20,
    },
    statusDot: {
      width: 7,
      height: 7,
      borderRadius: 4,
      backgroundColor: colors.success,
    },
    statusText: {
      fontSize: 11,
      fontWeight: "800",
      color: colors.success,
    },
    infoRow: {
      gap: 6,
    },
    key: {
      fontSize: 11,
      color: colors.textMuted,
    },
    value: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.text,
    },
    actionRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    actionContent: {
      flex: 1,
      gap: 5,
    },
    actionTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.text,
    },
    actionDescription: {
      fontSize: 11,
      color: colors.textMuted,
    },
    signout: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.danger,
    },
    arrow: {
      fontSize: 24,
      color: colors.textMuted,
    },
    foot: {
      fontSize: 10,
      color: colors.textDisabled,
      textAlign: "center",
      marginTop: 15,
      marginBottom: 10,
    },
    editButton: {
      alignSelf: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.primary,
      marginBottom: 20,
    },
    editButtonText: {
      color: colors.primary,
      fontSize: 12,
      fontWeight: "800",
    },

    // Appearance
    appearanceCard: {
      backgroundColor: colors.surface,
      borderRadius: 18,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 14,
    },
    appearanceTitle: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.text,
    },
    appearanceDescription: {
      fontSize: 12,
      color: colors.textMuted,
      marginTop: 5,
      marginBottom: 14,
    },
    themeOptions: {
      flexDirection: "row",
      gap: 8,
    },
    themeOption: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 4,
      borderRadius: 10,
      borderWidth: 1,
    },
    themeOptionText: {
      fontSize: 12,
      fontWeight: "700",
    },
    pressed: {
      opacity: 0.7,
    },
  });

export function useProfileScreenStyles() {
  const colors = useColors();

  return createStyles(colors);
}
