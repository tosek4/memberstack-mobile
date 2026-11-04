export type MemberStatus =
  | "active"
  | "inactive"
  | "expired"
  | "suspended"
  | "blocked";

export type SubscriptionStatus = "active" | "expired" | "inactive";

export type PaymentMethod =
  | "cash"
  | "card"
  | "bank_transfer"
  | "paypal"
  | "other";

export type PaymentStatus = "paid" | "pending" | "failed" | "refunded";

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  birthDate?: string;
  gender?: "male" | "female";
  emergencyContact?: string;
  status: MemberStatus;
}

export interface MembershipPlan {
  id: number;
  name: string;
  description?: string;
  price: number;
  duration: number; // days
}

export interface MemberSubscription {
  id: number;
  status: SubscriptionStatus;
  startedAt: string;
  expiresAt: string;
  plan: MembershipPlan;
}

export interface MeResponse {
  member: Member;
  subscription: MemberSubscription | null;
}

export interface RequestCodeBody {
  email: string;
}

export interface VerifyCodeBody {
  email: string;
  code: string; // 6 digits
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface Props {
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

export interface MemberSubscriptionHistory {
  id: number;
  status: SubscriptionStatus;
  startedAt: string;
  expiresAt: string;
  membershipPlan: MembershipPlan;
}

export interface PublicPlan {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number; // days
}

export interface CheckIn {
  id: number;
  checkIn: string;
  checkOut: string | null;
  status: "checked-in" | "checked-out";
}

export interface CheckInHistoryResponse {
  checkIns: CheckIn[];
  pagination: {
    limit: number;
    offset: number;
    total: number;
    hasMore: boolean;
  };
}

export interface UpdateMemberProfileRequest {
  firstName?: string;
  lastName?: string;
  phone?: string | null;
}

export interface MemberPaymentHistoryItem {
  id: number;
  amount: number;
  currency: "EUR";
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  paidAt: string;
  transactionReference?: string;
  membershipPlan: {
    id: number;
    name: string;
  } | null;
}

export interface PaymentHistoryResponse {
  payments: MemberPaymentHistoryItem[];
  pagination: {
    limit: number;
    offset: number;
    total: number;
    hasMore: boolean;
  };
}
