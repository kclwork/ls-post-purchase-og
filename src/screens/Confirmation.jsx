import { useState, useEffect } from 'react'
import { ShieldIconPurple, PhoneIcon, XIcon } from '../components/icons'

// ── Inline illustration icons ────────────────────────────────

function MembershipCardIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="flex-shrink-0">
      <rect x="2" y="10" width="34" height="22" rx="3" fill="#DDD6FE" />
      <rect x="6" y="13" width="34" height="22" rx="3" fill="#A78BFA" />
      <rect x="10" y="16" width="34" height="22" rx="3" fill="#7C3AED" />
      <rect x="14" y="22" width="14" height="2" rx="1" fill="white" opacity="0.9" />
      <rect x="14" y="27" width="9" height="2" rx="1" fill="white" opacity="0.6" />
    </svg>
  )
}

function AppDownloadIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="flex-shrink-0">
      <rect x="11" y="4" width="26" height="40" rx="4" fill="#EDE9FE" />
      <rect x="13" y="8" width="22" height="28" rx="2" fill="#8B5CF6" />
      <rect x="19" y="38" width="10" height="2.5" rx="1.25" fill="#C4B5FD" />
      <path d="M20 24L24 20L28 24" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="24" y1="20" x2="24" y2="28" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SmallMastercardIcon() {
  return (
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none">
      <rect width="36" height="24" rx="3" fill="white" stroke="#E5E7EB" />
      <circle cx="14" cy="12" r="7" fill="#EB001B" />
      <circle cx="22" cy="12" r="7" fill="#F79E1B" />
      <path d="M18 6.28A7 7 0 0 1 18 17.72A7 7 0 0 1 18 6.28z" fill="#FF5F00" />
    </svg>
  )
}

function CheckOutlineIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10" stroke="#111827" strokeWidth="1.5" />
      <path d="M7 11L10 14L15 8" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Activation modal ─────────────────────────────────────────

function ActivationModal({ navigate }) {
  const [countdown, setCountdown] = useState(30)

  useEffect(() => {
    if (countdown <= 0) return
    const t = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [countdown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      onClick={e => e.stopPropagation()}
    >
      <div className="bg-white rounded-2xl w-full max-w-[500px] p-8 relative shadow-2xl">

        {/* X — decorative, does not close */}
        <button className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-500 transition-colors">
          <XIcon size={20} color="#9CA3AF" />
        </button>

        {/* Exclamation icon */}
        <div className="flex justify-center mb-5">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: '#F3E8FF' }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: '#EDE9FE' }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10" stroke="#8231D4" strokeWidth="1.5" />
                <line x1="11" y1="6.5" x2="11" y2="12.5" stroke="#8231D4" strokeWidth="1.75" strokeLinecap="round" />
                <circle cx="11" cy="15.5" r="1.1" fill="#8231D4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[22px] font-bold text-gray-900 text-center mb-3 leading-snug">
          Let's get your account activated
        </h2>
        <p className="text-sm text-gray-500 text-center leading-relaxed mb-5">
          To protect your account and verify your identity, we need two quick
          steps before your legal benefits are live.
        </p>

        {/* Steps label */}
        <p className="text-sm font-bold text-gray-900 mb-3">Two steps left:</p>

        {/* Steps card */}
        <div className="rounded-xl overflow-hidden mb-5" style={{ background: '#F9FAFB' }}>
          {/* Step 1 */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex gap-3">
              <div
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: '#8231D4' }}
              >
                <span className="text-white text-[11px] font-bold">1</span>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#8231D4] mb-1">Verify your email</p>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  We've sent a verification link to{' '}
                  <span className="font-semibold text-gray-900">jon*****@gmail.com</span>.
                  Click the link in your email to verify your account.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-[11px] font-semibold">2</span>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-gray-400 mb-1">Confirm your identity</p>
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  You'll provide your date of birth and the last 4 digits of your SSN to secure your account.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resend button — disabled until countdown hits 0 */}
        <button
          className={`w-full rounded-lg py-3 text-sm font-medium mb-2 transition-colors duration-200 ${
            countdown === 0
              ? 'bg-[#8231D4] hover:bg-[#6e28b3] text-white cursor-pointer'
              : 'text-gray-400 cursor-not-allowed'
          }`}
          style={countdown > 0 ? { background: '#E5E7EB' } : {}}
          disabled={countdown > 0}
        >
          Resend verification email
        </button>

        {/* Countdown — hidden once it hits 0 */}
        <p className="text-xs text-gray-400 text-center mb-4">
          {countdown > 0 ? `Resend email in 00:${String(countdown).padStart(2, '0')}s` : '\u00A0'}
        </p>

        {/* Check your email link — only way forward */}
        <div className="text-center">
          <button
            onClick={() => navigate('gmail-inbox')}
            className="text-sm font-medium text-[#8231D4] hover:text-[#6e28b3] transition-colors"
          >
            Check your email →
          </button>
        </div>

      </div>
    </div>
  )
}

// ── Main confirmation page ───────────────────────────────────

export default function Confirmation({ navigate }) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowModal(true), 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="fixed inset-0 overflow-auto bg-white z-30"
      style={{ fontFamily: 'Inter, sans-serif', minWidth: 1440 }}
    >

      {/* ── Logo header ── */}
      <div className="flex justify-center items-center py-5 border-b border-gray-200">
        <div className="flex items-center gap-2.5">
          <ShieldIconPurple size={30} />
          <span className="font-bold text-gray-900 text-[18px] tracking-tight">LegalShield</span>
        </div>
      </div>

      {/* ── Page content ── */}
      <div className="max-w-[840px] mx-auto px-6 pt-10 pb-20">

        {/* Confirmation heading */}
        <div className="text-center mb-9">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <CheckOutlineIcon />
            <h1 className="text-[22px] font-bold text-gray-900">Thanks for your purchase, Jon!</h1>
          </div>
          <p className="text-[15px] text-gray-600">
            Your order <span className="font-semibold text-gray-900">#LS8956</span> is confirmed and your receipt is on its way to
          </p>
          <p className="text-[15px] font-semibold text-gray-900">jon*****@gmail.com.</p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex gap-5 items-start">

          {/* LEFT CARD */}
          <div className="flex-1 border border-gray-200 rounded-xl p-6">
            <h2 className="text-[15px] font-semibold text-gray-900 mb-5">Once you're activated</h2>

            {/* Row 1 */}
            <div className="flex gap-4">
              <MembershipCardIcon />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1.5">Start using your membership</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  After you activate your account, you will receive a welcome email with your
                  membership kit, member number, and everything you need to get the most out
                  of your coverage.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 my-5" />

            {/* Row 2 */}
            <div className="flex gap-4">
              <AppDownloadIcon />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1.5">Download the app</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Stay in contact with your legal team - submit traffic tickets and have access
                  to 24/7 emergency legal access for covered events. Available on iOS and Android.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 flex-shrink-0" style={{ width: 296 }}>

            {/* Membership card */}
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Membership #LS8956
              </p>
              <div className="flex items-baseline justify-between mb-0.5">
                <span className="text-[13px] font-medium text-gray-900">Personal &amp; Family Plan</span>
                <span className="text-[13px] font-semibold text-gray-900">$39.95/mo</span>
              </div>
              <p className="text-xs text-gray-400 mb-1.5">New York · Basic (Monthly)</p>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-xs text-gray-400 cursor-default">View details</span>
                <span className="text-xs text-gray-300 select-none">/</span>
                <span className="text-xs text-gray-400 cursor-default">View contract</span>
              </div>
              <div className="border-t border-gray-200 mb-3" />
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Monthly total</span>
                <span className="text-sm text-gray-600">$39.95/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-gray-900">Total paid today</span>
                <span className="text-sm font-semibold text-gray-900">$39.95</span>
              </div>
            </div>

            {/* Payment method card */}
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Payment Method
              </p>
              <div className="flex items-center gap-2.5 mb-2">
                <SmallMastercardIcon />
                <span className="text-sm text-gray-700">ending in 5678</span>
              </div>
              <p className="text-sm text-gray-700 mb-0.5">Jon Smith</p>
              <p className="text-sm text-gray-500">123 State St. New York, NY 10012</p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-1.5">Have questions? We're here to help!</p>
          <div className="flex items-center justify-center gap-1.5">
            <PhoneIcon size={14} color="#8231D4" />
            <span className="text-sm font-medium text-[#8231D4]">Call (844)-963-3167</span>
          </div>
        </div>

      </div>

      {/* ── Activation Modal ── */}
      {showModal && <ActivationModal navigate={navigate} />}

    </div>
  )
}
