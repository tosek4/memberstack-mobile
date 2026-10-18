export const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8080";

export const STORAGE_KEYS = {
  accessToken: "ms.accessToken",
  refreshToken: "ms.refreshToken",
  qrToken: "ms.qrToken",
} as const;
