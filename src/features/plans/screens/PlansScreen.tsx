import { Screen } from "@/components/ui/Screen";
import { screenStyles as ui } from "@/components/ui/Screen.styles";
import { lightColors } from "@/theme";
import { router, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

import { usePublicPlans } from "@/hooks/usePublicPlans";
import { styles } from "./PlansScreem.styled";

export function PlansScreen() {
  const { currentPlanId } = useLocalSearchParams<{ currentPlanId?: string }>();

  const { plans, loading, error, retry } = usePublicPlans();

  const sortedPlans = [...plans].sort((a, b) => a.price - b.price);

  return (
    <Screen>
      <Pressable
        onPress={() => router.back()}
        style={styles.back}
        accessibilityRole="button"
      >
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
          <Pressable onPress={retry} accessibilityRole="button">
            <Text style={styles.action}>Try again</Text>
          </Pressable>
        </View>
      ) : sortedPlans.length === 0 ? (
        <View style={[ui.card, { marginTop: 20 }]}>
          <Text style={ui.subtitle}>No plans are available right now.</Text>
        </View>
      ) : (
        sortedPlans.map((plan) => {
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
