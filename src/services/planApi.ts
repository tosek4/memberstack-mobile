import { PublicPlan } from "@/types";
import { apiRequest } from "./api";

export async function getPublicPlans(): Promise<PublicPlan[]> {
  const plans = await apiRequest<PublicPlan[]>("/member-plans/public", {
    auth: false,
  });
  return plans.map((plan) => ({ ...plan, price: Number(plan.price) }));
}
