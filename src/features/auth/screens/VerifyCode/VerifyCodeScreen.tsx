import { palette } from "@/theme";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./VerifyCodeScreen.styles";

export function VerifyCodeScreen() {
  const params = useLocalSearchParams<{ email?: string }>();
  const email = typeof params.email === "string" ? params.email : "";
  const [code, setCode] = useState("");
  const verify = () => {
    if (!/^\d{6}$/.test(code)) {
      Alert.alert("Enter your code", "Type the 6-digit code to continue.");
      return;
    }
    // Demo only: any six-digit code works until the API is connected.
    router.replace("/(tabs)");
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
        />
        <Text style={styles.note}>
          Demo mode: enter any 6 digits to continue.
        </Text>
        <Pressable style={styles.button} onPress={verify}>
          <Text style={styles.buttonText}>Verify code</Text>
          <Text style={styles.arrow}>→</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            Alert.alert(
              "Code not sent",
              "Email delivery will be connected when the API is ready.",
            )
          }
        >
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
