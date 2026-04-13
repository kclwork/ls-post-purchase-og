# LegalShield Activation Flow Prototype V2

## Purpose
Usability test prototype for Maze. Testing activation flow with email verification and DOB/SSN capture as a separate post-purchase flow.

## Screens
1. /cart — Cart drawer (744px)
2. /checkout-personal — Account info, pre-filled static fields (1141px drawer)
3. /checkout-payment — Payment info, pre-filled static fields (1141px drawer)
4. /confirmation — Full page purchase confirmation
5. /confirmation + modal — Activation modal appears after 600ms delay
6. /gmail-inbox — Full screen Gmail inbox
7. /gmail-message — Full screen Gmail message with Verify CTA
8. /activation — Email verified, DOB + SSN form
9. /activation-success — You're all set page

## Key differences from V1
- Checkout fields are completely static (pointer-events-none) — not editable
- Confirmation is full page, not a drawer
- Activation is a separate page flow, not part of the checkout drawer
- No OTP code entry — email verification is handled via a link in the email
- Activation modal appears automatically 600ms after confirmation page loads

## Brand
- Primary purple: #8231D4
- Font: Inter
- Desktop only, 1440px

## Build phases
- Phase 1: Screens 1 and 2
- Phase 2: Screen 3
- Phase 3: Screens 4 and 5 (confirmation + modal)
- Phase 4: Screens 6 and 7 (Gmail)
- Phase 5: Screens 8 and 9 (activation)
