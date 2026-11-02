import {
  CheckInHistoryResponse,
  MemberSubscriptionHistory,
  MeResponse,
} from "@/types";
import { apiRequest } from "./api";

export function getMe(): Promise<MeResponse> {
  return apiRequest<MeResponse>("/member-auth/me");
}

export function getMyQrToken(): Promise<{ token: string }> {
  return apiRequest<{ token: string }>("/member-auth/qr");
}

export function getMySubscriptionHistory(): Promise<{
  subscriptions: MemberSubscriptionHistory[];
}> {
  return apiRequest<{ subscriptions: MemberSubscriptionHistory[] }>(
    "/member-auth/subscription-history",
  );
}

export function getMyCheckIns(
  limit = 10,
  offset = 0,
): Promise<CheckInHistoryResponse> {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  return apiRequest<CheckInHistoryResponse>(
    `/member-auth/check-ins?${params.toString()}`,
  );
}
