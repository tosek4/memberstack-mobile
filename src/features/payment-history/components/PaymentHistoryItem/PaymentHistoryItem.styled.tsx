import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E8EAED",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF3F0",
  },
  icon: {
    color: "#166B50",
    fontSize: 22,
    fontWeight: "700",
  },
  mainContent: {
    flex: 1,
    gap: 4,
  },
  planName: {
    color: "#202124",
    fontSize: 14,
    fontWeight: "700",
  },
  date: {
    color: "#777D85",
    fontSize: 12,
  },
  amount: {
    color: "#202124",
    fontSize: 15,
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: "#EEF0F2",
    marginVertical: 14,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  methodContainer: {
    gap: 4,
  },
  metaLabel: {
    color: "#8A9099",
    fontSize: 11,
  },
  metaValue: {
    color: "#34383D",
    fontSize: 13,
    fontWeight: "600",
  },
  reference: {
    color: "#8A9099",
    fontSize: 11,
    marginTop: 12,
  },
});
