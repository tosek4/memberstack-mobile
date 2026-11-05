import { Screen } from "@/components/ui/Screen";
import { useScreenStyles } from "@/components/ui/Screen.styles";
import { ScreenState } from "@/components/ui/ScreenState";
import {
  ProfileFormValues,
  profileSchema,
} from "@/features/profile/schemas/profileSchema";
import { useMe } from "@/hooks/useMe";
import { useUpdateProfile } from "@/hooks/useUpdateProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import { ProfileFormInput } from "../../components/ProfileForm";
import { useEditProfileScreenStyles } from "./EditProfileScreen.styled";

export function EditProfileScreen() {
  const ui = useScreenStyles();
  const styles = useEditProfileScreenStyles();

  const { data, loading, error, reload } = useMe();

  const {
    updateProfile,
    loading: saving,
    error: saveError,
  } = useUpdateProfile();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (!data) return;

    reset({
      firstName: data.member.firstName ?? "",
      lastName: data.member.lastName ?? "",
      phone: data.member.phone ?? "",
    });
  }, [data, reset]);

  if (!data) {
    return <ScreenState loading={loading} error={error} onRetry={reload} />;
  }

  const onSubmit = async (values: ProfileFormValues) => {
    try {
      await updateProfile({
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        phone: values.phone.trim() || null,
      });

      router.back();
    } catch {
      // Displayed through saveError.
    }
  };

  return (
    <Screen>
      <Text style={ui.eyebrow}>ACCOUNT</Text>
      <Text style={ui.title}>Edit profile</Text>

      <Text style={styles.description}>
        Update your personal information below. Your email address cannot be
        changed here.
      </Text>

      <View style={styles.formCard}>
        <Controller
          control={control}
          name="firstName"
          render={({ field: { value, onChange, onBlur } }) => (
            <ProfileFormInput
              label="First name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Enter first name"
              error={errors.firstName?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field: { value, onChange, onBlur } }) => (
            <ProfileFormInput
              label="Last name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Enter last name"
              error={errors.lastName?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field: { value, onChange, onBlur } }) => (
            <ProfileFormInput
              label="Phone number"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              autoCapitalize="none"
              error={errors.phone?.message}
            />
          )}
        />

        <ProfileFormInput
          label="Email address"
          value={data.member.email}
          onChangeText={() => {}}
          editable={false}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.readOnlyHint}>
          Email address is managed by your gym.
        </Text>
      </View>

      {saveError ? (
        <View style={styles.errorBanner}>
          <Text style={styles.errorText}>{saveError}</Text>
        </View>
      ) : null}

      <View style={styles.actions}>
        <Pressable
          style={({ pressed }) => [
            styles.saveButton,
            (saving || !isDirty) && styles.saveButtonDisabled,
            pressed && !saving && isDirty && styles.pressed,
          ]}
          onPress={() => handleSubmit(onSubmit)()}
          disabled={saving || !isDirty}
          accessibilityRole="button"
        >
          <Text style={styles.saveButtonText}>
            {saving ? "Saving changes..." : "Save changes"}
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.cancelButton,
            pressed && styles.pressed,
          ]}
          onPress={() => router.back()}
          disabled={saving}
          accessibilityRole="button"
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
