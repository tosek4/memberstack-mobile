import { useScreenStyles } from "@/components/ui/Screen.styles";
import { useColors } from "@/hooks/useColors";
import { useSubscriptionHistory } from "@/hooks/useSubscriptionHistory";
import { formatDate } from "@/utils";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { useSubscriptionHistoryStyles } from "./SubscriptionHistory.styled";
import { PREVIEW_COUNT } from "./utils";

export function SubscriptionHistory() {
  const ui = useScreenStyles();
  const colors = useColors();
  const styles = useSubscriptionHistoryStyles();

  const { subscriptions, loading, error, reload } = useSubscriptionHistory();

  const [showAll, setShowAll] = useState(false);

  useFocusEffect(
    useCallback(() => {
      void reload();
    }, [reload]),
  );

  const visible = showAll
    ? subscriptions
    : subscriptions.slice(0, PREVIEW_COUNT);

  return (
    <>
      <Text style={ui.sectionTitle}>Subscription history</Text>

      {subscriptions.length === 0 && loading ? (
        <ActivityIndicator color={colors.primary} style={styles.pad} />
      ) : subscriptions.length === 0 && error ? (
        <View style={ui.card}>
          <Text style={ui.subtitle}>{error}</Text>

          <Pressable onPress={() => void reload()}>
            <Text style={styles.action}>Try again</Text>
          </Pressable>
        </View>
      ) : subscriptions.length === 0 ? (
        <View style={ui.card}>
          <Text style={ui.subtitle}>No previous subscriptions yet.</Text>
        </View>
      ) : (
        <View style={ui.card}>
          {visible.map((sub, index) => (
            <View key={sub.id}>
              <View style={styles.row}>
                <View style={styles.planContent}>
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

              {index < visible.length - 1 && <View style={ui.divider} />}
            </View>
          ))}

          {subscriptions.length > PREVIEW_COUNT && (
            <Pressable onPress={() => setShowAll((value) => !value)}>
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
