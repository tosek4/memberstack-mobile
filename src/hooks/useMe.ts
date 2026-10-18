import { MeContext } from "@/providers/MeProvider";
import { useContext } from "react";

export function useMe() {
  const value = useContext(MeContext);
  if (!value) throw new Error("useMe must be used inside <MeProvider>");
  return value;
}