import { formatAmount, formatDate } from "@/utils";
import { Text, View } from "react-native";
import { PaymentStatus } from "../PaymentStatus/PaymentStatus";
import { PaymentHistoryItemProps } from "../types";
import { paymentMethodLabels } from "../utils";
import { usePaymentHistoryItemStyles } from "./PaymentHistoryItem.styled";

export function PaymentHistoryItem({ payment }: PaymentHistoryItemProps) {
  const styles = usePaymentHistoryItemStyles();

  const paymentMethod =
    paymentMethodLabels[payment.paymentMethod] ?? payment.paymentMethod;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>€</Text>
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.planName}>
            {payment.membershipPlan?.name ?? "Gym payment"}
          </Text>
          <Text style={styles.date}>{formatDate(payment.paidAt)}</Text>
        </View>

        <Text style={styles.amount}>
          {formatAmount(payment.amount, payment.currency)}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomRow}>
        <View style={styles.methodContainer}>
          <Text style={styles.metaLabel}>Payment method</Text>
          <Text style={styles.metaValue}>{paymentMethod}</Text>
        </View>

        <PaymentStatus status={payment.status} />
      </View>

      {payment.transactionReference ? (
        <Text style={styles.reference}>
          Reference: {payment.transactionReference}
        </Text>
      ) : null}
    </View>
  );
}
