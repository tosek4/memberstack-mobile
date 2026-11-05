import { useColors } from "@/hooks/useColors";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { PaymentHistoryItem } from "../PaymentHistoryItem/PaymentHistoryItem";
import { PaymentHistoryListProps } from "../types";
import { usePaymentHistoryListStyles } from "./PaymentHistoryList.styled";

export function PaymentHistoryList({
  payments,
  loading,
  error,
  refreshing,
  loadingMore,
  onRefresh,
  onLoadMore,
  onRetry,
  ListHeaderComponent,
}: PaymentHistoryListProps) {
  const colors = useColors();
  const styles = usePaymentHistoryListStyles();

  const renderEmpty = () => {
    if (loading) {
      return (
        <View style={styles.stateContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.stateTitle}>Loading payments</Text>
          <Text style={styles.stateDescription}>
            Your payment history is on its way.
          </Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.stateContainer}>
          <Text style={styles.stateIcon}>!</Text>
          <Text style={styles.stateTitle}>Couldn&apos;t load payments</Text>
          <Text style={styles.stateDescription}>{error}</Text>

          <Text
            accessibilityRole="button"
            onPress={onRetry}
            style={styles.retryButton}
          >
            Try again
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.stateContainer}>
        <Text style={styles.stateIcon}>€</Text>
        <Text style={styles.stateTitle}>No payments yet</Text>
        <Text style={styles.stateDescription}>
          Your payment records will appear here when you make a payment.
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={payments}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <PaymentHistoryItem payment={item} />}
      ListEmptyComponent={renderEmpty}
      ListFooterComponent={
        loadingMore ? (
          <View style={styles.footerLoader}>
            <ActivityIndicator color={colors.primary} />
            <Text style={styles.footerText}>Loading more payments...</Text>
          </View>
        ) : undefined
      }
      contentContainerStyle={[
        styles.listContent,
        payments.length === 0 && styles.emptyListContent,
      ]}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={colors.primary}
          colors={[colors.primary]}
        />
      }
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.4}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}
