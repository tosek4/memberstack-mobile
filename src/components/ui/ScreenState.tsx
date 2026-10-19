import { Screen } from "@/components/ui/Screen";
import {
  ScreenStateStyles,
  screenStyles as ui,
} from "@/components/ui/Screen.styles";
import { useAuth } from "@/hooks/useAuth";
import { lightColors } from "@/theme";
import { Props } from "@/types";
import { router } from "expo-router";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

export function ScreenState({ loading, error, onRetry }: Props) {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  };

  return (
    <Screen scroll={false}>
      <View style={ScreenStateStyles.center}>
        {loading ? (
          <ActivityIndicator size="large" color={lightColors.primary} />
        ) : (
          <>
            <Text style={ui.sectionTitle}>Something went wrong</Text>
            <Text style={[ui.subtitle, ScreenStateStyles.message]}>
              {error ?? "Please try again."}
            </Text>
            <Pressable style={ScreenStateStyles.button} onPress={onRetry}>
              <Text style={ScreenStateStyles.buttonText}>Try again</Text>
            </Pressable>
            <Pressable style={ScreenStateStyles.link} onPress={handleSignOut}>
              <Text style={ScreenStateStyles.linkText}>Sign out</Text>
            </Pressable>
          </>
        )}
      </View>
    </Screen>
  );
}
