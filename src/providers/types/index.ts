import { AuthTokens } from "@/types";

export type AuthStatus = "loading" | "signedIn" | "signedOut";

export interface AuthContextValue {
  status: AuthStatus;
  signIn: (tokens: AuthTokens) => Promise<void>;
  signOut: () => Promise<void>;
}
