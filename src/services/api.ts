import { API_BASE_URL } from "@/constants/config";
import { AuthTokens } from "@/types";
import { clearTokens, getTokens, saveTokens } from "./tokenStorage";

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Something went wrong.";
}

type RequestOptions = RequestInit & { auth?: boolean };

let onSessionExpired: (() => void) | null = null;
export function setSessionExpiredHandler(handler: (() => void) | null) {
  onSessionExpired = handler;
}

async function send(path: string, init: RequestInit, accessToken?: string) {
  try {
    return await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        ...init.headers,
      },
    });
  } catch (error) {
    throw new ApiError(
      0,
      "Can't reach the server. Check your connection and try again.",
    );
  }
}

async function readErrorMessage(response: Response): Promise<string> {
  const fallback = `Request failed (${response.status})`;
  try {
    const body = await response.json();
    // LoopBack errors look like { error: { statusCode, name, message } }
    return body?.error?.message ?? body?.message ?? fallback;
  } catch {
    return fallback;
  }
}

let refreshing: Promise<string | null> | null = null;

function refreshAccessToken(): Promise<string | null> {
  refreshing ??= doRefresh().finally(() => {
    refreshing = null;
  });
  return refreshing;
}

async function doRefresh(): Promise<string | null> {
  const tokens = await getTokens();
  if (!tokens) return null;

  const response = await send("/member-auth/refresh", {
    method: "POST",
    body: JSON.stringify({ refreshToken: tokens.refreshToken }),
  });

  if (response.status === 401 || response.status === 403) {
    await clearTokens(); 
    return null;
  }
  if (!response.ok) {
    throw new ApiError(response.status, await readErrorMessage(response));
  }

  const next = (await response.json()) as AuthTokens;
  await saveTokens(next);
  return next.accessToken;
}

export async function apiRequest<T>(
  path: string,
  { auth = true, ...init }: RequestOptions = {},
): Promise<T> {
  const tokens = auth ? await getTokens() : null;

  let response = await send(path, init, tokens?.accessToken);

  if (auth && response.status === 401) {
    const freshToken = await refreshAccessToken();
    if (!freshToken) {
      onSessionExpired?.();
      throw new ApiError(
        401,
        "Your session has expired. Please sign in again.",
      );
    }
    response = await send(path, init, freshToken);
  }

  if (!response.ok) {
    throw new ApiError(response.status, await readErrorMessage(response));
  }
  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}
