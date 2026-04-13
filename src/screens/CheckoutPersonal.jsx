import { XIcon, ChevronDown, InfoCircleIcon } from '../components/icons'
import OrderSidebar from '../components/OrderSidebar'

// ── Shared helpers ────────────────────────────────────────────

function Label({ children, required, className = '' }) {
  return (
    <label className={`block text-[13px] font-medium text-gray-700 mb-1.5 ${className}`}>
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  )
}

// A static "filled" input — looks like a real input but is inert
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

// A static "select" — Mobile / dropdown chevron
function StaticSelect({ value }) {
  return (
    <div
      className="w-full border border-[#D1D5DB] rounded-lg px-3 h-11 flex items-center justify-between bg-white select-none text-sm"
      style={{ pointerEvents: 'none' }}
    >
      <span className="text-[#111827]">{value}</span>
      <ChevronDown size={16} color="#6B7280" />
    </div>
  )
}

// An empty input showing placeholder text
function EmptyInput({ placeholder }) {
  return (
    <div
      className="w-full border border-[#D1D5DB] rounded-lg px-3 h-11 flex items-center text-gray-400 bg-white select-none text-sm"
      style={{ pointerEvents: 'none' }}
    >
      {placeholder}
    </div>
  )
}

// ── Component ────────────────────────────────────────────────

export default function CheckoutPersonal({ navigate }) {
  return (
    <div className="flex h-full" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ══ LEFT SIDEBAR ══ */}
      <OrderSidebar navigate={navigate} backTo="cart" />

      {/* ══ RIGHT FORM PANEL ══ */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex-shrink-0 px-8 pt-7 pb-0">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Account information</h2>
              <p className="text-xs text-gray-400 mt-1">0/12 fields completed</p>
            </div>
            <button className="mt-1 p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <XIcon size={20} />
            </button>
          </div>
          <div className="border-t border-gray-200 mt-4" />
        </div>

        {/* Scrollable form area */}
        <div className="flex-1 overflow-y-auto px-8 py-5">

          {/* Email */}
          <div className="mb-5">
            <Label required>
              Enter your email address that you will use for this account
            </Label>
            <StaticInput value="jonsmith@gmail.com" />
            <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
              We will not share your personal information with any third parties that will use your information to contact you about their products or services. Please see our{' '}
              <span className="underline cursor-default">privacy policy</span> for details.
            </p>
          </div>

          {/* First + Last name */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <Label required>First name</Label>
              <StaticInput value="Jon" />
            </div>
            <div>
              <Label required>Last name</Label>
              <StaticInput value="Smith" />
            </div>
          </div>

          {/* Phone number + type */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <Label required>Phone number</Label>
              <StaticInput value="(303) 555-1234" />
            </div>
            <div>
              <Label required>Phone type</Label>
              <StaticSelect value="Mobile" />
            </div>
          </div>

          {/* Address subheading */}
          <h3 className="text-[15px] font-semibold text-gray-900 mb-3">Address</h3>

          {/* Address line 1 */}
          <div className="mb-4">
            <Label required>Address</Label>
            <StaticInput value="123 State st." />
          </div>

          {/* Address line 2 */}
          <div className="mb-4">
            <Label>Address Line 2</Label>
            <EmptyInput placeholder="Suite, apt, floor" />
          </div>

          {/* City / State / Postal */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <Label required>City</Label>
              <StaticInput value="New York" />
            </div>
            <div>
              <Label>State</Label>
              {/* Special: NY + Change link + info icon */}
              <div
                className="w-full border border-[#D1D5DB] rounded-lg px-3 h-11 flex items-center justify-between bg-white select-none"
                style={{ pointerEvents: 'none' }}
              >
                <span className="text-sm text-[#111827]">NY</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium text-[#8231D4]">Change</span>
                  <InfoCircleIcon size={14} color="#9CA3AF" />
                </div>
              </div>
            </div>
            <div>
              <Label required>Postal code</Label>
              <StaticInput value="10012" />
            </div>
          </div>

        </div>

        {/* ── Continue button ── */}
        <div className="flex-shrink-0 px-8 py-4 border-t border-gray-200 bg-white">
          <button
            onClick={() => navigate('checkout-payment')}
            className="w-full bg-[#8231D4] hover:bg-[#6e28b3] active:bg-[#5d229a] text-white font-medium py-3 rounded-lg text-[15px] transition-colors duration-150"
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  )
}
