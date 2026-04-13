// Screen 7 — Gmail message view (pixel-faithful recreation)
import { ShieldIconPurple } from '../components/icons'

// ── Local icons ───────────────────────────────────────────────

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2.5 5h15M2.5 10h15M2.5 15h15" stroke="#5F6368" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function GmailM() {
  return (
    <svg width="36" height="27" viewBox="0 0 36 27" fill="none">
      <path d="M2 2h32v23H2z" fill="white" />
      <path d="M2 2v23l8-8V9L2 2z" fill="#4285F4" />
      <path d="M34 2v23l-8-8V9l8-7z" fill="#34A853" />
      <path d="M2 2L18 14L34 2z" fill="#EA4335" />
      <path d="M2 25L10 17L18 22L26 17L34 25z" fill="#FBBC04" />
      <path d="M10 17L18 22L26 17V25H10z" fill="white" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="6.5" stroke="#5F6368" strokeWidth="1.5" />
      <path d="M14 14L17.5 17.5" stroke="#5F6368" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 4h14M5 9h8M7 14h4" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function HelpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#5F6368" strokeWidth="1.4" />
      <path d="M7.5 7.5a2.5 2.5 0 0 1 5 0c0 2-2.5 2.5-2.5 4" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="14.5" r="0.8" fill="#5F6368" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2.5" stroke="#5F6368" strokeWidth="1.4" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M15.9 4.1l-1.4 1.4M5.5 14.5l-1.4 1.4" stroke="#5F6368" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function GridAppsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="5" cy="5" r="1.7" fill="#5F6368" />
      <circle cx="10" cy="5" r="1.7" fill="#5F6368" />
      <circle cx="15" cy="5" r="1.7" fill="#5F6368" />
      <circle cx="5" cy="10" r="1.7" fill="#5F6368" />
      <circle cx="10" cy="10" r="1.7" fill="#5F6368" />
      <circle cx="15" cy="10" r="1.7" fill="#5F6368" />
      <circle cx="5" cy="15" r="1.7" fill="#5F6368" />
      <circle cx="10" cy="15" r="1.7" fill="#5F6368" />
      <circle cx="15" cy="15" r="1.7" fill="#5F6368" />
    </svg>
  )
}

function BackArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M13 16L7 10L13 4" stroke="#444746" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArchiveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="14" height="3" rx="1" stroke="#444746" strokeWidth="1.3" />
      <path d="M3 6v9h12V6M7 10h4" stroke="#444746" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TrashMsgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 5h12M7 5V3h4v2M5 5l1 10h6l1-10" stroke="#444746" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MarkUnreadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#444746" strokeWidth="1.3" />
      <path d="M2 6l7 5 7-5" stroke="#444746" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function SnoozeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="#444746" strokeWidth="1.3" />
      <path d="M9 5v4l3 2" stroke="#444746" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function ChevronLeftSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M11 13L7 9L11 5" stroke="#444746" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M7 13L11 9L7 5" stroke="#444746" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PencilIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M13 2.5L15.5 5L6 14.5H3.5V12L13 2.5z" stroke="#444746" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2l1.8 4.5h4.7l-3.8 2.8 1.4 4.5L9 11.2l-4.1 2.6 1.4-4.5L2.5 6.5h4.7z" stroke="#5F6368" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function ReplyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4L2 8l4 4V9.5c4 0 7 1.5 8 5-.5-4-3-7-8-7V4z" fill="#5F6368" />
    </svg>
  )
}

function MoreHorizIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="4.5" cy="9" r="1.2" fill="#5F6368" />
      <circle cx="9" cy="9" r="1.2" fill="#5F6368" />
      <circle cx="13.5" cy="9" r="1.2" fill="#5F6368" />
    </svg>
  )
}

function ChevronDownSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M4 5.5L7 8.5L10 5.5" stroke="#5F6368" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// App Store + Google Play buttons
function AppStoreBadge() {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-default select-none" style={{ background: '#000000' }}>
      <svg width="14" height="17" viewBox="0 0 14 17" fill="white">
        <path d="M11.6 9c0-1.9 1-2.9 1-2.9s-1.1-1.6-2.7-1.6c-1.1 0-1.7.6-2.5.6-.8 0-1.5-.6-2.5-.6C3.5 4.5 2 6.2 2 8.5c0 1.4.5 2.9 1.2 3.9.5.8 1.1 1.6 2 1.6.9 0 1.2-.6 2.3-.6 1.1 0 1.4.6 2.3.6.9 0 1.5-.8 2-1.6.5-.7.7-1.5.8-1.5S11.6 10.1 11.6 9zM8.2 3.8C8.7 3.2 9 2.4 9 1.6c0-.1 0-.3 0-.4-.7.1-1.5.5-2 1.1-.5.5-.8 1.2-.8 2 0 .1 0 .3 0 .4.7-.1 1.5-.5 2-1.0z" />
      </svg>
      <div>
        <div className="text-white text-[8px] leading-none">Download on the</div>
        <div className="text-white text-[11px] font-semibold leading-tight">App Store</div>
      </div>
    </div>
  )
}

function GooglePlayBadge() {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-default select-none" style={{ background: '#000000' }}>
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
        <path d="M1 1.5L8.5 8L1 14.5V1.5z" fill="#34A853" />
        <path d="M1 1.5L10 6.5L8.5 8L1 1.5z" fill="#FBBC04" />
        <path d="M1 14.5L8.5 8L10 9.5L1 14.5z" fill="#EA4335" />
        <path d="M10 6.5L13 8L10 9.5L8.5 8L10 6.5z" fill="#4285F4" />
      </svg>
      <div>
        <div className="text-white text-[8px] leading-none">Get it on</div>
        <div className="text-white text-[11px] font-semibold leading-tight">Google Play</div>
      </div>
    </div>
  )
}

// Social icons row
function SocialIcons() {
  const icons = [
    // Instagram
    <svg key="ig" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#555" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="#555" strokeWidth="1.5"/><circle cx="17" cy="7" r="1" fill="#555"/></svg>,
    // Threads/Facebook
    <svg key="fb" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#555" strokeWidth="1.5"/><path d="M12 7.5c-2.3 0-4 1.6-4 4 0 2.5 1.7 4.8 4 5 2-.2 3.5-1.8 3.5-3.5 0-1.5-1-2.3-2-2.3s-2 .8-2 2c0 .8.6 1.3 1.3 1.3" stroke="#555" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    // X / Twitter
    <svg key="x" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#555" strokeWidth="1.5"/><path d="M7 7l10 10M17 7L7 17" stroke="#555" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    // LinkedIn
    <svg key="li" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#555" strokeWidth="1.5"/><path d="M7 10v7M7 7.5v.5M11 10v7M11 13c0-1.7 1-3 2.5-3S16 10.3 16 12v5" stroke="#555" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  ]
  return (
    <div className="flex items-center justify-center gap-4">
      {icons}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────

export default function GmailMessage({ navigate }) {
  return (
    <div
      className="fixed inset-0 z-30 overflow-hidden"
      style={{ background: '#F6F8FC', fontFamily: 'Inter, sans-serif', minWidth: 1440 }}
    >
      {/* ── Top Bar ── */}
      <div className="h-16 bg-white flex items-center px-4 gap-2">
        <div className="flex items-center gap-1 flex-shrink-0">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <HamburgerIcon />
          </button>
          <div className="flex items-center gap-1.5 ml-1">
            <GmailM />
            <span className="text-gray-600 text-[22px] font-light tracking-tight" style={{ fontFamily: 'sans-serif' }}>Gmail</span>
          </div>
        </div>
        <div className="flex-1 max-w-3xl mx-8">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl" style={{ background: '#EAF1FB' }}>
            <SearchIcon />
            <span className="flex-1 text-gray-400 text-sm">Search mail</span>
            <FilterIcon />
          </div>
        </div>
        <div className="flex items-center gap-1 ml-auto flex-shrink-0">
          <button className="p-2 rounded-full hover:bg-gray-100"><HelpIcon /></button>
          <button className="p-2 rounded-full hover:bg-gray-100"><SettingsIcon /></button>
          <button className="p-2 rounded-full hover:bg-gray-100"><GridAppsIcon /></button>
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center ml-2">
            <span className="text-white text-sm font-medium">J</span>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>

        {/* ── Left Sidebar ── */}
        <div className="w-56 flex-shrink-0 overflow-y-auto py-2 pr-2">
          <button className="flex items-center gap-3 mx-3 mb-2 px-4 py-3.5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow text-sm font-medium text-gray-700 w-40">
            <PencilIcon />
            Compose
          </button>

          <div className="space-y-0.5 mt-2">
            {/* Inbox — active */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-r-full text-sm text-gray-900 cursor-default font-bold" style={{ background: '#D3E3FD' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 11h3l2 3h4l2-3h3V3H2v8z" stroke="#444746" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Inbox
            </div>

            {[
              { label: 'Snoozed' },
              { label: 'Starred' },
              { label: 'Important' },
              { label: 'Trash' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 px-4 py-2 rounded-r-full hover:bg-gray-100 text-sm text-gray-700 cursor-default">
                <div className="w-[18px]" />
                {item.label}
              </div>
            ))}

            <div className="flex items-center gap-3 px-4 py-2 rounded-r-full hover:bg-gray-100 text-sm text-gray-700 cursor-default">
              <div className="w-[18px]" />
              <span className="flex-1">Drafts</span>
              <span className="text-xs text-gray-700">14</span>
            </div>

            {[{ label: 'Categories' }, { label: 'More' }].map(item => (
              <div key={item.label} className="flex items-center gap-3 px-4 py-2 rounded-r-full hover:bg-gray-100 text-sm text-gray-700 cursor-default">
                <div className="w-[18px]" />
                {item.label}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-3 mx-4" />

          {/* Labels */}
          <div className="px-4 mb-2">
            <p className="text-xs font-medium text-gray-600 mb-1.5">Labels</p>
          </div>
          {[
            { color: '#34A853', label: 'Team' },
            { color: '#4285F4', label: 'News' },
            { color: '#EA4335', label: 'Work' },
            { color: '#4285F4', label: 'Personal' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-r-full text-sm text-gray-700 cursor-default">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
              {item.label}
            </div>
          ))}
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-r-full text-sm text-gray-500 cursor-default">
            <div className="w-[18px]" />
            More
          </div>
        </div>

        {/* ── Main Message Area ── */}
        <div className="flex-1 flex flex-col bg-white rounded-tl-2xl overflow-hidden mr-1 mt-1" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>

          {/* Message toolbar */}
          <div className="flex items-center px-3 py-2 border-b border-gray-100 gap-1">
            <button
              onClick={() => navigate('gmail-inbox')}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <BackArrow />
            </button>
            {[<ArchiveIcon />, <TrashMsgIcon />, <MarkUnreadIcon />, <SnoozeIcon />].map((icon, i) => (
              <button key={i} className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">{icon}</button>
            ))}
            <div className="flex items-center gap-1 ml-auto text-xs text-gray-600">
              <span>1 of 16</span>
              <button className="p-1 rounded-full hover:bg-gray-100"><ChevronLeftSmall /></button>
              <button className="p-1 rounded-full hover:bg-gray-100"><ChevronRightSmall /></button>
            </div>
          </div>

          {/* Scrollable message content */}
          <div className="flex-1 overflow-y-auto px-8 py-5">

            {/* Subject line */}
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-2xl font-semibold text-gray-900 flex-1">Activate your membership</h1>
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5l5 5 7-7" stroke="#FFA000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-xs border border-gray-300 rounded px-1.5 py-0.5 text-gray-600">Inbox ×</span>
              </div>
            </div>

            {/* Sender row */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold" style={{ background: '#8231D4' }}>
                LS
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-sm text-gray-900">LegalShield</span>
                  <span className="text-xs text-gray-500">&lt;noreplay@legalshield.com&gt;</span>
                  <button className="text-xs text-[#1A73E8] hover:underline cursor-default ml-1">Unsubscribe</button>
                  <span className="text-xs text-gray-500 ml-auto flex-shrink-0">8:02 AM (34 minutes ago)</span>
                  <button className="p-1 rounded-full hover:bg-gray-100"><StarIcon /></button>
                  <button className="p-1 rounded-full hover:bg-gray-100"><ReplyIcon /></button>
                  <button className="p-1 rounded-full hover:bg-gray-100"><MoreHorizIcon /></button>
                </div>
                <button className="flex items-center gap-0.5 text-xs text-gray-500 mt-0.5 cursor-default">
                  to me <ChevronDownSmall />
                </button>
              </div>
            </div>

            {/* ── Email Body Card ── */}
            <div className="max-w-[660px] mx-auto">

              {/* LegalShield logo */}
              <div className="flex items-center justify-center gap-2.5 mb-6">
                <ShieldIconPurple size={30} />
                <span className="font-bold text-gray-900 text-lg">LegalShield</span>
              </div>

              {/* Email content */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Activate your LegalShield Membership</h2>
              <p className="text-sm text-gray-700 mb-2">Hi Jon,</p>
              <p className="text-sm text-gray-700 mb-2">Thanks for your purchase!</p>
              <p className="text-sm text-gray-700 mb-6">
                To activate your membership and access your legal benefits, please verify your email below.
              </p>

              {/* Verify CTA */}
              <button
                onClick={() => navigate('activation')}
                className="w-full bg-[#8231D4] hover:bg-[#6e28b3] text-white font-medium py-3.5 rounded-lg text-[15px] transition-colors duration-150 mb-6"
              >
                Verify your email
              </button>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6" />

              {/* Security notice */}
              <div className="flex gap-3 p-4 rounded-lg mb-6" style={{ background: '#FFFBEB', border: '1px solid #FCD34D' }}>
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L1.5 15.5h15z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="0.5" />
                  <path d="M9 7v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="13" r="0.8" fill="white" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-yellow-800 mb-1">Security Notice</p>
                  <p className="text-xs text-yellow-700">If you did not make this purchase, contact support immediately at (844)-963-3167</p>
                </div>
              </div>

              {/* Footer */}
              <div className="rounded-lg p-6" style={{ background: '#F8F9FA' }}>
                {/* Social icons */}
                <div className="mb-4">
                  <SocialIcons />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-4" />

                {/* Download app */}
                <p className="text-sm font-medium text-gray-700 text-center mb-3">Download the LegalShield app</p>
                <div className="flex items-center justify-center gap-3 mb-5">
                  <AppStoreBadge />
                  <GooglePlayBadge />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-4" />

                {/* Address */}
                <div className="flex items-center gap-2 mb-3">
                  <ShieldIconPurple size={18} />
                  <span className="text-xs font-semibold text-[#8231D4]">LegalShield</span>
                </div>
                <p className="text-xs text-gray-500 mb-1">You are subscribed to messaging from:</p>
                <p className="text-xs text-gray-600 mb-0.5">LegalShield,</p>
                <p className="text-xs text-gray-600 mb-0.5">One Prepaid Way</p>
                <p className="text-xs text-gray-600 mb-3">Ada, OK. 2021</p>

                <p className="text-xs text-gray-500 mb-1">
                  LegalShield © All rights reserved. View our updated{' '}
                  <span className="text-[#8231D4] cursor-default">Privacy Policy</span> and{' '}
                  <span className="text-[#8231D4] cursor-default">Terms of Service</span>.
                </p>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-[#8231D4] cursor-default">Manage your preferences</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-[#8231D4] cursor-default">Unsubscribe</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Right Shortcuts Strip ── */}
        <div className="w-14 flex-shrink-0 flex flex-col items-center pt-3 gap-3 border-l border-gray-200 bg-white">
          <div className="w-8 h-8 rounded-md flex items-center justify-center bg-blue-50 cursor-default">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" fill="#4285F4"/><rect x="9" y="2" width="5" height="5" rx="1" fill="#EA4335"/><rect x="2" y="9" width="5" height="5" rx="1" fill="#34A853"/><rect x="9" y="9" width="5" height="5" rx="1" fill="#FBBC04"/></svg>
          </div>
          <div className="w-8 h-8 rounded-md flex items-center justify-center bg-blue-100 cursor-default">
            <span className="text-blue-600 text-xs font-bold">31</span>
          </div>
          <div className="w-8 h-8 rounded-md flex items-center justify-center bg-yellow-50 cursor-default">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" stroke="#F9AB00" strokeWidth="1.5"/><path d="M4 7h6M4 5h4" stroke="#F9AB00" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </div>
          <div className="w-8 h-8 rounded-md flex items-center justify-center bg-blue-50 cursor-default">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="5" r="2.5" stroke="#4285F4" strokeWidth="1.3"/><path d="M2 13c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5" stroke="#4285F4" strokeWidth="1.3" strokeLinecap="round"/></svg>
          </div>
          <div className="mt-auto mb-3 w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-default">
            <span className="text-gray-400 text-lg leading-none">+</span>
          </div>
        </div>

      </div>
    </div>
  )
}
