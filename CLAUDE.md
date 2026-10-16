# MemberStack Mobile

Mobile app for gym members (React Native + Expo + TypeScript). It only talks
to the MemberStack API over HTTP; the API lives in a separate repository.
Read docs/PLAN.md first.

## About the developer
This is the developer's first mobile app. Explain new concepts briefly the
first time they appear (what it is and why), prefer standard, documented
approaches over clever ones, and mention good practices when they matter.

## Rules
- TypeScript strict. No `any`; type API responses (src/types/api.ts).
- Screens are files in app/ (Expo Router) and stay thin; logic goes into
  src/features/*, reusable UI into src/components/ui.
- Colors, spacing and font sizes come from src/theme. No hard-coded values
  inside screens.
- Phase 1 uses src/mock/data.ts only. Do not call the API before Phase 2.
- Tokens only in expo-secure-store, never AsyncStorage or code. No secrets
  in the repo: EXPO_PUBLIC_* variables are public.
- Install packages with `npx expo install <package>` so versions match the
  Expo SDK. Ask before adding a dependency.
- Every screen handles loading, empty and error states.
- Support dark mode and basic accessibility (labels on buttons and icons).
- Code style: no semicolons, single quotes (see .prettierrc).

## Commands
- `npx expo start`: dev server; scan the QR code with the iPhone camera (Expo Go)
- `npx expo start --tunnel`: if the phone cannot reach the computer
- `npx tsc --noEmit`: type check
- `npx expo lint`: lint
