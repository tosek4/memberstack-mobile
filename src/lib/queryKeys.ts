export const queryKeys = {
  me: ["member", "me"] as const,
  qrToken: ["member", "qr-token"] as const,
  subscriptionHistory: ["member", "subscription-history"] as const,
  publicPlans: ["plans", "public"] as const,
  checkIns: {
    all: ["member", "check-ins"] as const,
    recent: ["member", "check-ins", "recent"] as const,
    history: ["member", "check-ins", "history"] as const,
  },
  payments: {
    history: ["payments", "history"],
  },
};
