# MemberStack Mobile

Mobile app for MemberStack gym members: QR code, membership plan, personal
info. Built with React Native, Expo (Expo Router) and TypeScript.

## Requirements
- Node.js (LTS) and npm
- Expo Go on your phone (App Store / Google Play)
- Phone and computer on the same Wi-Fi network

## Run
```bash
npm install
npx expo start
```
Scan the QR code with the iPhone camera; the app opens in Expo Go and
reloads when you save a file. If it cannot connect, use
`npx expo start --tunnel`.

## Configuration
Copy `.env.example` to `.env.local` and set `EXPO_PUBLIC_API_URL`
(used from Phase 2).

## Structure
```
app/                 screens and routes (Expo Router), thin files
src/components/ui/   reusable UI: Button, Card, Input, Badge ...
src/features/        auth, membership, profile (hooks and logic)
src/services/        API client (Phase 2)
src/mock/            mock data (Phase 1)
src/theme/           colors, spacing, font sizes
src/types/           API types (draft contract)
docs/PLAN.md         plan, login flow, API contract, phases
```
