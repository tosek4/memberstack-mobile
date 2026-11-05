import { useColors } from "@/hooks/useColors";
import type { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    badge: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      gap: 6,
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 6,
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
    },
    label: {
      fontSize: 12,
      fontWeight: "600",
    },
  });

export function usePaymentStatusStyles() {
  const colors = useColors();

  return createStyles(colors);
}
