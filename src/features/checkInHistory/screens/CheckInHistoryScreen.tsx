import { useCheckInHistory } from "@/hooks/useCheckInHistory";
import { lightColors } from "@/theme";
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
import { CheckInHistoryStyles } from "./CheckInHistoryScreem.styled";

export function CheckInHistoryScreen() {
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
    <View style={CheckInHistoryStyles.header}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Go back"
        onPress={() => router.back()}
        style={({ pressed }) => [
          CheckInHistoryStyles.backButton,
          pressed && CheckInHistoryStyles.pressed,
        ]}
      >
        <Text style={CheckInHistoryStyles.backButtonText}>‹</Text>
        <Text style={CheckInHistoryStyles.backLabel}>Back</Text>
      </Pressable>
      <Text style={CheckInHistoryStyles.title}>Attendance history</Text>
      <Text style={CheckInHistoryStyles.subtitle}>
        Keep track of your visits.
      </Text>
      {!loading && !error && (
        <View style={CheckInHistoryStyles.summaryCard}>
          <View style={CheckInHistoryStyles.summaryIcon}>
            <Text style={CheckInHistoryStyles.summaryIconText}>✓</Text>
          </View>

          <View style={CheckInHistoryStyles.summaryContent}>
            <Text style={CheckInHistoryStyles.summaryLabel}>Total visits</Text>
            <Text style={CheckInHistoryStyles.summaryValue}>{total}</Text>
          </View>
        </View>
      )}
      <Text style={CheckInHistoryStyles.sectionTitle}>Your visits</Text>
    </View>
  );

  const renderEmpty = () => {
    if (loading) {
      return (
        <View style={CheckInHistoryStyles.stateContainer}>
          <ActivityIndicator size="large" color={lightColors.primary} />
          <Text style={CheckInHistoryStyles.stateTitle}>
            Loading attendance
          </Text>
          <Text style={CheckInHistoryStyles.stateDescription}>
            Your visit history is on its way.
          </Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={CheckInHistoryStyles.stateContainer}>
          <Text style={CheckInHistoryStyles.stateIcon}>!</Text>
          <Text style={CheckInHistoryStyles.stateTitle}>
            Couldn&apos;t load attendance
          </Text>
          <Text style={CheckInHistoryStyles.stateDescription}>{error}</Text>

          <Pressable
            accessibilityRole="button"
            onPress={() => void reload()}
            style={({ pressed }) => [
              CheckInHistoryStyles.primaryButton,
              pressed && CheckInHistoryStyles.pressed,
            ]}
          >
            <Text style={CheckInHistoryStyles.primaryButtonText}>
              Try again
            </Text>
          </Pressable>
        </View>
      );
    }

    return (
      <View style={CheckInHistoryStyles.stateContainer}>
        <Text style={CheckInHistoryStyles.stateIcon}>◷</Text>
        <Text style={CheckInHistoryStyles.stateTitle}>No visits yet</Text>
        <Text style={CheckInHistoryStyles.stateDescription}>
          Your attendance records will appear here after your first check-in.
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={CheckInHistoryStyles.safeArea}
      edges={["top", "bottom"]}
    >
      <FlatList
        data={checkIns}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={CheckInHistoryStyles.visitCard}>
            <View style={CheckInHistoryStyles.visitIcon}>
              <Text style={CheckInHistoryStyles.visitIconText}>✓</Text>
            </View>
            <View style={CheckInHistoryStyles.visitContent}>
              <Text style={CheckInHistoryStyles.visitTitle}>Gym visit</Text>
              <Text style={CheckInHistoryStyles.visitDate}>
                {formatCheckInDate(item.checkIn)}
              </Text>
            </View>
            <View style={CheckInHistoryStyles.visitTimeContainer}>
              <Text style={CheckInHistoryStyles.visitTime}>
                {formatCheckInTime(item.checkIn)}
              </Text>
              <Text style={CheckInHistoryStyles.visitStatus}>Checked in</Text>
            </View>
            <View style={CheckInHistoryStyles.visitTimeContainer}>
              <Text style={CheckInHistoryStyles.visitTime}>
                {formatCheckInTime(item.checkOut as string)}
              </Text>
              <Text style={CheckInHistoryStyles.visitStatus}>Checked out</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={
          loadingMore ? (
            <View style={CheckInHistoryStyles.footerLoader}>
              <ActivityIndicator color={lightColors.primary} />
              <Text style={CheckInHistoryStyles.footerText}>
                Loading more visits...
              </Text>
            </View>
          ) : undefined
        }
        contentContainerStyle={[
          CheckInHistoryStyles.listContent,
          checkIns.length === 0 && CheckInHistoryStyles.emptyListContent,
        ]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => void reload()}
            tintColor={lightColors.primary}
            colors={[lightColors.primary]}
          />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.4}
      />
    </SafeAreaView>
  );
}
