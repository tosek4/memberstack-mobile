import { Screen } from "@/components/ui/Screen";
import { useScreenStyles } from "@/components/ui/Screen.styles";
import { useAuth } from "@/hooks/useAuth";
import { useColors } from "@/hooks/useColors";
import { Props } from "@/types";
import { router } from "expo-router";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

export function ScreenState({ loading, error, onRetry }: Props) {
  const { signOut } = useAuth();
  const colors = useColors();
  const styles = useScreenStyles();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  };

  return (
    <Screen scroll={false}>
      <View style={styles.center}>
        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <>
            <Text style={styles.sectionTitle}>Something went wrong</Text>

            <Text style={[styles.subtitle, styles.message]}>
              {error ?? "Please try again."}
            </Text>

            <Pressable
              style={styles.button}
              onPress={onRetry}
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Try again</Text>
            </Pressable>

            <Pressable
              style={styles.link}
              onPress={handleSignOut}
              accessibilityRole="button"
            >
              <Text style={styles.linkText}>Sign out</Text>
            </Pressable>
          </>
        )}
      </View>
    </Screen>
  );
}
