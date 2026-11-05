import { usePaymentHistory } from "@/hooks/usePaymentHistory";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaymentHistoryList } from "../components/PaymentHistoryList/PaymentHistoryList";
import { usePaymentHistoryScreenStyles } from "./PaymentHistoryScreen.styled";

export function PaymentHistoryScreen() {
  const styles = usePaymentHistoryScreenStyles();

  const {
    payments,
    total,
    loading,
    error,
    refreshing,
    fetching,
    loadingMore,
    hasMore,
    loadMore,
    reload,
  } = usePaymentHistory();

  const handleLoadMore = () => {
    if (loading || fetching || loadingMore || !hasMore || error) {
      return;
    }

    void loadMore();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <PaymentHistoryList
        payments={payments}
        loading={loading}
        error={error}
        refreshing={refreshing}
        loadingMore={loadingMore}
        onRefresh={() => void reload()}
        onLoadMore={handleLoadMore}
        onRetry={() => void reload()}
        ListHeaderComponent={
          <View style={styles.header}>
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [
                styles.backButton,
                pressed && styles.pressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Go back"
            >
              <Text style={styles.backButtonText}>‹ Back</Text>
            </Pressable>

            <Text style={styles.title}>Payment History</Text>

            <Text style={styles.subtitle}>
              Your membership payment transactions
            </Text>

            <View style={styles.summaryCard}>
              <View style={styles.summaryContent}>
                <Text style={styles.summaryLabel}>Total payments</Text>
                <Text style={styles.summaryValue}>{total}</Text>
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
