import { AuthTokens, RequestCodeBody, VerifyCodeBody } from "@/types";
import { apiRequest } from "./api";
import { getTokens } from "./tokenStorage";

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

export async function logout(): Promise<void> {
  const tokens = await getTokens();

  console.log("tokens===", tokens);
  if (!tokens) return;
  try {
    await apiRequest<void>("/member-auth/logout", {
      method: "POST",
      auth: false,
      body: JSON.stringify({ refreshToken: tokens.refreshToken }),
    });
  } catch {
    // Offline or server error: the local sign out below still happens.
  }
}
