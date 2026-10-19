import { lightColors } from "@/theme";
import { StyleSheet } from "react-native";

export const screenStyles = StyleSheet.create({
  eyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: lightColors.textMuted,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.7,
    color: lightColors.text,
    marginTop: 5,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 20,
    color: lightColors.textMuted,
    marginTop: 7,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: lightColors.text,
    marginBottom: 12,
    marginTop: 24,
  },
  card: {
    backgroundColor: lightColors.surface,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: lightColors.border,
    marginBottom: 14,
  },
  divider: {
    height: 1,
    backgroundColor: lightColors.border,
    marginVertical: 13,
  },
});

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: lightColors.background },
  content: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 24,
  },
});

export const ScreenStateStyles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  message: { textAlign: "center", marginBottom: 20 },
  button: {
    backgroundColor: lightColors.primary,
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  buttonText: { color: lightColors.onPrimary, fontWeight: "800" },
  link: { marginTop: 18, padding: 8 },
  linkText: { color: lightColors.danger, fontWeight: "700" },
});
