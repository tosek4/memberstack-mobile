import { AuthTokens, RequestCodeBody, VerifyCodeBody } from "@/types/api";
import { apiRequest } from "./api";

export function requestCode(email: string): Promise<void> {
  const body: RequestCodeBody = { email };
  return apiRequest<void>("/member-auth/request-code", {
    method: "POST",
    auth: false,
    body: JSON.stringify(body),
  });
}

export function verifyCode(email: string, code: string): Promise<AuthTokens> {
  const body: VerifyCodeBody = { email, code };
  return apiRequest<AuthTokens>("/member-auth/verify-code", {
    method: "POST",
    auth: false,
    body: JSON.stringify(body),
  });
}
