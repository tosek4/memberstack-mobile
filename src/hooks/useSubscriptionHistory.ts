import { queryKeys } from "@/lib/queryKeys";
import { getErrorMessage } from "@/services/api";
import { getMySubscriptionHistory } from "@/services/memberApi";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export function useSubscriptionHistory() {
  const { data, isPending, error, refetch } = useQuery({
    queryKey: queryKeys.subscriptionHistory,
    queryFn: getMySubscriptionHistory,
    staleTime: 60 * 1000,
    retry: 1,
  });

  const reload = useCallback(async () => {
    await refetch();
  }, [refetch]);

  return {
    subscriptions: data?.subscriptions ?? [],
    loading: isPending,
    error: error ? getErrorMessage(error) : null,
    reload,
  };
}
