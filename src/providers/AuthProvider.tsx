import { queryClient } from "@/lib/queryClient";
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
    let active = true;

    getTokens()
      .then((tokens) => {
        if (active) {
          setStatus(tokens ? "signedIn" : "signedOut");
        }
      })
      .catch(() => {
        if (active) {
          setStatus("signedOut");
        }
      });

    setSessionExpiredHandler(() => {
      queryClient.clear();
      setStatus("signedOut");
    });

    return () => {
      active = false;
      setSessionExpiredHandler(null);
    };
  }, []);

  const signIn = async (tokens: AuthTokens) => {
    queryClient.clear();
    await saveTokens(tokens);
    setStatus("signedIn");
  };

  const signOut = async () => {
    await logout();
    await clearTokens();
    queryClient.clear();
    setStatus("signedOut");
  };

  return (
    <AuthContext.Provider value={{ status, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
