import { lightColors } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pad: { paddingVertical: 24 },
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
  plan: { fontSize: 15, fontWeight: "800", color: lightColors.text },
  dates: { fontSize: 12, color: lightColors.textMuted, marginTop: 3 },
  right: { alignItems: "flex-end" },
  price: { fontSize: 15, fontWeight: "800", color: lightColors.text },
  status: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    color: lightColors.textMuted,
    marginTop: 3,
  },
  statusActive: { color: lightColors.success },
  action: {
    color: lightColors.primary,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 14,
  },
});
