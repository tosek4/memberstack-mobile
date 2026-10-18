import { Screen } from "@/components/ui/Screen";
import { screenStyles as ui } from "@/components/ui/Screen.styles";
import { useAuth } from "@/hooks/useAuth";
import { lightColors } from "@/theme";
import { router } from "expo-router";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

/** Shown instead of a screen while /me is loading or has failed. */
export function ScreenState({ loading, error, onRetry }: Props) {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  };

  return (
    <Screen scroll={false}>
      <View style={styles.center}>
        {loading ? (
          <ActivityIndicator size="large" color={lightColors.primary} />
        ) : (
          <>
            <Text style={ui.sectionTitle}>Something went wrong</Text>
            <Text style={[ui.subtitle, styles.message]}>
              {error ?? "Please try again."}
            </Text>
            <Pressable style={styles.button} onPress={onRetry}>
              <Text style={styles.buttonText}>Try again</Text>
            </Pressable>
            <Pressable style={styles.link} onPress={handleSignOut}>
              <Text style={styles.linkText}>Sign out</Text>
            </Pressable>
          </>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  message: { textAlign: "center", marginBottom: 20 },
  button: {
    backgroundColor: lightColors.primary,
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  buttonText: { color: lightColors.onPrimary, fontWeight: "800" },
  link: { marginTop: 18, padding: 8 },
  linkText: { color: lightColors.danger, fontWeight: "700" },
});
