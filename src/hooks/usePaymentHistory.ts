import { queryKeys } from "@/lib/queryKeys";
import { getErrorMessage } from "@/services/api";
import { getMyPaymentHistory } from "@/services/memberApi";
import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 10;

export function usePaymentHistory() {
  const query = useInfiniteQuery({
    queryKey: [...queryKeys.payments.history, PAGE_SIZE],

    queryFn: ({ pageParam }) => {
      return getMyPaymentHistory(PAGE_SIZE, pageParam);
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage) => {
      if (!lastPage.pagination.hasMore || lastPage.payments.length === 0) {
        return undefined;
      }

      return lastPage.pagination.offset + lastPage.payments.length;
    },

    staleTime: 60 * 1000,
    retry: 1,
  });

  return {
    payments: query.data?.pages.flatMap((page) => page.payments) ?? [],
    total: query.data?.pages[0]?.pagination.total ?? 0,

    loading: query.isPending,
    error: query.error ? getErrorMessage(query.error) : null,

    refreshing: query.isRefetching && !query.isFetchingNextPage,
    fetching: query.isFetching,
    loadingMore: query.isFetchingNextPage,

    hasMore: query.hasNextPage,

    loadMore: () => query.fetchNextPage({ cancelRefetch: false }),
    reload: query.refetch,
  };
}
