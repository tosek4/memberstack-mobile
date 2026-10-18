import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside <AuthProvider>");
  return value;
}
