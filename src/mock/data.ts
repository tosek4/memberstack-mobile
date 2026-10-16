import { MeResponse } from '../types/api'

const DAY = 24 * 60 * 60 * 1000

const daysFromNow = (days: number) => new Date(Date.now() + days * DAY).toISOString()

/** Fake data with the same shape as GET /me (see src/types/api.ts). */
export const mockMe: MeResponse = {
  member: {
    id: 1,
    firstName: 'Aleksandar',
    lastName: 'Petrovski',
    email: 'aleksandar.petrovski@example.com',
    phone: '+389 70 111 201',
    birthDate: '1994-03-12',
    gender: 'male',
    emergencyContact: 'Marija Petrovska (mother) +389 70 111 301',
    status: 'active',
  },
  subscription: {
    id: 10,
    status: 'active',
    startedAt: daysFromNow(-12),
    expiresAt: daysFromNow(18),
    plan: {
      id: 3,
      name: 'Premium',
      description: 'Full access with premium benefits',
      price: 40,
      duration: 30,
    },
  },
}

/** Whole days left until the date (0 or negative = expired). */
export const daysLeft = (isoDate: string): number =>
  Math.ceil((new Date(isoDate).getTime() - Date.now()) / DAY)
