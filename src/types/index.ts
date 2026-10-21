export type MemberStatus =
  | "active"
  | "inactive"
  | "expired"
  | "suspended"
  | "blocked";

export type SubscriptionStatus = "active" | "expired" | "inactive";

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