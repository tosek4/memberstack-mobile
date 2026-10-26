import { useCallback, useEffect, useState } from "react";

import { getErrorMessage } from "@/services/api";
import { getPublicPlans } from "@/services/planApi";
import { PublicPlan } from "@/types";

export function usePublicPlans() {
  const [plans, setPlans] = useState<PublicPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const retry = useCallback(() => {
    setLoading(true);
    setError(null);
    setRetryCount((count) => count + 1);
  }, []);

  useEffect(() => {
    let isActive = true;

    async function fetchPlans() {
      try {
        const data = await getPublicPlans();

        if (isActive) {
          setPlans(data);
          setError(null);
        }
      } catch (err) {
        if (isActive) {
          setError(getErrorMessage(err));
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchPlans();

    return () => {
      isActive = false;
    };
  }, [retryCount]);

  return { plans, loading, error, retry };
}
