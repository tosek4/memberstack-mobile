import { QueryClient, focusManager } from "@tanstack/react-query";
import { AppState, Platform } from "react-native";

focusManager.setEventListener((handleFocus) => {
  if (Platform.OS === "web") {
    return () => {};
  }

  const subscription = AppState.addEventListener("change", (status) => {
    handleFocus(status === "active");
  });

  return () => subscription.remove();
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: true,
    },
  },
});
