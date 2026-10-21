import { lightColors } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  back: { alignSelf: "flex-start", paddingVertical: 4, marginBottom: 10 },
  backText: { color: lightColors.primary, fontWeight: "800", fontSize: 15 },
  pad: { paddingVertical: 40 },
  plan: { marginTop: 14 },
  planCurrent: { borderColor: lightColors.primary, borderWidth: 2 },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "800",
    color: lightColors.text,
    flexShrink: 1,
  },
  badge: {
    backgroundColor: lightColors.primary,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: lightColors.onPrimary,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  desc: {
    fontSize: 13,
    lineHeight: 20,
    color: lightColors.textMuted,
    marginTop: 8,
  },
  priceRow: { flexDirection: "row", alignItems: "baseline", marginTop: 14 },
  price: { fontSize: 26, fontWeight: "800", color: lightColors.text },
  per: { fontSize: 13, color: lightColors.textMuted },
  action: {
    color: lightColors.primary,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 14,
  },
  foot: {
    textAlign: "center",
    fontSize: 12,
    color: lightColors.textMuted,
    marginTop: 18,
  },
});
