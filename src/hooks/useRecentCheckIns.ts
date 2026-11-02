import { queryKeys } from "@/lib/queryKeys";
import { getErrorMessage } from "@/services/api";
import { getMyCheckIns } from "@/services/memberApi";
import { useQuery } from "@tanstack/react-query";

const RECENT_CHECK_INS_LIMIT = 7;

export function useRecentCheckIns() {
  const query = useQuery({
    queryKey: [...queryKeys.checkIns.recent, RECENT_CHECK_INS_LIMIT],
    queryFn: () => getMyCheckIns(RECENT_CHECK_INS_LIMIT, 0),
    staleTime: 60 * 1000,
    retry: 1,
  });

  return {
    checkIns: query.data?.checkIns ?? [],
    loading: query.isPending,
    error: query.error ? getErrorMessage(query.error) : null,
    reload: query.refetch,
  };
}
