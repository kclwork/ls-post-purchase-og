import { useState } from 'react'
import Background from './components/Background'
import Cart from './screens/Cart'
import CheckoutPersonal from './screens/CheckoutPersonal'
import CheckoutPayment from './screens/CheckoutPayment'
import Confirmation from './screens/Confirmation'
import GmailInbox from './screens/GmailInbox'
import GmailMessage from './screens/GmailMessage'
import Activation from './screens/Activation'
import ActivationSuccess from './screens/ActivationSuccess'

// Screens that use the right-anchored drawer
const DRAWER_WIDTHS = {
  'cart': 744,
  'checkout-personal': 1141,
  'checkout-payment': 1141,
}

export default function App() {
  const [screen, setScreen] = useState('cart')

  const isDrawerScreen = screen in DRAWER_WIDTHS
  const drawerWidth = DRAWER_WIDTHS[screen] ?? 744

  return (
    <div style={{ minWidth: 1440, minHeight: '100vh', overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      {isDrawerScreen && (
        <>
          {/* Decorative background page */}
          <Background />

          {/* Dark overlay */}
          <div
            className="fixed inset-0 z-10 pointer-events-none"
            style={{ background: 'rgba(0,0,0,0.4)' }}
          />

          {/* Drawer panel */}
          <div
            className="fixed top-0 right-0 h-screen bg-white z-20 shadow-2xl"
            style={{
              width: drawerWidth,
              transition: 'width 300ms ease-in-out',
              overflow: 'hidden',
            }}
          >
            {/* key forces remount + slide-in animation on screen change */}
            <div key={screen} className="slide-in h-full">
              {screen === 'cart' && (
                <Cart navigate={setScreen} />
              )}
              {screen === 'checkout-personal' && (
                <CheckoutPersonal navigate={setScreen} />
              )}
              {screen === 'checkout-payment' && (
                <CheckoutPayment navigate={setScreen} />
              )}
            </div>
          </div>
        </>
      )}

      {/* Full-page screens — rendered outside the drawer layer */}
      {screen === 'confirmation' && <Confirmation navigate={setScreen} />}
      {screen === 'gmail-inbox' && <GmailInbox navigate={setScreen} />}
      {screen === 'gmail-message' && <GmailMessage navigate={setScreen} />}
      {screen === 'activation' && <Activation navigate={setScreen} />}
      {screen === 'activation-success' && <ActivationSuccess navigate={setScreen} />}
    </div>
  )
}
