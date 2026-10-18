import { useAuth } from "@/hooks/useAuth";
import { ApiError, getErrorMessage } from "@/services/api";
import { requestCode, verifyCode } from "@/services/authApi";
import { palette } from "@/theme";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./VerifyCodeScreen.styles";

export function VerifyCodeScreen() {
  const params = useLocalSearchParams<{ email?: string }>();
  const email = typeof params.email === "string" ? params.email : "";
  const { signIn } = useAuth();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const verify = async () => {
    if (!/^\d{6}$/.test(code)) {
      Alert.alert("Enter your code", "Type the 6-digit code to continue.");
      return;
    }
    setLoading(true);
    try {
      const tokens = await verifyCode(email, code);
      await signIn(tokens);
      router.replace("/"); // index.tsx sends signed-in users to the tabs
    } catch (error) {
      const wrongCode =
        error instanceof ApiError && error.status >= 400 && error.status < 500;
      Alert.alert(
        "Couldn't sign in",
        wrongCode
          ? "That code is invalid or has expired. Request a new one."
          : getErrorMessage(error),
      );
    } finally {
      setLoading(false);
    }
  };

  const resend = async () => {
    try {
      await requestCode(email);
      Alert.alert("Code sent", "Check your inbox for a new code.");
    } catch (error) {
      Alert.alert("Couldn't send the code", getErrorMessage(error));
    }
  };

  return (
    <View style={styles.safe}>
      <View style={styles.page}>
        <Pressable onPress={() => router.back()} style={styles.back}>
          <Text style={styles.backText}>‹ Back</Text>
        </Pressable>
        <View style={styles.icon}>
          <Text style={{ fontSize: 26 }}>✉</Text>
        </View>
        <Text style={styles.title}>Check your inbox.</Text>
        <Text style={styles.subtitle}>We sent a 6-digit sign-in code to</Text>
        <Text style={styles.email}>{email}</Text>
        <TextInput
          value={code}
          onChangeText={(value) =>
            setCode(value.replace(/\D/g, "").slice(0, 6))
          }
          keyboardType="number-pad"
          maxLength={6}
          textContentType="oneTimeCode"
          placeholder="— — — — — —"
          placeholderTextColor="#94A3B8"
          style={styles.code}
          editable={!loading}
        />
        <Pressable
          style={[styles.button, loading && { opacity: 0.6 }]}
          onPress={verify}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Verifying…" : "Verify code"}
          </Text>
          <Text style={styles.arrow}>→</Text>
        </Pressable>
        <Pressable onPress={resend}>
          <Text style={styles.resend}>
            Didn't get a code?{" "}
            <Text style={{ color: palette.primary, fontWeight: "700" }}>
              Resend
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
