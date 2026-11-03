import { lightColors as c } from "@/theme";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ProfileInputProps } from "./types";

export function ProfileFormInput({
  label,
  value,
  onChangeText,
  onBlur,
  error,
  placeholder,
  editable = true,
  keyboardType = "default",
  autoCapitalize = "sentences",
}: ProfileInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[
          styles.input,
          !editable && styles.disabledInput,
          error && styles.errorInput,
        ]}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={c.textMuted}
        editable={editable}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 7,
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    color: c.text,
  },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: "#E1E7ED",
    borderRadius: 12,
    paddingHorizontal: 13,
    fontSize: 14,
    color: c.text,
    backgroundColor: "#FFFFFF",
  },
  disabledInput: {
    backgroundColor: "#F1F4F7",
    color: c.textMuted,
  },
  errorInput: {
    borderColor: "#DC2626",
  },
  error: {
    fontSize: 11,
    color: "#DC2626",
  },
});
