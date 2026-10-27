import { queryKeys } from "@/lib/queryKeys";
import { ApiError, getErrorMessage } from "@/services/api";
import { getMyQrToken } from "@/services/memberApi";
import { clearQrToken, getQrToken, saveQrToken } from "@/services/tokenStorage";
import { useQuery } from "@tanstack/react-query";

export function useQrToken() {
  const query = useQuery({
    queryKey: queryKeys.qrToken,
    queryFn: async () => {
      try {
        const { token } = await getMyQrToken();

        await saveQrToken(token);

        return token;
      } catch (error) {
        const offline = error instanceof ApiError && error.status === 0;

        if (offline) {
          const cachedToken = await getQrToken();

          if (cachedToken) {
            return cachedToken;
          }
        } else {
          await clearQrToken();
        }

        throw error;
      }
    },
    staleTime: 30 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 0,
  });

  return {
    token: query.data ?? null,
    loading: query.isPending,
    error: query.error ? getErrorMessage(query.error) : null,
    reload: async () => {
      await query.refetch();
    },
  };
}
