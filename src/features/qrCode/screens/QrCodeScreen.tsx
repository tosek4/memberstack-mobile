import { Screen } from "@/components/ui/Screen";
import { screenStyles as ui } from "@/components/ui/Screen.styles";
import { ScreenState } from "@/components/ui/ScreenState";
import { useMe } from "@/hooks/useMe";
import { useQrToken } from "@/hooks/useQrToken";
import { lightColors } from "@/theme";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { local, styles } from "./QrCodeScreen.styles";

export function QrCodeScreen() {
  const { data, loading, error, reload } = useMe();
  const qr = useQrToken();
  if (!data)
    return <ScreenState loading={loading} error={error} onRetry={reload} />;

  const { member, subscription: sub } = data;
  const status = sub?.status ?? "inactive";
  const expires = sub
    ? new Date(sub.expiresAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "—";

  return (
    <Screen>
      <Text style={ui.eyebrow}>MEMBER PASS</Text>
      <Text style={ui.title}>Your QR code</Text>
      <Text style={[ui.subtitle, { marginBottom: 22 }]}>
        Scan at the front desk to check in to your gym.
      </Text>
      <View style={styles.card}>
        <View style={styles.status}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>
            MEMBERSHIP {status.toUpperCase()}
          </Text>
        </View>

        <View style={local.qrBox}>
          {qr.token ? (
            <QRCode value={qr.token} size={200} />
          ) : qr.loading ? (
            <ActivityIndicator size="large" color={lightColors.primary} />
          ) : (
            <>
              <Text style={local.error}>
                {qr.error ?? "Couldn't load your QR."}
              </Text>
              <Pressable onPress={qr.reload}>
                <Text style={local.retry}>Try again</Text>
              </Pressable>
            </>
          )}
        </View>

        <Text style={styles.memberName}>
          {member.firstName} {member.lastName}
        </Text>
        <Text style={styles.memberId}>
          MEMBER ID · MS-{String(member.id).padStart(6, "0")}
        </Text>
        <View style={styles.divider} />
        <View style={styles.bottom}>
          <View>
            <Text style={styles.label}>PLAN</Text>
            <Text style={styles.value}>{sub?.plan.name ?? "No plan"}</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.label}>VALID UNTIL</Text>
            <Text style={styles.value}>{expires}</Text>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoIcon}>ⓘ</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.infoTitle}>Your personal pass</Text>
          <Text style={styles.infoText}>
            Keep this code private. Reception scans it to check you in.
          </Text>
        </View>
      </View>
    </Screen>
  );
}
