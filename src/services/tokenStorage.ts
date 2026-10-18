// import { STORAGE_KEYS } from "@/constants/config";
// import { AuthTokens } from "@/types/api";
// import * as SecureStore from "expo-secure-store";
// import { Platform } from "react-native";

// // SecureStore (iOS Keychain / Android Keystore) on phones,
// // localStorage on web, because SecureStore does not exist in the browser.
// const isWeb = Platform.OS === "web";

// async function setItem(key: string, value: string): Promise<void> {
//   if (isWeb) {
//     localStorage.setItem(key, value);
//   } else {
//     await SecureStore.setItemAsync(key, value);
//   }
// }

// async function getItem(key: string): Promise<string | null> {
//   if (isWeb) {
//     return typeof localStorage === "undefined"
//       ? null
//       : localStorage.getItem(key);
//   }
//   return SecureStore.getItemAsync(key);
// }

// async function deleteItem(key: string): Promise<void> {
//   if (isWeb) {
//     localStorage.removeItem(key);
//   } else {
//     await SecureStore.deleteItemAsync(key);
//   }
// }

// export async function saveTokens(tokens: AuthTokens): Promise<void> {
//   await Promise.all([
//     setItem(STORAGE_KEYS.accessToken, tokens.accessToken),
//     setItem(STORAGE_KEYS.refreshToken, tokens.refreshToken),
//   ]);
// }

// export async function getTokens(): Promise<AuthTokens | null> {
//   const [accessToken, refreshToken] = await Promise.all([
//     getItem(STORAGE_KEYS.accessToken),
//     getItem(STORAGE_KEYS.refreshToken),
//   ]);
//   if (!accessToken || !refreshToken) return null;
//   return { accessToken, refreshToken };
// }

// export async function clearTokens(): Promise<void> {
//   await Promise.all([
//     deleteItem(STORAGE_KEYS.accessToken),
//     deleteItem(STORAGE_KEYS.refreshToken),
//     deleteItem(STORAGE_KEYS.qrToken),
//   ]);
// }

// export const getQrToken = () => getItem(STORAGE_KEYS.qrToken);
// export const saveQrToken = (token: string) =>
//   setItem(STORAGE_KEYS.qrToken, token);

import { STORAGE_KEYS } from "@/constants/config";
import { AuthTokens } from "@/types/api";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

// SecureStore (iOS Keychain / Android Keystore) on phones,
// localStorage on web, because SecureStore does not exist in the browser.
const isWeb = Platform.OS === "web";

async function setItem(key: string, value: string): Promise<void> {
  if (isWeb) {
    localStorage.setItem(key, value);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

async function getItem(key: string): Promise<string | null> {
  if (isWeb) {
    return typeof localStorage === "undefined"
      ? null
      : localStorage.getItem(key);
  }
  return SecureStore.getItemAsync(key);
}

async function deleteItem(key: string): Promise<void> {
  if (isWeb) {
    localStorage.removeItem(key);
  } else {
    await SecureStore.deleteItemAsync(key);
  }
}

export async function saveTokens(tokens: AuthTokens): Promise<void> {
  await Promise.all([
    setItem(STORAGE_KEYS.accessToken, tokens.accessToken),
    setItem(STORAGE_KEYS.refreshToken, tokens.refreshToken),
  ]);
}

export async function getTokens(): Promise<AuthTokens | null> {
  const [accessToken, refreshToken] = await Promise.all([
    getItem(STORAGE_KEYS.accessToken),
    getItem(STORAGE_KEYS.refreshToken),
  ]);
  if (!accessToken || !refreshToken) return null;
  return { accessToken, refreshToken };
}

export async function clearTokens(): Promise<void> {
  await Promise.all([
    deleteItem(STORAGE_KEYS.accessToken),
    deleteItem(STORAGE_KEYS.refreshToken),
    deleteItem(STORAGE_KEYS.qrToken),
  ]);
}

export async function clearQrToken(): Promise<void> {
  await Promise.all([deleteItem(STORAGE_KEYS.qrToken)]);
}

export const getQrToken = () => getItem(STORAGE_KEYS.qrToken);
export const saveQrToken = (token: string) =>
  setItem(STORAGE_KEYS.qrToken, token);
