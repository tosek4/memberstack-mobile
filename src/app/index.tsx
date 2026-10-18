import { useAuth } from "@/hooks/useAuth";
import { Redirect } from "expo-router";

export default function IndexRoute() {
  const { status } = useAuth();
  if (status === "loading") return null;

  return (
    <Redirect href={status === "signedIn" ? "/(tabs)" : "/(auth)/login"} />
  );
}
