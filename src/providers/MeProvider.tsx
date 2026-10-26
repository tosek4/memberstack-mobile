import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { getErrorMessage } from "@/services/api";
import { getMe } from "@/services/memberApi";
import { MeResponse } from "@/types";

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

  const reload = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      setData(await getMe());
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;

    const fetchMe = async () => {
      try {
        const result = await getMe();

        if (active) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (active) {
          setError(getErrorMessage(err));
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchMe();

    return () => {
      active = false;
    };
  }, []);

  return (
    <MeContext.Provider value={{ data, loading, error, reload }}>
      {children}
    </MeContext.Provider>
  );
}
