# LegalShield Post-Purchase Activation Prototype

## Purpose
Usability test prototype for Maze. Tests the full post-purchase activation flow — from cart through email verification and identity confirmation — as a standalone desktop web prototype.

## Status
**All 5 phases complete. All 9 screens built and verified.**

---

## Screens

| # | Route | Type | Description |
|---|-------|------|-------------|
| 1 | /cart | Drawer (744px) | Cart with order summary and checkout CTA |
| 2 | /checkout-personal | Drawer (1141px) | Account info — static pre-filled fields |
| 3 | /checkout-payment | Drawer (1141px) | Payment info — static pre-filled fields |
| 4 | /confirmation | Full page | Purchase confirmed, order summary |
| 5 | /confirmation + modal | Full page + overlay | Activation modal auto-appears after 1000ms |
| 6 | /gmail-inbox | Full page | Pixel-faithful Gmail inbox recreation |
| 7 | /gmail-message | Full page | Gmail message with "Verify your email" CTA |
| 8 | /activation | Full page | DOB + SSN form with live validation |
| 9 | /activation-success | Full page | "You're all set!" confirmation |

---

## Build Phases

### Phase 1 — Cart + Checkout Personal ✅
- Drawer component with right-anchor, dark overlay, slide-in animation
- Decorative inert `Background.jsx` marketing page behind drawer
- `Cart.jsx`: order summary, plan details, checkout CTA
- `CheckoutPersonal.jsx`: static pre-filled account fields, shared `OrderSidebar` component
- Back button navigation between cart and checkout

### Phase 2 — Checkout Payment ✅
- `CheckoutPayment.jsx`: static pre-filled payment fields, card brand logos as inline SVGs
- Shared `OrderSidebar` reused across both checkout screens
- Drawer width stays 1141px, animated transition from checkout-personal

### Phase 3 — Confirmation + Activation Modal ✅
- `Confirmation.jsx`: full-page, exits drawer layer entirely (z-30)
- Order details in two-column layout (benefits + order/payment summary)
- `ActivationModal` component inline in Confirmation:
  - Auto-appears after **1000ms** delay
  - 30-second live countdown timer; "Resend verification email" button enables at 0
  - X button is decorative (does not close modal — intentional prototype behavior)
  - "Check your email →" navigates to Gmail inbox

### Phase 4 — Gmail Inbox + Message ✅
- `GmailInbox.jsx`: pixel-faithful Gmail recreation — sidebar, search bar, toolbar, email rows, right shortcuts strip; all Google/Gmail UI icons as inline SVGs
- `GmailMessage.jsx`: full message view — email body with LegalShield branding, security notice, App Store/Google Play badges, social icons, footer
- "Verify your email" CTA navigates to activation screen

### Phase 5 — Activation + Success ✅
- `Activation.jsx`: live DOB input with MM / DD / YYYY format masking; SSN input (password type, eye toggle, 4 digits max)
- **Full calendar-aware DOB validation**: checks month (01–12), day (per month, including leap years), year (1904–2008); invalid dates show "Insert a valid date" error inline
- "Activate membership" button is **disabled** until both DOB and SSN fields are valid — changes from gray to purple when unlocked
- `ActivationSuccess.jsx`: illustrated success state, membership card (#F5F3FF bg), "Go to dashboard" + "Download the app" CTAs (decorative), confirmation footer

---

## Key Decisions & Deviations from Original Brief

| Topic | Decision |
|-------|----------|
| Checkout fields | Rendered as `div` elements with `pointer-events: none` and `userSelect: none` — NOT `disabled` or `readOnly` (avoids browser style overrides) |
| Modal close behavior | X button is decorative; modal cannot be dismissed — forces user through the correct flow for usability testing |
| Modal delay | Changed from 600ms → **1000ms** during testing (felt more natural) |
| Activation button | Changed from always-active to **disabled until valid** — requires valid DOB + 4-digit SSN |
| DOB validation | Full calendar-aware validation added (e.g. June 31 correctly rejected) |
| Background headline weight | Changed from `font-extrabold` → `font-weight: 500` per feedback |
| Navigation | Single-page app — no React Router; all screen changes via `useState` + `setScreen` passed as `navigate` prop |

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Font | Inter (Google Fonts) |
| Node.js | v20.20.2 (via NVM) |
| Target viewport | 1440px desktop only |

---

## File Structure

```
ls-post-purchase-og/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── Screenshots/              # Reference screenshots from original brief
│   ├── 01_ECO-Cart.png
│   ├── 02_ECO-Checkout-Account.png
│   ├── 03_ECO-Checkout-Payment.png
│   ├── 04_ECO-Confirmation.png
│   ├── 05_ECO-Modal.png
│   ├── 06_Gmail-Inbox.png
│   ├── 07_Gmail-Message.png
│   ├── 08_ECO-Activation.png
│   └── 09_ECO-Activation-Success.png
└── src/
    ├── main.jsx              # React entry point
    ├── index.css             # Tailwind directives + slide-in keyframe animation
    ├── App.jsx               # Screen router (useState-based navigation)
    ├── components/
    │   ├── Background.jsx    # Decorative inert marketing page behind drawers
    │   ├── OrderSidebar.jsx  # Shared sidebar for CheckoutPersonal + CheckoutPayment
    │   └── icons.jsx         # All SVG icon components
    └── screens/
        ├── Cart.jsx
        ├── CheckoutPersonal.jsx
        ├── CheckoutPayment.jsx
        ├── Confirmation.jsx      # Includes ActivationModal inline
        ├── GmailInbox.jsx
        ├── GmailMessage.jsx
        ├── Activation.jsx
        └── ActivationSuccess.jsx
```

---

## Brand Tokens

| Token | Value |
|-------|-------|
| Primary purple | `#8231D4` |
| Hover purple | `#6e28b3` |
| Active purple | `#5d229a` |
| Error red | `#DC2626` |
| Body text | `#111827` |
| Input border | `#D1D5DB` |
| Background gray | `#F9FAFB` |
| Overlay | `rgba(0,0,0,0.4)` |

---

## What's Left To Do

Nothing — prototype is complete. Possible future additions if needed:

- Deploy to Vercel for a shareable Maze URL
- Add a start/intro screen for Maze task framing
- Swap static user details ("Jon Doe", "jon****@gmail.com") with configurable props if participant personalization is needed
