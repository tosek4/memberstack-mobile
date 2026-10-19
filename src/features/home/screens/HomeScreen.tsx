import { Screen } from "@/components/ui/Screen";
import { screenStyles as ui } from "@/components/ui/Screen.styles";
import { ScreenState } from "@/components/ui/ScreenState";
import { useMe } from "@/hooks/useMe";
import { daysLeft } from "@/utils";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "./HomeScreen.styles";

export function HomeScreen() {
  const { data, loading, error, reload } = useMe();
  if (!data)
    return <ScreenState loading={loading} error={error} onRetry={reload} />;

  const { member, subscription } = data;
  const status = subscription?.status ?? "inactive";
  const remaining = subscription
    ? Math.max(daysLeft(subscription.expiresAt), 0)
    : 0;
  const date = subscription
    ? new Date(subscription.expiresAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "—";

  return (
    <Screen>
      <View style={styles.top}>
        <View>
          <Text style={ui.eyebrow}>MEMBERSTACK</Text>
          <Text style={ui.title}>Hey, {member.firstName} 👋</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {member.firstName[0]}
            {member.lastName[0]}
          </Text>
        </View>
      </View>
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <Text style={styles.heroEyebrow}>YOUR MEMBERSHIP</Text>
          <View style={styles.activePill}>
            <View style={styles.dot} />
            <Text style={styles.activeText}>{status.toUpperCase()}</Text>
          </View>
        </View>
        <Text style={styles.planName}>
          {subscription?.plan.name ?? "No active plan"}
        </Text>
        <Text style={styles.heroSub}>
          {subscription?.plan.description ??
            "Visit the front desk to get started"}
        </Text>
        <View style={styles.heroBottom}>
          <View>
            <Text style={styles.heroLabel}>VALID UNTIL</Text>
            <Text style={styles.heroValue}>{date}</Text>
          </View>
          <View style={styles.days}>
            <Text style={styles.daysNumber}>{remaining}</Text>
            <Text style={styles.daysLabel}>DAYS LEFT</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.qrCard}
        onPress={() => router.push("/(tabs)/qr-code")}
      >
        <View style={styles.qrMini}>
          <Text style={styles.qrSymbol}>▦</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.qrTitle}>Your gym pass</Text>
          <Text style={styles.qrSub}>Show your QR code at reception</Text>
        </View>
        <Text style={styles.chevron}>›</Text>
      </Pressable>
      <Text style={ui.sectionTitle}>Membership overview</Text>
      <View style={ui.card}>
        <View style={styles.row}>
          <View style={styles.roundIcon}>
            <Text>◷</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>Membership status</Text>
            <Text style={styles.rowSub}>
              {status === "active"
                ? "Your plan is ready to use"
                : "Visit the front desk to renew"}
            </Text>
          </View>
          <Text style={styles.good}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Text>
        </View>
        <View style={ui.divider} />
        <View style={styles.row}>
          <View style={styles.roundIcon}>
            <Text>€</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>Monthly fee</Text>
            <Text style={styles.rowSub}>
              {subscription?.plan.name ?? "Membership"}
            </Text>
          </View>
          <Text style={styles.price}>
            €{(subscription?.plan.price ?? 0).toFixed(2)}
          </Text>
        </View>
      </View>
    </Screen>
  );
}
