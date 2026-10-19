import { MeResponse } from "@/types";
import { apiRequest } from "./api";

export function getMe(): Promise<MeResponse> {
  return apiRequest<MeResponse>("/member-auth/me");
}

export function getMyQrToken(): Promise<{ token: string }> {
  return apiRequest<{ token: string }>("/member-auth/qr");
}
