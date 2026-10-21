import { Screen } from "@/components/ui/Screen";
import { screenStyles as ui } from "@/components/ui/Screen.styles";
import { ScreenState } from "@/components/ui/ScreenState";
import { useMe } from "@/hooks/useMe";
import { lightColors } from "@/theme";
import { daysLeft } from "@/utils";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SubscriptionHistory } from "../components/SubscriptionHistory";
import { styles } from "./MyPlanScreen.styles";

export function MyPlanScreen() {
  const { data, loading, error, reload } = useMe();
  if (!data)
    return <ScreenState loading={loading} error={error} onRetry={reload} />;

  const sub = data.subscription;
  const format = (date: string) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  const details = sub
    ? [
        ["Start date", format(sub.startedAt)],
        ["Renewal / expiry", format(sub.expiresAt)],
        ["Time remaining", `${Math.max(daysLeft(sub.expiresAt), 0)} days`],
        ["Payment status", "Managed at reception"],
      ]
    : [];

  return (
    <Screen onRefresh={reload} refreshing={loading}>
      <Text style={ui.eyebrow}>YOUR MEMBERSHIP</Text>
      <Text style={ui.title}>My plan</Text>
      {sub ? (
        <>
          <View style={styles.hero}>
            <View style={styles.heroTop}>
              <Text style={styles.eyebrow}>CURRENT PLAN</Text>
              <View style={styles.pill}>
                <Text style={styles.pillText}>{sub.status.toUpperCase()}</Text>
              </View>
            </View>
            <Text style={styles.name}>{sub.plan.name}</Text>
            <Text style={styles.desc}>{sub.plan.description}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>€{sub.plan.price}</Text>
              <Text style={styles.per}> / {sub.plan.duration} days</Text>
            </View>
          </View>
          <Text style={ui.sectionTitle}>Plan details</Text>
          <View style={ui.card}>
            {details.map(([key, value], index) => (
              <View key={key}>
                <View style={styles.detail}>
                  <Text style={styles.key}>{key}</Text>
                  <Text style={styles.val}>{value}</Text>
                </View>
                {index < details.length - 1 && <View style={ui.divider} />}
              </View>
            ))}
          </View>
          <View style={styles.note}>
            <Text style={styles.noteTitle}>Need to renew?</Text>
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/plans",
                  params: { currentPlanId: String(sub.plan.id) },
                })
              }
            >
              <Text
                style={{
                  color: lightColors.primary,
                  fontWeight: "800",
                  marginTop: 12,
                }}
              >
                Browse all plans ›
              </Text>
            </Pressable>
          </View>
        </>
      ) : (
        <View style={ui.card}>
          <Text style={ui.sectionTitle}>No active membership</Text>
          <Pressable onPress={() => router.push("/plans")}>
            <Text
              style={{
                color: lightColors.primary,
                fontWeight: "800",
                marginTop: 12,
              }}
            >
              Browse all plans ›
            </Text>
          </Pressable>
        </View>
      )}

      <SubscriptionHistory />
    </Screen>
  );
}
