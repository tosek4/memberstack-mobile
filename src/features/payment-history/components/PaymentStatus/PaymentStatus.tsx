import { Text, View } from "react-native";
import { PaymentStatusProps } from "../types";
import { styles } from "./PaymentStatus.styled";
import { statusConfig } from "../utils";

export function PaymentStatus({ status }: PaymentStatusProps) {
  const config = statusConfig[status] ?? statusConfig.pending;

  return (
    <View style={[styles.badge, { backgroundColor: config.backgroundColor }]}>
      <View style={[styles.dot, { backgroundColor: config.color }]} />
      <Text style={[styles.label, { color: config.color }]}>
        {config.label}
      </Text>
    </View>
  );
}
