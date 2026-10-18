import { getErrorMessage } from "@/services/api";
import { getMe } from "@/services/memberApi";
import { MeResponse } from "@/types/api";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface MeContextValue {
  data: MeResponse | null;
  loading: boolean;
  error: string | null;
  reload: () => Promise<void>;
}

export const MeContext = createContext<MeContextValue | null>(null);

export function MeProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<MeResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMe = useCallback(async () => {
    try {
      setData(await getMe());
      setError(null);
    } catch (e) {
      setError(getErrorMessage(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const reload = useCallback(async () => {
    setLoading(true);
    await fetchMe();
  }, [fetchMe]);

  return (
    <MeContext.Provider value={{ data, loading, error, reload }}>
      {children}
    </MeContext.Provider>
  );
}
