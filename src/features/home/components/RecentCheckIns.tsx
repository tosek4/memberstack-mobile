import { screenStyles as ui } from "@/components/ui/Screen.styles";
import { useRecentCheckIns } from "@/hooks/useRecentCheckIns";
import { lightColors } from "@/theme";
import { router } from "expo-router";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

function formatCheckInDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function RecentCheckIns() {
  const { checkIns, loading, error, reload } = useRecentCheckIns();

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 24,
          marginBottom: 12,
        }}
      >
        <Text style={[ui.sectionTitle, { marginTop: 0, marginBottom: 0 }]}>
          Recent visits
        </Text>

        <Pressable onPress={() => router.push("/check-in-history")}>
          <Text style={{ color: lightColors.primary, fontWeight: "800" }}>
            See all
          </Text>
        </Pressable>
      </View>

      <View style={ui.card}>
        {loading ? (
          <ActivityIndicator
            color={lightColors.primary}
            style={{ paddingVertical: 12 }}
          />
        ) : error && checkIns.length === 0 ? (
          <View>
            <Text style={ui.subtitle}>{error}</Text>
            <Pressable onPress={() => void reload()}>
              <Text
                style={{
                  color: lightColors.primary,
                  fontWeight: "800",
                  marginTop: 12,
                }}
              >
                Try again
              </Text>
            </Pressable>
          </View>
        ) : checkIns.length === 0 ? (
          <Text style={ui.subtitle}>
            No visits yet. Your successful check-ins will appear here.
          </Text>
        ) : (
          checkIns.map((checkIn, index) => (
            <View key={checkIn.id}>
              {index > 0 && <View style={ui.divider} />}

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 14,
                    backgroundColor: "#E1F7FB",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, color: lightColors.primary }}>
                    ✓
                  </Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "800",
                      color: lightColors.text,
                    }}
                  >
                    Gym visit
                  </Text>
                  <Text style={ui.subtitle}>
                    {formatCheckInDate(checkIn.checkIn)}
                  </Text>
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </>
  );
}
