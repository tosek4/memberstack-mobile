import { screenStyles as ui } from "@/components/ui/Screen.styles";
import { getErrorMessage } from "@/services/api";
import { getMySubscriptionHistory } from "@/services/memberApi";
import { lightColors } from "@/theme";
import { MemberSubscriptionHistory } from "@/types";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { styles } from "./SubscriptionHistory.styled";
import { PREVIEW_COUNT } from "./utils";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export function SubscriptionHistory() {
  const [subscriptions, setSubscriptions] = useState<
    MemberSubscriptionHistory[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const load = useCallback(async () => {
    try {
      const data = await getMySubscriptionHistory();
      setSubscriptions(data.subscriptions);
      setError(null);
    } catch (e) {
      setError(getErrorMessage(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load]),
  );

  const reload = () => {
    setLoading(true);
    load();
  };

  const visible = showAll
    ? subscriptions
    : subscriptions.slice(0, PREVIEW_COUNT);

  return (
    <>
      <Text style={ui.sectionTitle}>Subscription history</Text>

      {subscriptions?.length === 0 && loading ? (
        <ActivityIndicator color={lightColors.primary} style={styles.pad} />
      ) : subscriptions?.length === 0 && error ? (
        <View style={ui.card}>
          <Text style={ui.subtitle}>{error}</Text>
          <Pressable onPress={reload}>
            <Text style={styles.action}>Try again</Text>
          </Pressable>
        </View>
      ) : subscriptions?.length === 0 ? (
        <View style={ui.card}>
          <Text style={ui.subtitle}>No previous subscriptions yet.</Text>
        </View>
      ) : (
        <View style={ui.card}>
          {visible?.map((sub, index) => (
            <View key={sub.id}>
              <View style={styles.row}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.plan}>{sub.membershipPlan.name}</Text>
                  <Text style={styles.dates}>
                    {formatDate(sub.startedAt)} – {formatDate(sub.expiresAt)}
                  </Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.price}>€{sub.membershipPlan.price}</Text>
                  <Text
                    style={[
                      styles.status,
                      sub.status === "active" && styles.statusActive,
                    ]}
                  >
                    {sub.status.toUpperCase()}
                  </Text>
                </View>
              </View>
              {index < subscriptions?.length - 1 && <View style={ui.divider} />}
            </View>
          ))}

          {subscriptions?.length > PREVIEW_COUNT && (
            <Pressable onPress={() => setShowAll((v) => !v)}>
              <Text style={styles.action}>
                {showAll ? "Show less" : `Show all (${subscriptions.length})`}
              </Text>
            </Pressable>
          )}
        </View>
      )}
    </>
  );
}
