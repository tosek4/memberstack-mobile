import { useCheckInHistory } from "@/hooks/useCheckInHistory";
import { useColors } from "@/hooks/useColors";
import { formatCheckInDate, formatCheckInTime } from "@/utils";
import { router } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCheckInHistoryStyles } from "./CheckInHistoryScreem.styled";

export function CheckInHistoryScreen() {
  const colors = useColors();
  const styles = useCheckInHistoryStyles();

  const {
    checkIns,
    total,
    loading,
    error,
    refreshing,
    fetching,
    loadingMore,
    hasMore,
    loadMore,
    reload,
  } = useCheckInHistory();

  const handleLoadMore = () => {
    if (loading || fetching || loadingMore || !hasMore || error) {
      return;
    }

    void loadMore();
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Go back"
        onPress={() => router.back()}
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
      >
        <Text style={styles.backButtonText}>‹</Text>
        <Text style={styles.backLabel}>Back</Text>
      </Pressable>

      <Text style={styles.title}>Attendance history</Text>

      <Text style={styles.subtitle}>Keep track of your visits.</Text>

      {!loading && !error && (
        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <Text style={styles.summaryIconText}>✓</Text>
          </View>

          <View style={styles.summaryContent}>
            <Text style={styles.summaryLabel}>Total visits</Text>
            <Text style={styles.summaryValue}>{total}</Text>
          </View>
        </View>
      )}

      <Text style={styles.sectionTitle}>Your visits</Text>
    </View>
  );

  const renderEmpty = () => {
    if (loading) {
      return (
        <View style={styles.stateContainer}>
          <ActivityIndicator size="large" color={colors.primary} />

          <Text style={styles.stateTitle}>Loading attendance</Text>

          <Text style={styles.stateDescription}>
            Your visit history is on its way.
          </Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.stateContainer}>
          <Text style={styles.stateIcon}>!</Text>

          <Text style={styles.stateTitle}>Couldn&apos;t load attendance</Text>

          <Text style={styles.stateDescription}>{error}</Text>

          <Pressable
            accessibilityRole="button"
            onPress={() => void reload()}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.primaryButtonText}>Try again</Text>
          </Pressable>
        </View>
      );
    }

    return (
      <View style={styles.stateContainer}>
        <Text style={styles.stateIcon}>◷</Text>

        <Text style={styles.stateTitle}>No visits yet</Text>

        <Text style={styles.stateDescription}>
          Your attendance records will appear here after your first check-in.
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <FlatList
        data={checkIns}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.visitCard}>
            <View style={styles.visitIcon}>
              <Text style={styles.visitIconText}>✓</Text>
            </View>

            <View style={styles.visitContent}>
              <Text style={styles.visitTitle}>Gym visit</Text>

              <Text style={styles.visitDate}>
                {formatCheckInDate(item.checkIn)}
              </Text>
            </View>

            <View style={styles.visitTimeContainer}>
              <Text style={styles.visitTime}>
                {formatCheckInTime(item.checkIn)}
              </Text>

              <Text style={styles.visitStatus}>Checked in</Text>
            </View>

            <View style={styles.visitTimeContainer}>
              <Text style={styles.visitTime}>
                {formatCheckInTime(item.checkOut as string)}
              </Text>

              <Text style={styles.visitStatus}>Checked out</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={
          loadingMore ? (
            <View style={styles.footerLoader}>
              <ActivityIndicator color={colors.primary} />

              <Text style={styles.footerText}>Loading more visits...</Text>
            </View>
          ) : undefined
        }
        contentContainerStyle={[
          styles.listContent,
          checkIns.length === 0 && styles.emptyListContent,
        ]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => void reload()}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.4}
      />
    </SafeAreaView>
  );
}
