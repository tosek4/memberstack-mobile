import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },

  header: {
    marginBottom: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingRight: 12,
    marginBottom: 12,
  },

  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  backLabel: {
    color: "#555B63",
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    color: "#202124",
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    color: "#777D85",
    fontSize: 14,
    marginTop: 6,
  },
  summaryCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#E8EAED",
  },
  summaryIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: "#EAF3F0",
    alignItems: "center",
    justifyContent: "center",
  },
  summaryIconText: {
    color: "#166B50",
    fontSize: 22,
    fontWeight: "700",
  },
  summaryContent: {
    flex: 1,
    gap: 4,
  },
  summaryLabel: {
    color: "#777D85",
    fontSize: 12,
  },
  summaryValue: {
    color: "#202124",
    fontSize: 22,
    fontWeight: "700",
  },
  sectionTitle: {
    color: "#202124",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 28,
    marginBottom: 14,
  },

  pressed: {
    opacity: 0.7,
  },
});
