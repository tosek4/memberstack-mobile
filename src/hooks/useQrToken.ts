import { ApiError, getErrorMessage } from "@/services/api";
import { getMyQrToken } from "@/services/memberApi";
import { clearQrToken, getQrToken, saveQrToken } from "@/services/tokenStorage";
import { useCallback, useEffect, useState } from "react";

export function useQrToken() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const { token: current } = await getMyQrToken();
      await saveQrToken(current);
      setToken(current);
      setError(null);
    } catch (e) {
      const offline = e instanceof ApiError && e.status === 0;
      const cached = offline ? await getQrToken() : null;
      if (cached) {
        setToken(cached); 
        setError(null);
      } else {
        if (!offline) await clearQrToken(); 
        setToken(null);
        setError(getErrorMessage(e));
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const task = async () => {
      await load();
    };

    void task();
  }, [load]);

  const reload = useCallback(async () => {
    setLoading(true);
    await load();
  }, [load]);

  return { token, loading, error, reload };
}
