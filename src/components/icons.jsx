// All SVG icon components used throughout the prototype

export function XIcon({ size = 20, color = '#9CA3AF', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function TrashIcon({ size = 16, color = '#9CA3AF', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  )
}

export function ChevronDown({ size = 16, color = '#6B7280', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function PhoneIcon({ size = 15, color = '#8231D4', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12.1 19.79 19.79 0 0 1 1.61 3.49 2 2 0 0 1 3.58 1.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function InfoCircleIcon({ size = 15, color = '#9CA3AF', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  )
}

export function LockIcon({ size = 15, color = '#9CA3AF', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

export function EyeIcon({ size = 16, color = '#9CA3AF', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function EyeOffIcon({ size = 16, color = '#9CA3AF', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

export function HelpCircleIcon({ size = 15, color = '#9CA3AF', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

// LegalShield nav logo — dark shield for background nav bar
export function ShieldIconDark({ size = 26, className = '' }) {
  return (
    <svg width={size} height={Math.round(size * 1.18)} viewBox="0 0 26 30" fill="none" className={className}>
      <path d="M13 0L0 5.5V15C0 22.5 5.5 29.5 13 31C20.5 29.5 26 22.5 26 15V5.5L13 0Z" fill="#111827" />
      <path d="M8 15.5L11.5 19L18 12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// LegalShield logo — purple shield for confirmation/activation pages
export function ShieldIconPurple({ size = 36, className = '' }) {
  return (
    <svg width={size} height={Math.round(size * 1.18)} viewBox="0 0 36 42" fill="none" className={className}>
      <path d="M18 0L0 7.5V20C0 30.5 7.5 40 18 42C28.5 40 36 30.5 36 20V7.5L18 0Z" fill="#8231D4" />
      <path d="M11 21L16 26L25 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Cart icon for nav bar
export function CartNavIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="21" r="1" fill="#374151" stroke="none" />
      <circle cx="20" cy="21" r="1" fill="#374151" stroke="none" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

// Check circle for success states
export function CheckCircleIcon({ size = 56, color = '#8231D4', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <circle cx="28" cy="28" r="28" fill={color} opacity="0.12" />
      <circle cx="28" cy="28" r="20" fill={color} />
      <path d="M20 28L25 33L36 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Exclamation mark for modal
export function ExclamationIcon({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="24" fill="#F3E8FF" />
      <circle cx="24" cy="24" r="16" fill="#8231D4" opacity="0.15" />
      <line x1="24" y1="16" x2="24" y2="26" stroke="#8231D4" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="32" r="1.5" fill="#8231D4" />
    </svg>
  )
}

// Back arrow
export function BackArrowIcon({ size = 16, color = '#6B7280', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

// Check circle (green) for email verified banner
export function CheckCircleGreenIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="12" fill="#16A34A" opacity="0.15" />
      <circle cx="12" cy="12" r="9" fill="#16A34A" />
      <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Large check circle for confirmation page
export function BigCheckCircle({ size = 64, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <circle cx="32" cy="32" r="32" fill="#F0FDF4" />
      <circle cx="32" cy="32" r="24" fill="#22C55E" opacity="0.2" />
      <circle cx="32" cy="32" r="18" fill="#22C55E" />
      <path d="M23 32L29 38L41 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
