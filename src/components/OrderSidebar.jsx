import { TrashIcon, PhoneIcon, BackArrowIcon } from './icons'

export default function OrderSidebar({ navigate, backTo }) {
  return (
    <div
      className="flex-shrink-0 border-r border-gray-200 flex flex-col bg-white"
      style={{ width: 280, padding: '24px 24px 24px 28px' }}
    >
      {/* Back link */}
      <button
        onClick={() => navigate(backTo)}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-5 transition-colors"
      >
        <BackArrowIcon size={14} color="#6B7280" />
        <span>Back</span>
      </button>

      {/* Order summary heading */}
      <h3 className="font-bold text-gray-900 text-base mb-4">Order summary</h3>

      {/* Plan row */}
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider leading-tight">
          Advanced Legal Plan
        </span>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-sm font-medium text-gray-900">$39.95</span>
          <TrashIcon size={14} color="#9CA3AF" />
        </div>
      </div>

      {/* View links */}
      <div className="flex items-center gap-1 mt-1.5 mb-4">
        <span className="text-[11px] text-gray-400 cursor-default">View details</span>
        <span className="text-[11px] text-gray-300 select-none">|</span>
        <span className="text-[11px] text-gray-400 cursor-default">View member contract</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-4" />

      {/* Monthly total */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-sm text-gray-600">Monthly total</span>
        <span className="text-sm text-gray-600">$39.95/mo</span>
      </div>

      {/* Total due today */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900">Total due today</span>
        <span className="text-sm font-semibold text-gray-900">$39.95</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Have questions */}
      <div className="border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-500 mb-2">Have questions? We're here to help!</p>
        <div className="flex items-center gap-1.5">
          <PhoneIcon size={14} color="#8231D4" />
          <span className="text-[13px] font-medium text-[#8231D4]">Call (844)-963-3167</span>
        </div>
      </div>
    </div>
  )
}
