import { Screen } from "@/components/ui/Screen";
import { screenStyles as ui } from "@/components/ui/Screen.styles";

import { mockMe } from "@/mock/data";
import { Text, View } from "react-native";
import { styles } from "./QrCodeScreen.styles";
const pattern = [
  "1111111001011111111",
  "1000001010011000001",
  "1011101011011011101",
  "1011101000011011101",
  "1011101011111011101",
  "1000001010111000001",
  "1111111010101111111",
  "0000000011100000000",
  "1010111100010110101",
  "0111010011101001110",
  "1100101110111010011",
  "0000000010010000000",
  "1111111011101011111",
  "1000001000101010001",
  "1011101011111011101",
  "1011101001001011101",
  "1011101010111011101",
  "1000001011001000001",
  "1111111010101111111",
];
function FakeQR() {
  return (
    <View style={styles.qr}>
      {pattern.map((row, i) => (
        <View key={i} style={styles.qrRow}>
          {row.split("").map((cell, j) => (
            <View
              key={j}
              style={[
                styles.cell,
                { backgroundColor: cell === "1" ? "#10202E" : "white" },
              ]}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
export function QrCodeScreen() {
  const sub = mockMe.subscription;
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
          <Text style={styles.statusText}>MEMBERSHIP ACTIVE</Text>
        </View>
        <FakeQR />
        <Text style={styles.memberName}>
          {mockMe.member.firstName} {mockMe.member.lastName}
        </Text>
        <Text style={styles.memberId}>
          MEMBER ID · MS-{String(mockMe.member.id).padStart(6, "0")}
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
          <Text style={styles.infoTitle}>Demo QR code</Text>
          <Text style={styles.infoText}>
            This is a visual placeholder and cannot be scanned. A secure QR code
            will be connected to the API later.
          </Text>
        </View>
      </View>
    </Screen>
  );
}
