import { ShieldIconDark } from '../components/icons'

function HighFiveIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="60" cy="60" r="58" fill="#F5F3FF" />
      <circle cx="60" cy="60" r="46" fill="#EDE9FE" />

      {/* Left hand / arm */}
      <g transform="rotate(-20, 60, 60)">
        <rect x="28" y="52" width="12" height="28" rx="6" fill="#C4B5FD" />
        {/* Fingers left hand */}
        <rect x="28" y="38" width="6" height="18" rx="3" fill="#A78BFA" />
        <rect x="35" y="35" width="6" height="20" rx="3" fill="#A78BFA" />
        <rect x="22" y="42" width="6" height="14" rx="3" fill="#A78BFA" />
        <rect x="16" y="48" width="6" height="12" rx="3" fill="#C4B5FD" />
      </g>

      {/* Right hand / arm */}
      <g transform="rotate(20, 60, 60) scale(-1,1) translate(-120,0)">
        <rect x="28" y="52" width="12" height="28" rx="6" fill="#C4B5FD" />
        {/* Fingers right hand */}
        <rect x="28" y="38" width="6" height="18" rx="3" fill="#A78BFA" />
        <rect x="35" y="35" width="6" height="20" rx="3" fill="#A78BFA" />
        <rect x="22" y="42" width="6" height="14" rx="3" fill="#A78BFA" />
        <rect x="16" y="48" width="6" height="12" rx="3" fill="#C4B5FD" />
      </g>

      {/* Center check / star burst */}
      <circle cx="60" cy="56" r="16" fill="#7C3AED" />
      <path d="M52 56L57.5 62L68 50" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Sparkles */}
      <circle cx="88" cy="30" r="3" fill="#A78BFA" />
      <circle cx="32" cy="28" r="2" fill="#C4B5FD" />
      <circle cx="92" cy="72" r="2.5" fill="#8B5CF6" />
      <circle cx="26" cy="76" r="2" fill="#A78BFA" />
      <line x1="88" y1="18" x2="88" y2="26" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="84" y1="22" x2="92" y2="22" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function ActivationSuccess({ navigate }) {
  return (
    <div
      className="fixed inset-0 overflow-auto bg-white z-30"
      style={{ fontFamily: 'Inter, sans-serif', minWidth: 1440 }}
    >
      {/* ── Logo header ── */}
      <div className="flex justify-center items-center py-5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <ShieldIconDark size={24} />
          <span className="font-bold text-gray-900 text-[18px] tracking-tight">LegalShield</span>
        </div>
      </div>

      {/* ── Page content ── */}
      <div className="max-w-[480px] mx-auto px-6 pt-12 pb-16 flex flex-col items-center text-center">

        {/* Illustration */}
        <div className="mb-6">
          <HighFiveIllustration />
        </div>

        {/* Heading */}
        <h1 className="text-[28px] font-bold text-gray-900 mb-3">You're all set!</h1>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
          Your membership is now active and ready to use.
        </p>

        {/* Membership card */}
        <div
          className="w-full rounded-2xl p-6 mb-8 text-left"
          style={{ background: '#F5F3FF' }}
        >
          <p className="text-[10px] font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">
            Your Membership ID: #LS8956
          </p>
          <div className="flex items-center gap-3 mb-1">
            {/* Shield badge */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#EDE9FE' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2L3.5 5V9.5C3.5 13.09 6.34 16.44 10 17.5C13.66 16.44 16.5 13.09 16.5 9.5V5L10 2Z"
                  fill="#7C3AED"
                />
                <path d="M7 10L9 12L13 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-gray-900">Personal &amp; Family Plan</p>
              <p className="text-xs text-gray-500">New York · Basic (Monthly)</p>
            </div>
          </div>

          <div className="border-t border-purple-200 mt-4 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Monthly billing</span>
              <span className="text-sm font-semibold text-gray-900">$39.95 / mo</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" fill="#7C3AED" opacity="0.15" />
                <path d="M4.5 7L6.5 9L9.5 5" stroke="#7C3AED" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs text-[#7C3AED] font-medium">Active as of today</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <button
          className="w-full bg-[#8231D4] hover:bg-[#6e28b3] active:bg-[#5d229a] text-white font-medium py-3 rounded-lg text-[15px] transition-colors duration-150 mb-3 cursor-default"
          style={{ pointerEvents: 'none' }}
        >
          Go to dashboard
        </button>
        <button
          className="w-full border border-[#8231D4] text-[#8231D4] hover:bg-purple-50 font-medium py-3 rounded-lg text-[15px] transition-colors duration-150 cursor-default"
          style={{ pointerEvents: 'none' }}
        >
          Download the app
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-400 mt-8 leading-relaxed">
          A welcome email with your membership details has been sent to{' '}
          <span className="font-semibold text-gray-600">jon*****@gmail.com</span>
        </p>

      </div>
    </div>
  )
}
