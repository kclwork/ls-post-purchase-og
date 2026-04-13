import { XIcon, LockIcon, HelpCircleIcon } from '../components/icons'
import OrderSidebar from '../components/OrderSidebar'

// ── Card brand logos ──────────────────────────────────────────

function VisaLogo() {
  return (
    <svg width="42" height="28" viewBox="0 0 42 28" fill="none">
      <rect width="42" height="28" rx="4" fill="#1A1F71" />
      <text x="21" y="19" textAnchor="middle" fill="white" fontSize="11" fontWeight="700"
        fontStyle="italic" fontFamily="Arial, sans-serif" letterSpacing="0.5">
        VISA
      </text>
    </svg>
  )
}

function MastercardLogo() {
  return (
    <svg width="42" height="28" viewBox="0 0 42 28" fill="none">
      <rect width="42" height="28" rx="4" fill="white" stroke="#E5E7EB" />
      <circle cx="16" cy="14" r="8" fill="#EB001B" />
      <circle cx="26" cy="14" r="8" fill="#F79E1B" />
      <path d="M21 7.53A8 8 0 0 1 21 20.47A8 8 0 0 1 21 7.53z" fill="#FF5F00" />
    </svg>
  )
}

function AmexLogo() {
  return (
    <svg width="42" height="28" viewBox="0 0 42 28" fill="none">
      <rect width="42" height="28" rx="4" fill="#2E77BC" />
      <text x="21" y="18" textAnchor="middle" fill="white" fontSize="9" fontWeight="700"
        fontFamily="Arial, sans-serif" letterSpacing="1">
        AMEX
      </text>
    </svg>
  )
}

function DiscoverLogo() {
  return (
    <svg width="42" height="28" viewBox="0 0 42 28" fill="none">
      <rect width="42" height="28" rx="4" fill="white" stroke="#E5E7EB" />
      <text x="8" y="17" fill="#231F20" fontSize="6.5" fontWeight="700"
        fontFamily="Arial, sans-serif" letterSpacing="0.3">
        DISCOVER
      </text>
      <circle cx="34" cy="14" r="7" fill="#F76F20" />
    </svg>
  )
}

// ── Static input helpers ──────────────────────────────────────

function Label({ children, required, className = '' }) {
  return (
    <label className={`block text-[13px] font-medium text-gray-700 mb-1.5 ${className}`}>
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  )
}

function StaticInput({ value, className = '' }) {
  return (
    <div
      className={`w-full border border-[#D1D5DB] rounded-lg px-3 h-11 flex items-center text-[#111827] bg-white select-none text-sm ${className}`}
      style={{ pointerEvents: 'none', userSelect: 'none' }}
    >
      {value}
    </div>
  )
}

// Static input with icon on the right
function StaticInputWithIcon({ value, icon }) {
  return (
    <div className="relative">
      <div
        className="w-full border border-[#D1D5DB] rounded-lg px-3 pr-10 h-11 flex items-center text-[#111827] bg-white select-none text-sm"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {value}
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        {icon}
      </div>
    </div>
  )
}

// ── Component ────────────────────────────────────────────────

export default function CheckoutPayment({ navigate }) {
  return (
    <div className="flex h-full" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ══ LEFT SIDEBAR ══ */}
      <OrderSidebar navigate={navigate} backTo="checkout-personal" />

      {/* ══ RIGHT FORM PANEL ══ */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex-shrink-0 px-8 pt-7 pb-0">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Payment information</h2>
              <p className="text-xs text-gray-400 mt-1">0/5 fields completed</p>
            </div>
            <button className="mt-1 p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <XIcon size={20} />
            </button>
          </div>
          <div className="border-t border-gray-200 mt-4" />
        </div>

        {/* Scrollable form area */}
        <div className="flex-1 overflow-y-auto px-8 py-5">

          {/* Security notice */}
          <p className="text-sm text-gray-500 mb-4">
            All transactions are secure and encrypted.
          </p>

          {/* Payment method toggle pills */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center bg-[#8231D4] text-white text-sm font-medium px-4 py-1.5 rounded-full select-none" style={{ pointerEvents: 'none' }}>
              Credit Card
            </div>
            <div className="flex items-center border border-gray-300 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full select-none" style={{ pointerEvents: 'none' }}>
              Bank Draft
            </div>
          </div>

          {/* Card brand logos */}
          <div className="flex items-center gap-2 mb-5">
            <VisaLogo />
            <MastercardLogo />
            <AmexLogo />
            <DiscoverLogo />
          </div>

          {/* Card number */}
          <div className="mb-4">
            <Label required>Card number</Label>
            <StaticInputWithIcon
              value="4444 3333 2222 1111"
              icon={<LockIcon size={15} color="#9CA3AF" />}
            />
          </div>

          {/* Expiration + CVV */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label required>Expiration date</Label>
              <StaticInput value="12/40" />
            </div>
            <div>
              <Label required>CVV</Label>
              <StaticInputWithIcon
                value="213"
                icon={<HelpCircleIcon size={15} color="#9CA3AF" />}
              />
            </div>
          </div>

          {/* Name on card + Billing postal */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label required>Name on card</Label>
              <StaticInput value="Jon Smith" />
            </div>
            <div>
              <Label required>Billing postal code</Label>
              <StaticInput value="10012" />
            </div>
          </div>

          {/* Test card note */}
          <p className="text-xs text-gray-400 italic mt-1">
            Test card — no real payment will be processed.
          </p>

        </div>

        {/* ── Purchase button ── */}
        <div className="flex-shrink-0 px-8 py-4 border-t border-gray-200 bg-white">
          <button
            onClick={() => navigate('confirmation')}
            className="w-full bg-[#8231D4] hover:bg-[#6e28b3] active:bg-[#5d229a] text-white font-medium py-3 rounded-lg text-[15px] transition-colors duration-150"
          >
            Purchase
          </button>
        </div>

      </div>
    </div>
  )
}
