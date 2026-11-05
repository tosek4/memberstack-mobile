import { useColors } from "@/hooks/useColors";
import { Text, TextInput, View } from "react-native";
import { useProfileFormInputStyles } from "./ProfileFormInput.styled";
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
  const colors = useColors();
  const styles = useProfileFormInputStyles();

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
        placeholderTextColor={colors.placeholder}
        editable={editable}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}
