export const paymentStatusLabels = {
  paid: "Paid",
  pending: "Pending",
  failed: "Failed",
  refunded: "Refunded",
} as const;

export const paymentMethodLabels: Record<string, string> = {
  cash: "Cash",
  card: "Card",
  bank_transfer: "Bank transfer",
  paypal: "PayPal",
  other: "Other",
};
