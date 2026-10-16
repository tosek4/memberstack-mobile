/**
 * DRAFT contract between the mobile app and the MemberStack API.
 *
 * The member-auth and /me endpoints do not exist yet. They are built in
 * Phase 2; until then the app uses src/mock/data.ts, which has these shapes.
 * When the API is ready, check this file against the real responses.
 */

export type MemberStatus =
  | 'active'
  | 'inactive'
  | 'expired'
  | 'suspended'
  | 'blocked'

export interface Member {
  id: number
  firstName: string
  lastName: string
  email: string
  phone?: string
  birthDate?: string // ISO date, e.g. "1994-03-12"
  gender?: 'male' | 'female'
  emergencyContact?: string
  status: MemberStatus
}

export interface MembershipPlan {
  id: number
  name: string
  description?: string
  price: number
  duration: number // days
}

export type SubscriptionStatus = 'active' | 'expired' | 'inactive'

export interface MemberSubscription {
  id: number
  status: SubscriptionStatus
  startedAt: string // ISO date-time
  expiresAt: string // ISO date-time
  plan: MembershipPlan
}

/** GET /me */
export interface MeResponse {
  member: Member
  subscription: MemberSubscription | null // null = no subscription yet
}

/** POST /member-auth/request-code  (always answers 204, even for unknown emails) */
export interface RequestCodeBody {
  email: string
}

/** POST /member-auth/verify-code */
export interface VerifyCodeBody {
  email: string
  code: string // 6 digits
}

/** Response of verify-code and refresh */
export interface AuthTokens {
  accessToken: string
  refreshToken: string
}
