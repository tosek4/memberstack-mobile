import { lightColors as c, palette } from "@/theme";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  person: {
    alignItems: "center",
    paddingVertical: 8,
    marginTop: 18,
    marginBottom: 5,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 26,
    backgroundColor: "#DDF5FA",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },
  initials: { fontSize: 23, fontWeight: "900", color: palette.primary },
  name: { fontSize: 20, fontWeight: "800", color: c.text },
  id: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    color: c.textMuted,
    marginTop: 6,
  },
  row: { gap: 8 },
  key: { fontSize: 11, color: c.textMuted },
  value: { fontSize: 13, fontWeight: "700", color: c.text, marginTop: 5 },
  linkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: { fontSize: 13, fontWeight: "700", color: c.text },
  signout: { fontSize: 13, fontWeight: "800", color: "#DC2626" },
  arrow: { fontSize: 24, color: c.textMuted },
  foot: { fontSize: 10, color: "#8A98A7", textAlign: "center", marginTop: 15 },
});
