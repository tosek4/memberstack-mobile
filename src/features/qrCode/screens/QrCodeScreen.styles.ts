import { useColors } from "@/hooks/useColors";
import type { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.surface,
      borderRadius: 24,
      padding: 22,
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: colors.shadow,
      shadowOpacity: 0.06,
      shadowRadius: 15,
      shadowOffset: { width: 0, height: 5 },
      elevation: 2,
    },
    status: {
      flexDirection: "row",
      alignItems: "center",
      gap: 7,
      backgroundColor: colors.successBackground,
      paddingHorizontal: 12,
      paddingVertical: 7,
      borderRadius: 20,
    },
    dot: {
      width: 7,
      height: 7,
      borderRadius: 4,
      backgroundColor: colors.success,
    },
    statusText: {
      fontSize: 9,
      letterSpacing: 1,
      fontWeight: "900",
      color: colors.success,
    },
    qr: {
      width: 204,
      height: 204,
      marginTop: 24,
      marginBottom: 20,
      padding: 7,
      backgroundColor: "#FFFFFF",
    },
    memberName: {
      fontSize: 20,
      fontWeight: "800",
      color: colors.text,
    },
    memberId: {
      fontSize: 10,
      fontWeight: "700",
      letterSpacing: 1.2,
      color: colors.textMuted,
      marginTop: 6,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      width: "100%",
      marginVertical: 20,
    },
    bottom: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    bottomRight: {
      alignItems: "flex-end",
    },
    label: {
      fontSize: 9,
      fontWeight: "800",
      letterSpacing: 1,
      color: colors.textMuted,
    },
    value: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.text,
      marginTop: 6,
    },
    info: {
      marginTop: 18,
      padding: 15,
      borderRadius: 15,
      backgroundColor: colors.primarySoft,
      flexDirection: "row",
      gap: 10,
    },
    infoIcon: {
      fontSize: 19,
      color: colors.primary,
    },
    infoContent: {
      flex: 1,
    },
    infoTitle: {
      fontSize: 12,
      fontWeight: "800",
      color: colors.text,
    },
    infoText: {
      fontSize: 11,
      lineHeight: 17,
      color: colors.textMuted,
      marginTop: 4,
    },
    qrBox: {
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 224,
      minHeight: 224,
      padding: 12,
      marginVertical: 18,
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
    },
    qrError: {
      textAlign: "center",
      color: colors.textMuted,
      marginBottom: 10,
    },
    retry: {
      color: colors.primary,
      fontWeight: "800",
    },
  });

export function useQrCodeScreenStyles() {
  const colors = useColors();

  return createStyles(colors);
}
