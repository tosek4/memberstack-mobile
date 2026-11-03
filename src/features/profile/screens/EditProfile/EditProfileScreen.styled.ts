import { lightColors as c, palette } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  description: {
    fontSize: 13,
    color: c.textMuted,
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 22,
  },
  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    gap: 18,
  },
  readOnlyHint: {
    fontSize: 11,
    color: c.textMuted,
    marginTop: -10,
  },
  errorBanner: {
    backgroundColor: "#FEF2F2",
    borderRadius: 10,
    padding: 12,
  },
  errorText: {
    color: "#B91C1C",
    fontSize: 12,
    lineHeight: 18,
  },
  actions: {
    gap: 10,
    marginTop: 22,
  },
  saveButton: {
    minHeight: 50,
    borderRadius: 13,
    backgroundColor: palette.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  cancelButton: {
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    color: c.textMuted,
    fontSize: 13,
    fontWeight: "700",
  },
});
