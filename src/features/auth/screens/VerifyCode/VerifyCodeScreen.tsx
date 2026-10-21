import { useAuth } from "@/hooks/useAuth";
import { ApiError, getErrorMessage } from "@/services/api";
import { requestCode, verifyCode } from "@/services/authApi";
import { palette } from "@/theme";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { RESEND_COOLDOWN_S } from "../../utils";
import { styles } from "./VerifyCodeScreen.styles";

export function VerifyCodeScreen() {
  const params = useLocalSearchParams<{ email?: string }>();
  const email = typeof params.email === "string" ? params.email : "";
  const { signIn } = useAuth();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(RESEND_COOLDOWN_S);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const verify = async () => {
    if (!/^\d{6}$/.test(code)) {
      Alert.alert("Enter your code", "Type the 6-digit code to continue.");
      return;
    }
    setLoading(true);
    try {
      const tokens = await verifyCode(email, code);
      await signIn(tokens);
      router.replace("/");
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
    if (cooldown > 0) return;
    try {
      await requestCode(email);
      setCooldown(RESEND_COOLDOWN_S);
      Alert.alert(
        "Request sent",
        "If this email is registered, a new code is on its way.",
      );
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
        <Pressable onPress={() => router.back()}>
          <Text style={styles.wrongEmail}>Wrong email? Change it</Text>
        </Pressable>
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
        <Pressable onPress={resend} disabled={cooldown > 0}>
          <Text style={styles.resend}>
            Didn't get a code? Check your spam folder or{" "}
            <Text
              style={{
                color: cooldown > 0 ? "#94A3B8" : palette.primary,
                fontWeight: "700",
              }}
            >
              {cooldown > 0 ? `resend in ${cooldown}s` : "resend"}
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
