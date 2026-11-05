import { useScreenStyles } from "@/components/ui/Screen.styles";
import { useColors } from "@/hooks/useColors";
import { useRecentCheckIns } from "@/hooks/useRecentCheckIns";
import { router } from "expo-router";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { useRecentCheckInsStyles } from "./RecentCheckIns.styled";
import { formatCheckInDate } from "./utils";

export function RecentCheckIns() {
  const { checkIns, loading, error, reload } = useRecentCheckIns();

  const colors = useColors();
  const ui = useScreenStyles();
  const styles = useRecentCheckInsStyles();

  return (
    <>
      <View style={styles.header}>
        <Text style={[ui.sectionTitle, styles.headerTitle]}>Recent visits</Text>

        <Pressable onPress={() => router.push("/check-in-history")}>
          <Text style={styles.actionText}>See all</Text>
        </Pressable>
      </View>

      <View style={ui.card}>
        {loading ? (
          <ActivityIndicator color={colors.primary} style={styles.loader} />
        ) : error && checkIns.length === 0 ? (
          <View>
            <Text style={ui.subtitle}>{error}</Text>

            <Pressable onPress={() => void reload()}>
              <Text style={styles.retryText}>Try again</Text>
            </Pressable>
          </View>
        ) : checkIns.length === 0 ? (
          <Text style={ui.subtitle}>
            No visits yet. Your successful check-ins will appear here.
          </Text>
        ) : (
          checkIns.map((checkIn, index) => (
            <View key={checkIn.id}>
              {index > 0 && <View style={ui.divider} />}

              <View style={styles.visitRow}>
                <View style={styles.iconContainer}>
                  <Text style={styles.checkIcon}>✓</Text>
                </View>

                <View style={styles.visitContent}>
                  <Text style={styles.visitTitle}>Gym visit</Text>

                  <Text style={ui.subtitle}>
                    {formatCheckInDate(checkIn.checkIn)}
                  </Text>
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </>
  );
}
