import { XIcon, TrashIcon } from '../components/icons'

export default function Cart({ navigate }) {
  return (
    <div className="flex flex-col h-full" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ── Header ── */}
      <div className="flex items-center justify-between px-7 pt-6 pb-5">
        <h2 className="text-xl font-bold text-gray-900">Cart</h2>
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <XIcon size={20} />
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* ── Body ── */}
      <div className="px-7 pt-5 flex-1">

        {/* Monthly Billing badge */}
        <div className="inline-flex items-center border border-[#8231D4] text-[#8231D4] rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
          Monthly Billing
        </div>

        {/* Item row */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-gray-900">Personal &amp; Family Plan</span>
          <div className="flex items-center gap-2.5 flex-shrink-0 ml-4">
            <span className="text-sm text-gray-700">$39.95/mo.</span>
            <span className="text-gray-300 cursor-default">
              <TrashIcon size={15} color="#9CA3AF" />
            </span>
          </div>
        </div>

        {/* View details / View contract */}
        <div className="flex items-center gap-1 mt-1.5">
          <span className="text-xs text-gray-400 cursor-default">View details</span>
          <span className="text-xs text-gray-300 select-none">|</span>
          <span className="text-xs text-gray-400 cursor-default">View contract</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-5" />

        {/* Monthly total */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-sm text-gray-600">Monthly total</span>
          <span className="text-sm text-gray-600">$39.95/mo</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-5" />

        {/* Total due today */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-[15px] font-semibold text-gray-900">Total due today</span>
          <span className="text-[15px] font-semibold text-gray-900">$39.95</span>
        </div>
      </div>

      {/* Spacer — pushes button to bottom */}
      <div className="flex-1" />

      {/* ── Checkout button ── */}
      <div className="p-4">
        <button
          onClick={() => navigate('checkout-personal')}
          className="w-full bg-[#8231D4] hover:bg-[#6e28b3] active:bg-[#5d229a] text-white font-medium py-3 rounded-lg text-[15px] transition-colors duration-150"
        >
          Checkout
        </button>
      </div>

    </div>
  )
}
