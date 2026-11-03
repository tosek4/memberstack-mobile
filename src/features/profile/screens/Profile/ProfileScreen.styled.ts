import { lightColors as c, palette } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileHeader: {
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 10,
    marginBottom: 12,
  },

  avatar: {
    width: 88,
    height: 88,
    borderRadius: 30,
    backgroundColor: "#DDF5FA",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  initials: {
    fontSize: 27,
    fontWeight: "900",
    color: palette.primary,
  },

  name: {
    fontSize: 22,
    fontWeight: "800",
    color: c.text,
    textAlign: "center",
  },

  email: {
    fontSize: 13,
    color: c.textMuted,
    marginTop: 5,
  },

  memberId: {
    backgroundColor: "#F0F4F8",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 13,
  },

  memberIdText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    color: c.textMuted,
  },

  membershipCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  membershipInfo: {
    flex: 1,
  },

  membershipLabel: {
    fontSize: 14,
    fontWeight: "800",
    color: c.text,
  },

  membershipDescription: {
    fontSize: 11,
    color: c.textMuted,
    marginTop: 5,
  },

  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#E8F7EE",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#16A34A",
  },

  statusText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#15803D",
  },

  infoRow: {
    gap: 6,
  },

  key: {
    fontSize: 11,
    color: c.textMuted,
  },

  value: {
    fontSize: 13,
    fontWeight: "700",
    color: c.text,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actionContent: {
    flex: 1,
    gap: 5,
  },

  actionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: c.text,
  },

  actionDescription: {
    fontSize: 11,
    color: c.textMuted,
  },

  signout: {
    fontSize: 13,
    fontWeight: "800",
    color: "#DC2626",
  },

  arrow: {
    fontSize: 24,
    color: c.textMuted,
  },

  foot: {
    fontSize: 10,
    color: "#8A98A7",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
  },

  editButton: {
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: palette.primary,
    marginBottom: 20,
  },
  editButtonText: {
    color: palette.primary,
    fontSize: 12,
    fontWeight: "800",
  },
});
