import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 32,
    flexGrow: 1,
  },
  emptyListContent: {
    flexGrow: 1,
  },
  stateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  stateIcon: {
    color: "#166B50",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 14,
  },
  stateTitle: {
    color: "#202124",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  stateDescription: {
    color: "#777D85",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 8,
  },
  retryButton: {
    color: "#166B50",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 18,
    padding: 10,
  },
  footerLoader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 20,
  },
  footerText: {
    color: "#777D85",
    fontSize: 12,
  },
});
