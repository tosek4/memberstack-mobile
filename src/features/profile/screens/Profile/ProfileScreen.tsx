import { Screen } from "@/components/ui/Screen";
import { screenStyles as ui } from "@/components/ui/Screen.styles";
import { ScreenState } from "@/components/ui/ScreenState";
import { useAuth } from "@/hooks/useAuth";
import { useMe } from "@/hooks/useMe";
import { formatDate, formatStatus } from "@/utils";
import { router } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "./ProfileScreen.styled";

export function ProfileScreen() {
  const { data, loading, error, reload } = useMe();
  const { signOut } = useAuth();

  if (!data) {
    return <ScreenState loading={loading} error={error} onRetry={reload} />;
  }

  const member = data.member;

  const initials = `${member.firstName?.[0] ?? ""}${member.lastName?.[0] ?? ""}`;

  const memberId = `MS-${String(member.id).padStart(6, "0")}`;

  const personalInformation = [
    {
      label: "First name",
      value: member.firstName,
    },
    {
      label: "Last name",
      value: member.lastName,
    },
    {
      label: "Email address",
      value: member.email,
    },
    {
      label: "Phone number",
      value: member.phone ?? "Not provided",
    },
    {
      label: "Date of birth",
      value: formatDate(member.birthDate as string),
    },
  ];

  const handleSignOut = () => {
    Alert.alert("Sign out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign out",
        style: "destructive",
        onPress: async () => {
          await signOut();
          router.replace("/");
        },
      },
    ]);
  };

  return (
    <Screen onRefresh={reload} refreshing={loading}>
      <Text style={ui.eyebrow}>ACCOUNT</Text>
      <Text style={ui.title}>My profile</Text>

      {/* Profile header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.initials}>{initials}</Text>
        </View>

        <Text style={styles.name}>
          {member.firstName} {member.lastName}
        </Text>

        <Text style={styles.email}>{member.email}</Text>

        <View style={styles.memberId}>
          <Text style={styles.memberIdText}>MEMBER ID · {memberId}</Text>
        </View>
      </View>

      <Pressable
        style={styles.editButton}
        onPress={() => router.push("/edit-profile")}
        accessibilityRole="button"
      >
        <Text style={styles.editButtonText}>Edit profile</Text>
      </Pressable>

      {/* Membership */}
      <Text style={ui.sectionTitle}>Membership</Text>

      <View style={styles.membershipCard}>
        <View style={styles.membershipInfo}>
          <Text style={styles.membershipLabel}>Membership status</Text>
          <Text style={styles.membershipDescription}>
            Your current account status
          </Text>
        </View>

        <View style={styles.statusBadge}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>{formatStatus(member.status)}</Text>
        </View>
      </View>

      {/* Personal information */}
      <Text style={ui.sectionTitle}>Personal information</Text>

      <View style={ui.card}>
        {personalInformation.map((item, index) => (
          <View key={item.label}>
            <View style={styles.infoRow}>
              <Text style={styles.key}>{item.label}</Text>
              <Text style={styles.value}>{item.value || "Not provided"}</Text>
            </View>

            {index < personalInformation.length - 1 && (
              <View style={ui.divider} />
            )}
          </View>
        ))}
      </View>

      {/* App actions */}
      <Text style={ui.sectionTitle}>App</Text>

      <Pressable
        style={ui.card}
        onPress={() =>
          Alert.alert(
            "Help & support",
            "Please ask the gym reception team for assistance.",
          )
        }
        accessibilityRole="button"
      >
        <View style={styles.actionRow}>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Help & support</Text>
            <Text style={styles.actionDescription}>
              Get assistance with your account
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>
      </Pressable>

      <Pressable
        style={ui.card}
        onPress={handleSignOut}
        accessibilityRole="button"
      >
        <View style={styles.actionRow}>
          <View style={styles.actionContent}>
            <Text style={styles.signout}>Sign out</Text>
            <Text style={styles.actionDescription}>
              Sign out of your account
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>
      </Pressable>

      <Text style={styles.foot}>MemberStack Mobile</Text>
    </Screen>
  );
}
