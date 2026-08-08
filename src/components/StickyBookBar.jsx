import { useLocation } from 'react-router-dom'
import Button from './Button.jsx'

/**
 * Persistent one-tap "Book Now" bar for mobile, so booking is always
 * reachable no matter how far someone has scrolled. Hidden on the Book Now
 * page itself (redundant there) and gives way to safe-area insets on iOS.
 */
export default function StickyBookBar() {
  const { pathname } = useLocation()
  if (pathname === '/book') return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brass/40 bg-ink px-4 pt-3 lg:hidden"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <Button to="/book" variant="brass" size="lg" className="w-full">
        Book Now
      </Button>
    </div>
  )
}
