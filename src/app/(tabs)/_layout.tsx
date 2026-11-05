import { useColors } from "@/hooks/useColors";
import { Tabs } from "expo-router";
import { Text } from "react-native";

const TabIcon = ({
  symbol,
  focused,
  activeColor,
  inactiveColor,
}: {
  symbol: string;
  focused: boolean;
  activeColor: string;
  inactiveColor: string;
}) => (
  <Text
    style={{
      fontSize: 21,
      color: focused ? activeColor : inactiveColor,
    }}
  >
    {symbol}
  </Text>
);

export default function TabsLayout() {
  const colors = useColors();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarStyle: {
          backgroundColor: colors.tabBarBackground,
          borderTopColor: colors.border,
          height: 66,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "700",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              symbol="⌂"
              focused={focused}
              activeColor={colors.primary}
              inactiveColor={colors.tabBarInactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="qr-code"
        options={{
          title: "My QR",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              symbol="▦"
              focused={focused}
              activeColor={colors.primary}
              inactiveColor={colors.tabBarInactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my-plan"
        options={{
          title: "My Plan",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              symbol="▤"
              focused={focused}
              activeColor={colors.primary}
              inactiveColor={colors.tabBarInactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              symbol="○"
              focused={focused}
              activeColor={colors.primary}
              inactiveColor={colors.tabBarInactive}
            />
          ),
        }}
      />
    </Tabs>
  );
}
