import { queryKeys } from "@/lib/queryKeys";
import { getErrorMessage } from "@/services/api";
import { getMyCheckIns } from "@/services/memberApi";
import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 5;

export function useCheckInHistory() {
  const query = useInfiniteQuery({
    queryKey: [...queryKeys.checkIns.history, PAGE_SIZE],

    queryFn: ({ pageParam }) => {
      return getMyCheckIns(PAGE_SIZE, pageParam);
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage) => {
      if (!lastPage.pagination.hasMore || lastPage.checkIns.length === 0) {
        return undefined;
      }

      return lastPage.pagination.offset + lastPage.checkIns.length;
    },

    staleTime: 60 * 1000,
    retry: 1,
  });

  return {
    checkIns: query.data?.pages.flatMap((page) => page.checkIns) ?? [],
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
