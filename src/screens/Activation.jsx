import { useState } from 'react'
import { ShieldIconDark, InfoCircleIcon, EyeIcon, EyeOffIcon, CheckCircleGreenIcon } from '../components/icons'

// Returns true if the formatted DOB string is a calendar-valid date within allowed range
function isValidDob(formatted) {
  const digits = formatted.replace(/\D/g, '')
  if (digits.length !== 8) return false

  const month = parseInt(digits.slice(0, 2), 10)
  const day   = parseInt(digits.slice(2, 4), 10)
  const year  = parseInt(digits.slice(4, 8), 10)

  if (month < 1 || month > 12) return false
  if (year < 1904 || year > 2008) return false
  if (day < 1) return false

  // Days in the given month (handles leap years automatically)
  const daysInMonth = new Date(year, month, 0).getDate()
  if (day > daysInMonth) return false

  return true
}

export default function Activation({ navigate }) {
  const [dob, setDob] = useState('')
  const [dobError, setDobError] = useState('')
  const [ssn, setSsn] = useState('')
  const [ssnError, setSsnError] = useState('')
  const [showSSN, setShowSSN] = useState(false)

  // ── DOB mask: MM / DD / YYYY ──────────────────────────────
  const handleDOBChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 8)
    let formatted = digits
    if (digits.length > 2) formatted = digits.slice(0, 2) + ' / ' + digits.slice(2)
    if (digits.length > 4) formatted = digits.slice(0, 2) + ' / ' + digits.slice(2, 4) + ' / ' + digits.slice(4)
    setDob(formatted)

    // Validate once all 8 digits are present
    if (digits.length === 8) {
      setDobError(isValidDob(formatted) ? '' : 'Insert a valid date')
    } else {
      setDobError('')
    }
  }

  // ── SSN: 4 digits only ────────────────────────────────────
  const handleSSNChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 4)
    setSsn(digits)
    setSsnError('')
  }

  // Button is only enabled when both fields are fully valid
  const canActivate = isValidDob(dob) && ssn.length === 4

  const handleActivate = () => {
    if (!canActivate) return
    navigate('activation-success')
  }

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
      <div className="max-w-[480px] mx-auto px-6 pt-10 pb-16">

        {/* Green verified banner */}
        <div
          className="flex items-center gap-2.5 px-4 py-3 rounded-lg mb-6"
          style={{ background: '#F0FDF4', border: '1px solid #86EFAC' }}
        >
          <CheckCircleGreenIcon size={20} />
          <span className="text-sm font-medium" style={{ color: '#166534' }}>
            Your email has been verified
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[26px] font-bold text-gray-900 mb-2">Activate your account</h1>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          To securely activate your LegalShield membership, please confirm the following information below.
        </p>

        {/* Identity + form card */}
        <div
          className="rounded-xl border border-gray-200 overflow-hidden mb-5"
          style={{ background: '#F9FAFB' }}
        >
          {/* Identity info */}
          <div className="px-5 pt-5 pb-4">
            <p className="font-semibold text-gray-900 text-[15px]">Jon Doe</p>
            <p className="text-sm text-gray-600 mt-0.5">jon****@gmail.com</p>
            <button
              className="text-xs font-medium mt-1 cursor-default"
              style={{ color: '#8231D4', pointerEvents: 'none' }}
            >
              Not you? Sign out.
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200" />

          {/* Form fields */}
          <div className="px-5 py-4 space-y-4" style={{ background: '#F9FAFB' }}>

            {/* Date of birth */}
            <div>
              <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">
                Date of birth
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={dob}
                onChange={handleDOBChange}
                placeholder="MM / DD / YYYY"
                className={`w-full bg-white border rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-[#8231D4] focus:ring-1 focus:ring-[#8231D4] ${
                  dobError ? 'border-red-600' : 'border-[#D1D5DB]'
                }`}
              />
              {dobError && (
                <p className="text-red-600 text-xs mt-1">{dobError}</p>
              )}
            </div>

            {/* Last 4 digits of SSN */}
            <div>
              <label className="flex items-center gap-1.5 text-[13px] font-semibold text-gray-800 mb-1.5">
                Last 4 digits of SSN
                <span className="relative group">
                  <InfoCircleIcon size={14} color="#9CA3AF" />
                  <span
                    className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[260px] rounded-lg px-3 py-2 text-xs font-normal text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                    style={{ background: '#1a1a1a', lineHeight: '1.5' }}
                  >
                    We collect this to verify your identity and prevent fraud.
                    {/* Caret */}
                    <span
                      className="absolute top-full left-1/2 -translate-x-1/2"
                      style={{
                        width: 0, height: 0,
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid #1a1a1a',
                      }}
                    />
                  </span>
                </span>
              </label>
              <div className="relative">
                <input
                  type={showSSN ? 'text' : 'password'}
                  inputMode="numeric"
                  value={ssn}
                  onChange={handleSSNChange}
                  maxLength={4}
                  placeholder="Last 4 digits of SSN"
                  className={`w-full bg-white border rounded-lg px-3 py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-[#8231D4] focus:ring-1 focus:ring-[#8231D4] ${
                    ssnError ? 'border-red-600' : 'border-[#D1D5DB]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowSSN(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showSSN ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                </button>
              </div>
              {ssnError && (
                <p className="text-red-600 text-xs mt-1">{ssnError}</p>
              )}
            </div>

          </div>
        </div>

        {/* Activate membership CTA */}
        <button
          onClick={handleActivate}
          disabled={!canActivate}
          className={`w-full font-medium py-3 rounded-lg text-[15px] transition-colors duration-150 mb-4 ${
            canActivate
              ? 'bg-[#8231D4] hover:bg-[#6e28b3] active:bg-[#5d229a] text-white cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Activate membership
        </button>

        {/* Contact support link */}
        <div className="text-center">
          <button
            className="text-sm font-medium text-[#8231D4] hover:text-[#6e28b3] transition-colors cursor-default"
            style={{ pointerEvents: 'none' }}
          >
            Contact support
          </button>
        </div>

      </div>
    </div>
  )
}
