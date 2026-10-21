import { Screen } from "@/components/ui/Screen";
import { screenStyles as ui } from "@/components/ui/Screen.styles";
import { getErrorMessage } from "@/services/api";
import { getPublicPlans } from "@/services/planApi";
import { lightColors } from "@/theme";
import { PublicPlan } from "@/types";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { styles } from "./PlansScreem.styled";

export function PlansScreen() {
  const { currentPlanId } = useLocalSearchParams<{ currentPlanId?: string }>();
  const [plans, setPlans] = useState<PublicPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setPlans(await getPublicPlans());
      setError(null);
    } catch (e) {
      setError(getErrorMessage(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const retry = () => {
    setLoading(true);
    load();
  };

  const sorted = [...plans].sort((a, b) => a.price - b.price);

  return (
    <Screen>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Text style={styles.backText}>‹ Back</Text>
      </Pressable>
      <Text style={ui.eyebrow}>MEMBERSHIPS</Text>
      <Text style={ui.title}>Our plans</Text>
      <Text style={[ui.subtitle, { marginBottom: 8 }]}>
        Everything available at the gym.
      </Text>

      {loading ? (
        <ActivityIndicator
          size="large"
          color={lightColors.primary}
          style={styles.pad}
        />
      ) : error ? (
        <View style={[ui.card, { marginTop: 20 }]}>
          <Text style={ui.subtitle}>{error}</Text>
          <Pressable onPress={retry}>
            <Text style={styles.action}>Try again</Text>
          </Pressable>
        </View>
      ) : sorted.length === 0 ? (
        <View style={[ui.card, { marginTop: 20 }]}>
          <Text style={ui.subtitle}>No plans are available right now.</Text>
        </View>
      ) : (
        sorted.map((plan) => {
          const isCurrent = String(plan.id) === currentPlanId;
          return (
            <View
              key={plan.id}
              style={[ui.card, styles.plan, isCurrent && styles.planCurrent]}
            >
              <View style={styles.top}>
                <Text style={styles.name}>{plan.name}</Text>
                {isCurrent && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>CURRENT PLAN</Text>
                  </View>
                )}
              </View>
              <Text style={styles.desc}>{plan.description}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>€{plan.price.toFixed(2)}</Text>
                <Text style={styles.per}> / {plan.duration} days</Text>
              </View>
            </View>
          );
        })
      )}

      <Text style={styles.foot}>
        Visit the front desk to start or change a plan.
      </Text>
    </Screen>
  );
}
