import { ShieldIconDark, CartNavIcon, ChevronDown } from './icons'

export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ minWidth: 1440, background: '#F9FAFB' }}
    >
      {/* ── Nav Bar ── */}
      <div
        className="bg-white border-b border-gray-200 px-8 flex items-center"
        style={{ height: 64 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <ShieldIconDark size={24} />
          <span className="font-bold text-gray-900 text-[15px] tracking-tight">LegalShield</span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-8 ml-14">
          <span className="text-sm text-gray-700 font-medium">How It Works</span>
          <span className="text-sm text-gray-700 flex items-center gap-0.5">
            Common Problems
            <ChevronDown size={14} color="#9CA3AF" />
          </span>
          <span className="text-sm text-gray-700 flex items-center gap-0.5">
            Resources
            <ChevronDown size={14} color="#9CA3AF" />
          </span>
          <span className="text-sm text-gray-700 font-medium">Plans</span>
        </nav>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-3">
          <div className="border border-gray-300 rounded-lg px-5 py-1.5 text-sm text-gray-700 font-medium">
            Sign In
          </div>
          <CartNavIcon size={22} />
        </div>
      </div>

      {/* ── Hero Section ── */}
      <div className="bg-white px-12 pt-14 pb-10">
        <h1
          className="text-gray-900 leading-none"
          style={{ fontSize: 68, fontWeight: 500, letterSpacing: '-0.025em', maxWidth: 700, lineHeight: 1.06 }}
        >
          Affordable Personal &<br />Family Legal Plans
        </h1>
        <p
          className="mt-5 text-base text-gray-600 leading-relaxed"
          style={{ maxWidth: 500 }}
        >
          With a LegalShield Personal Plan, you and your family gain access to a team of
          provider lawyers whenever you need them, for an unlimited number of legal
          matters, all for a fraction of the typical law firm hourly rates.
        </p>
      </div>

      {/* ── Secondary section ── */}
      <div className="bg-white border-t border-gray-100 px-12 pt-10">
        <h2
          className="text-gray-900 leading-none"
          style={{ fontSize: 56, fontWeight: 500, letterSpacing: '-0.02em' }}
        >
          It's Never Been
        </h2>
      </div>
    </div>
  )
}
