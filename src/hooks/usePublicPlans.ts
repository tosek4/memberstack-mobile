import { queryKeys } from "@/lib/queryKeys";
import { getErrorMessage } from "@/services/api";
import { getPublicPlans } from "@/services/planApi";
import { useQuery } from "@tanstack/react-query";

export function usePublicPlans() {
  const query = useQuery({
    queryKey: queryKeys.publicPlans,
    queryFn: getPublicPlans,
    staleTime: 30 * 60 * 1000,
    gcTime: 2 * 60 * 60 * 1000,
    retry: 1,
  });

  return {
    plans: query.data ?? [],
    loading: query.isPending,
    error: query.error ? getErrorMessage(query.error) : null,
    retry: () => {
      void query.refetch();
    },
  };
}
