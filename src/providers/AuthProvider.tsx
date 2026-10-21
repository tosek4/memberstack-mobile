import { setSessionExpiredHandler } from "@/services/api";
import { logout } from "@/services/authApi";
import { clearTokens, getTokens, saveTokens } from "@/services/tokenStorage";
import { AuthTokens } from "@/types";
import { createContext, ReactNode, useEffect, useState } from "react";
import { AuthContextValue, AuthStatus } from "./types";

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    getTokens()
      .then((tokens) => setStatus(tokens ? "signedIn" : "signedOut"))
      .catch(() => setStatus("signedOut"));

    setSessionExpiredHandler(() => setStatus("signedOut"));
    return () => setSessionExpiredHandler(null);
  }, []);

  const signIn = async (tokens: AuthTokens) => {
    await saveTokens(tokens);
    setStatus("signedIn");
  };

  const signOut = async () => {
    await logout();
    await clearTokens();
    setStatus("signedOut");
  };

  return (
    <AuthContext.Provider value={{ status, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
