import { queryKeys } from "@/lib/queryKeys";
import { getErrorMessage } from "@/services/api";
import { getMe } from "@/services/memberApi";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export function useMe() {
  const { data, isPending, error, refetch } = useQuery({
    queryKey: queryKeys.me,
    queryFn: getMe,
    staleTime: 60 * 1000,
    retry: 1,
  });

  const reload = useCallback(async () => {
    await refetch();
  }, [refetch]);

  return {
    data: data ?? null,
    loading: isPending,
    error: error ? getErrorMessage(error) : null,
    reload,
  };
}
