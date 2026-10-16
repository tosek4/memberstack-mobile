# MemberStack Mobile: plan

## Scope
Members only. First version: show my QR code, my membership plan, my personal
info. Staff use the web app.

## Login (approved): 6-digit code by email
1. Member enters email         -> POST /member-auth/request-code
2. API emails a 6-digit code   (valid 10 min, stored hashed, max 5 attempts)
3. Member enters the code      -> POST /member-auth/verify-code
4. API returns access + refresh tokens (role: member)
5. App stores tokens in secure storage (expo-secure-store), opens Home
6. Next launches: refresh token keeps the session; Face ID can unlock the app

Security rules (API side):
- Same response whether or not the email exists.
- Rate limit code requests and failed attempts; codes are single use.
- Refresh tokens are stored hashed and rotated on each use.
- /me endpoints take the member id from the token, never from the URL.

## API (to build in Phase 2)
| Method | Path                         | Purpose                            |
| ------ | ---------------------------- | ---------------------------------- |
| POST   | /member-auth/request-code    | send the code (always 204)         |
| POST   | /member-auth/verify-code     | exchange code for tokens           |
| POST   | /member-auth/refresh         | new access token                   |
| POST   | /member-auth/logout          | revoke the refresh token           |
| GET    | /me                          | member + current subscription      |
| GET    | /me/qr                       | short-lived signed QR token (Ph.3) |

## Phases
- **Phase 0**: create the project, run it on the iPhone with Expo Go.
- **Phase 1**: screens with mock data (no API): Login, Code, Home, My QR,
  Plan, Profile. Reusable UI components. Dark mode.
- **Phase 2**: member-auth + /me in the API, real login, token refresh,
  loading and error states, secure storage.
- **Phase 3**: payment/attendance history, push reminders, rotating QR,
  Face ID unlock (needs a development build instead of Expo Go).
- **Phase 4**: icon, splash, EAS builds, TestFlight, store release.
