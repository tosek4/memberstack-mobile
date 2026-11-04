import {
  MemberPaymentHistoryItem,
  PaymentStatus as PaymentStatusType,
} from "@/types";
import { ComponentProps } from "react";
import { FlatList } from "react-native";

export interface PaymentStatusProps {
  status: PaymentStatusType;
}

export interface PaymentHistoryListProps {
  payments: MemberPaymentHistoryItem[];
  loading: boolean;
  error: string | null;
  refreshing: boolean;
  loadingMore: boolean;
  onRefresh: () => void;
  onLoadMore: () => void;
  onRetry: () => void;
  ListHeaderComponent?: ComponentProps<typeof FlatList>["ListHeaderComponent"];
}

export interface PaymentHistoryItemProps {
  payment: MemberPaymentHistoryItem;
}
