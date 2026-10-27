import { lightColors, palette } from "@/theme";
import { Tabs } from "expo-router";
import { Text } from "react-native";

const TabIcon = ({ symbol, focused }: { symbol: string; focused: boolean }) => (
  <Text style={{ fontSize: 21, color: focused ? palette.primary : "#94A3B8" }}>
    {symbol}
  </Text>
);

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: {
          backgroundColor: lightColors.surface,
          borderTopColor: lightColors.border,
          height: 66,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarLabelStyle: { fontSize: 10, fontWeight: "700" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <TabIcon symbol="⌂" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="qr-code"
        options={{
          title: "My QR",
          tabBarIcon: ({ focused }) => <TabIcon symbol="▦" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="my-plan"
        options={{
          title: "My Plan",
          tabBarIcon: ({ focused }) => <TabIcon symbol="▤" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => <TabIcon symbol="○" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
