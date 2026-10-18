import { setSessionExpiredHandler } from "@/services/api";
import { clearTokens, getTokens, saveTokens } from "@/services/tokenStorage";
import { AuthTokens } from "@/types/api";
import { createContext, ReactNode, useEffect, useState } from "react";

export type AuthStatus = "loading" | "signedIn" | "signedOut";

interface AuthContextValue {
  status: AuthStatus;
  signIn: (tokens: AuthTokens) => Promise<void>;
  signOut: () => Promise<void>;
}

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
    await clearTokens();
    setStatus("signedOut");
  };

  return (
    <AuthContext.Provider value={{ status, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
