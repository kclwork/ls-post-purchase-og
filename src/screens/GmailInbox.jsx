// Screen 6 — pixel-faithful Gmail inbox recreation

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

function RefreshIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M14.5 9a5.5 5.5 0 1 1-1.1-3.3" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.4 5.7h3V2.7" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronLeftSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M11 13L7 9L11 5" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M7 13L11 9L7 5" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

function InboxNavIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 11h3l2 3h4l2-3h3V3H2v8z" stroke="#444746" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StarNavIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2l2 5h5l-4 3 1.5 5L9 12l-4.5 3L6 10 2 7h5z" stroke="#444746" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="#444746" strokeWidth="1.4" />
      <path d="M9 5v4l3 2" stroke="#444746" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 2l14 7-14 7V11l10-2-10-2V2z" fill="#444746" />
    </svg>
  )
}

function DraftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="12" height="14" rx="2" stroke="#444746" strokeWidth="1.4" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="#444746" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function SpamIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="#444746" strokeWidth="1.4" />
      <path d="M9 5v5" stroke="#444746" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="13" r="0.8" fill="#444746" />
    </svg>
  )
}

function MoreDotsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="4.5" r="1.2" fill="#5F6368" />
      <circle cx="9" cy="9" r="1.2" fill="#5F6368" />
      <circle cx="9" cy="13.5" r="1.2" fill="#5F6368" />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="5" width="10" height="8" rx="1.5" stroke="#444746" strokeWidth="1.4" />
      <path d="M12 7.5l4-2v7l-4-2V7.5z" stroke="#444746" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="6" r="3" stroke="#444746" strokeWidth="1.4" />
      <path d="M3 16c0-3 2.7-5 6-5s6 2 6 5" stroke="#444746" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

// ── Main component ────────────────────────────────────────────

export default function GmailInbox({ navigate }) {
  return (
    <div
      className="fixed inset-0 z-30 overflow-hidden"
      style={{ background: '#F6F8FC', fontFamily: 'Inter, sans-serif', minWidth: 1440 }}
    >
      {/* ── Top Bar ── */}
      <div className="h-16 bg-white flex items-center px-4 gap-2 border-b border-transparent" style={{ boxShadow: 'none' }}>
        {/* Hamburger + logo */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <HamburgerIcon />
          </button>
          <div className="flex items-center gap-1.5 ml-1">
            <GmailM />
            <span className="text-gray-600 text-[22px] font-light tracking-tight" style={{ fontFamily: 'sans-serif' }}>Gmail</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-3xl mx-8">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl" style={{ background: '#EAF1FB' }}>
            <SearchIcon />
            <span className="flex-1 text-gray-400 text-sm">Search mail</span>
            <FilterIcon />
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-1 ml-auto flex-shrink-0">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors"><HelpIcon /></button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors"><SettingsIcon /></button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors"><GridAppsIcon /></button>
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center ml-2 flex-shrink-0">
            <span className="text-white text-sm font-medium">J</span>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>

        {/* ── Left Sidebar ── */}
        <div className="w-56 flex-shrink-0 overflow-y-auto py-2 pr-2">

          {/* Compose button */}
          <button className="flex items-center gap-3 mx-3 mb-2 px-4 py-3.5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow text-sm font-medium text-gray-700 w-40">
            <PencilIcon />
            Compose
          </button>

          {/* Nav items */}
          <div className="space-y-0.5 mt-2">
            {/* Inbox — active */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-r-full font-bold text-sm text-gray-900 cursor-default" style={{ background: '#D3E3FD' }}>
              <InboxNavIcon />
              <span className="flex-1">Inbox</span>
              <span className="text-xs font-bold text-gray-700">3</span>
            </div>

            {[
              { icon: <StarNavIcon />, label: 'Starred' },
              { icon: <ClockIcon />, label: 'Snoozed' },
              { icon: <SendIcon />, label: 'Sent' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 px-4 py-2 rounded-r-full hover:bg-gray-100 text-sm text-gray-700 cursor-default">
                {item.icon}
                {item.label}
              </div>
            ))}

            <div className="flex items-center gap-3 px-4 py-2 rounded-r-full hover:bg-gray-100 text-sm text-gray-700 cursor-default">
              <DraftIcon />
              <span className="flex-1">Drafts</span>
              <span className="text-xs text-gray-700">1</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 rounded-r-full hover:bg-gray-100 text-sm text-gray-700 cursor-default">
              <SpamIcon />
              <span className="flex-1">Spam</span>
              <span className="text-xs font-medium text-gray-700">3</span>
            </div>

            {[
              { label: 'Trash' },
              { label: 'Categories' },
              { label: 'More' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 px-4 py-2 rounded-r-full hover:bg-gray-100 text-sm text-gray-700 cursor-default">
                <div className="w-[18px]" />
                {item.label}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-3 mx-4" />

          {/* Meet */}
          <div className="px-4 mb-2">
            <p className="text-xs font-medium text-gray-600 mb-1">Meet</p>
          </div>
          {[
            { icon: <VideoIcon />, label: 'New meeting' },
            { icon: <VideoIcon />, label: 'Join a meeting' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-r-full text-sm text-gray-700 cursor-default">
              {item.icon}
              {item.label}
            </div>
          ))}

          {/* Divider */}
          <div className="border-t border-gray-200 my-3 mx-4" />

          {/* Hangouts */}
          <div className="px-4 mb-2">
            <p className="text-xs font-medium text-gray-600 mb-2">Hangouts</p>
            <button className="w-full bg-[#1A73E8] hover:bg-[#1669c1] text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
              Sign in
            </button>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="flex-1 flex flex-col bg-white rounded-tl-2xl overflow-hidden mr-1 mt-1" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>

          {/* Toolbar */}
          <div className="flex items-center px-4 py-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              {/* Checkbox */}
              <div className="w-4 h-4 border border-gray-400 rounded-sm flex-shrink-0 cursor-default" />
              <button className="p-1.5 rounded-full hover:bg-gray-100"><RefreshIcon /></button>
              <button className="p-1.5 rounded-full hover:bg-gray-100"><MoreDotsIcon /></button>
            </div>
            <div className="ml-auto flex items-center gap-1 text-xs text-gray-600">
              <span>1–50 of 2,619</span>
              <button className="p-1 rounded-full hover:bg-gray-100"><ChevronLeftSmall /></button>
              <button className="p-1 rounded-full hover:bg-gray-100"><ChevronRightSmall /></button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {/* Primary — active */}
            <div className="flex items-center gap-2 px-5 py-3 cursor-default border-b-2 border-[#EA4335]">
              <PeopleIcon />
              <span className="text-sm font-medium text-[#EA4335]">Primary</span>
            </div>

            <div className="flex items-center gap-2 px-5 py-3 hover:bg-gray-50 cursor-default">
              <PeopleIcon />
              <span className="text-sm text-gray-600">Social</span>
              <span className="text-[10px] font-bold text-white bg-green-600 px-1.5 py-0.5 rounded-full">1 new</span>
            </div>

            <div className="flex items-center gap-2 px-5 py-3 hover:bg-gray-50 cursor-default">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l3-5h9l-3 5 3 5H5z" stroke="#5F6368" strokeWidth="1.3" strokeLinejoin="round" /></svg>
              <span className="text-sm text-gray-600">Promotions</span>
              <span className="text-[10px] font-bold text-white bg-green-600 px-1.5 py-0.5 rounded-full">6 new</span>
            </div>

            <div className="flex items-center gap-2 px-5 py-3 hover:bg-gray-50 cursor-default">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#5F6368" strokeWidth="1.3"/><path d="M8 5v4M8 11v.5" stroke="#5F6368" strokeWidth="1.3" strokeLinecap="round"/></svg>
              <span className="text-sm text-gray-600">Updates</span>
            </div>
          </div>

          {/* ── Email row — unread ── */}
          <div
            className="flex items-center px-4 py-3.5 border-b border-gray-100 cursor-pointer group hover:shadow-md transition-shadow"
            style={{ background: 'white' }}
            onClick={() => navigate('gmail-message')}
          >
            {/* Checkbox */}
            <div className="w-4 h-4 border border-gray-400 rounded-sm flex-shrink-0 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            {/* Star */}
            <svg className="flex-shrink-0 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2l1.6 4h4.2l-3.4 2.5 1.3 4L8 10.3l-3.7 2.2 1.3-4L2.2 6h4.2z" stroke="#5F6368" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            {/* Sender */}
            <span className="font-semibold text-gray-900 text-sm w-40 flex-shrink-0">LegalShield</span>
            {/* Subject + preview */}
            <div className="flex-1 flex items-baseline gap-1 overflow-hidden">
              <span className="font-semibold text-gray-900 text-sm flex-shrink-0">Activate your membership</span>
              <span className="text-gray-500 text-sm truncate"> &nbsp;·&nbsp; Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostr...</span>
            </div>
            {/* Timestamp */}
            <span className="text-xs text-gray-600 font-medium flex-shrink-0 ml-4">10:41 PM</span>
          </div>

          {/* Empty state below */}
          <div className="flex-1" />
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
