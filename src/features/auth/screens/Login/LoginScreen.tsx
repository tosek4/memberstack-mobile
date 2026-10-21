import { getErrorMessage } from "@/services/api";
import { requestCode } from "@/services/authApi";
import { palette } from "@/theme";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const continueWithEmail = async () => {
    const normalizedEmail = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
      Alert.alert(
        "Check your email",
        "Enter a valid email address to continue.",
      );
      return;
    }
    setLoading(true);
    try {
      await requestCode(normalizedEmail);
      router.push({
        pathname: "/(auth)/verify-code",
        params: { email: normalizedEmail },
      });
    } catch (error) {
      Alert.alert("Couldn't send the code", getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.safe}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View style={styles.brandMark}>
          <Text style={styles.brandLetter}>M</Text>
        </View>
        <Text style={styles.brand}>
          Member<Text style={{ color: palette.primary }}>Stack</Text>
        </Text>
        <Text style={styles.eyebrow}>YOUR FITNESS, CONNECTED</Text>
        <View style={styles.spacer} />
        <Text style={styles.title}>Welcome back.</Text>
        <Text style={styles.subtitle}>Your membership, all in one place.</Text>
        <Text style={styles.label}>EMAIL ADDRESS</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
          placeholder="you@example.com"
          placeholderTextColor="#94A3B8"
          style={styles.input}
          returnKeyType="go"
          onSubmitEditing={continueWithEmail}
          editable={!loading}
        />
        <Pressable
          style={[styles.button, loading && { opacity: 0.6 }]}
          onPress={continueWithEmail}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Sending code…" : "Continue with email"}
          </Text>
          <Text style={styles.arrow}>→</Text>
        </Pressable>
        <Text style={styles.hint}>
          We'll email you a one-time code. No password needed.
        </Text>
        <Pressable onPress={() => router.push("/plans")}>
          <Text
            style={{
              textAlign: "center",
              marginTop: 18,
              color: palette.primary,
              fontWeight: "700",
            }}
          >
            Not a member yet? See our plans ›
          </Text>
        </Pressable>
        <View style={styles.footer}>
          <View style={styles.footerDot} />
          <Text style={styles.footerText}>A simpler way to stay on track</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
