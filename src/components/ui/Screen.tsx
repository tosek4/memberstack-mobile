import { lightColors } from "@/theme";
import { ReactNode } from "react";
import { RefreshControl, SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./Screen.styles";

export function Screen({
  children,
  scroll = true,
  onRefresh,
  refreshing = false,
}: {
  children: ReactNode;
  scroll?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
}) {
  return (
    <SafeAreaView style={styles.safe}>
      {scroll ? (
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          refreshControl={
            onRefresh ? (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={lightColors.primary}
              />
            ) : undefined
          }
        >
          {children}
        </ScrollView>
      ) : (
        <View style={styles.content}>{children}</View>
      )}
    </SafeAreaView>
  );
}
