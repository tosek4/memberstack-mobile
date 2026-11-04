import { PaymentStatus as PaymentStatusType } from "@/types";

export const statusConfig: Record<
  PaymentStatusType,
  { label: string; color: string; backgroundColor: string }
> = {
  paid: {
    label: "Paid",
    color: "#15803D",
    backgroundColor: "#DCFCE7",
  },
  pending: {
    label: "Pending",
    color: "#B45309",
    backgroundColor: "#FEF3C7",
  },
  failed: {
    label: "Failed",
    color: "#B91C1C",
    backgroundColor: "#FEE2E2",
  },
  refunded: {
    label: "Refunded",
    color: "#475569",
    backgroundColor: "#E2E8F0",
  },
};

export const paymentMethodLabels: Record<string, string> = {
  cash: "Cash",
  card: "Card",
  bank_transfer: "Bank transfer",
  paypal: "PayPal",
  other: "Other",
};
