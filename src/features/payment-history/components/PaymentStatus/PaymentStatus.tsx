import { useColors } from "@/hooks/useColors";
import { Text, View } from "react-native";
import { PaymentStatusProps } from "../types";
import { paymentStatusLabels } from "../utils";
import { usePaymentStatusStyles } from "./PaymentStatus.styled";

export function PaymentStatus({ status }: PaymentStatusProps) {
  const colors = useColors();
  const styles = usePaymentStatusStyles();

  const config = {
    paid: {
      color: colors.success,
      backgroundColor: colors.successBackground,
    },
    pending: {
      color: colors.warning,
      backgroundColor: colors.warningBackground,
    },
    failed: {
      color: colors.danger,
      backgroundColor: colors.dangerBackground,
    },
    refunded: {
      color: colors.textMuted,
      backgroundColor: colors.surfaceMuted,
    },
  }[status] ?? {
    color: colors.warning,
    backgroundColor: colors.warningBackground,
  };

  return (
    <View style={[styles.badge, { backgroundColor: config.backgroundColor }]}>
      <View style={[styles.dot, { backgroundColor: config.color }]} />
      <Text style={[styles.label, { color: config.color }]}>
        {paymentStatusLabels[status] ?? "Pending"}
      </Text>
    </View>
  );
}
