import { Screen } from "@/components/ui/Screen";
import { screenStyles as ui } from "@/components/ui/Screen.styles";
import { mockMe } from "@/mock/data";
import { router } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "./ProfileScreen.styles";

export function ProfileScreen() {
  const member = mockMe.member;
  const rows: [string, string][] = [
    ["Email address", member.email],
    ["Phone number", member.phone ?? "Not provided"],
    [
      "Date of birth",
      member.birthDate
        ? new Date(member.birthDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "Not provided",
    ],
    [
      "Member status",
      member.status.charAt(0).toUpperCase() + member.status.slice(1),
    ],
  ];
  return (
    <Screen>
      <Text style={ui.eyebrow}>ACCOUNT</Text>
      <Text style={ui.title}>My profile</Text>
      <View style={styles.person}>
        <View style={styles.avatar}>
          <Text style={styles.initials}>
            {member.firstName[0]}
            {member.lastName[0]}
          </Text>
        </View>
        <Text style={styles.name}>
          {member.firstName} {member.lastName}
        </Text>
        <Text style={styles.id}>
          MEMBER ID · MS-{String(member.id).padStart(6, "0")}
        </Text>
      </View>
      <Text style={ui.sectionTitle}>Personal information</Text>
      <View style={ui.card}>
        {rows.map(([key, value], index) => (
          <View key={key}>
            <View style={styles.row}>
              <Text style={styles.key}>{key}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
            {index < rows.length - 1 && <View style={ui.divider} />}
          </View>
        ))}
      </View>
      <Text style={ui.sectionTitle}>App</Text>
      <Pressable
        style={ui.card}
        onPress={() =>
          Alert.alert(
            "Help & support",
            "Please ask the gym reception team for assistance.",
          )
        }
      >
        <View style={styles.linkRow}>
          <Text style={styles.link}>Help & support</Text>
          <Text style={styles.arrow}>›</Text>
        </View>
      </Pressable>
      <Pressable
        style={ui.card}
        onPress={() =>
          Alert.alert("Sign out", "Return to the login screen?", [
            { text: "Cancel", style: "cancel" },
            {
              text: "Sign out",
              style: "destructive",
              onPress: () => router.replace("/(auth)/login"),
            },
          ])
        }
      >
        <View style={styles.linkRow}>
          <Text style={styles.signout}>Sign out</Text>
          <Text style={styles.arrow}>›</Text>
        </View>
      </Pressable>
      <Text style={styles.foot}>MemberStack Mobile · Demo preview</Text>
    </Screen>
  );
}
