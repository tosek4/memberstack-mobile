import { lightColors as c } from "@/theme";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  hero: {
    backgroundColor: "#102A3A",
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
    color: "#B7CBD4",
  },
  pill: {
    backgroundColor: "#DDF7E8",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pillText: { fontSize: 10, fontWeight: "900", color: "#16834A" },
  name: { fontSize: 30, fontWeight: "800", color: "white", marginTop: 22 },
  desc: { fontSize: 12, color: "#B7CBD4", marginTop: 6 },
  priceRow: { flexDirection: "row", alignItems: "baseline", marginTop: 24 },
  price: { fontSize: 31, fontWeight: "900", color: "#6EE7B7" },
  per: { fontSize: 12, color: "#B7CBD4" },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  key: { fontSize: 12, color: c.textMuted },
  val: {
    fontSize: 12,
    fontWeight: "800",
    color: c.text,
    textAlign: "right",
    flexShrink: 1,
  },
  note: {
    backgroundColor: "#E1F7FB",
    padding: 17,
    borderRadius: 16,
    marginTop: 3,
  },
  noteTitle: { fontSize: 13, fontWeight: "800", color: c.text },
  noteText: { fontSize: 12, lineHeight: 18, color: c.textMuted, marginTop: 5 },
  foot: { fontSize: 10, color: "#8A98A7", textAlign: "center", marginTop: 18 },
});
