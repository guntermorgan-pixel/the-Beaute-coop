import { useEffect, useRef } from 'react'
import Button from './Button.jsx'

/**
 * Renders a per-artist Square booking action. Each artist in
 * src/data/business.js supplies a `booking` object:
 *   - { type: 'link', url }        → button opens their Square page in a new tab
 *   - { type: 'embed', embedCode } → raw Square widget snippet is mounted inline
 *     (embedCode may include a <script> tag; those are re-created and executed,
 *     since dangerouslySetInnerHTML does not run injected scripts)
 *
 * This lets us flip an artist from a link to a full inline widget later
 * just by editing their data entry — no component changes needed.
 */
export default function BookingButton({
  booking,
  label = 'Book Now',
  ariaLabel,
  size = 'md',
  className = '',
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (booking?.type !== 'embed' || !booking.embedCode || !containerRef.current) return

    const container = containerRef.current
    container.innerHTML = booking.embedCode

    // Re-create <script> tags so the browser actually executes them.
    const scripts = Array.from(container.querySelectorAll('script'))
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script')
      Array.from(oldScript.attributes).forEach((attr) =>
        newScript.setAttribute(attr.name, attr.value),
      )
      newScript.textContent = oldScript.textContent
      oldScript.replaceWith(newScript)
    })

    return () => {
      container.innerHTML = ''
    }
  }, [booking])

  if (!booking) return null

  if (booking.type === 'embed' && booking.embedCode) {
    return <div ref={containerRef} className={`square-embed w-full ${className}`} />
  }

  return (
    <Button
      href={booking.url}
      variant="olive"
      size={size}
      className={`w-full sm:w-auto ${className}`}
      aria-label={ariaLabel}
    >
      {label}
    </Button>
  )
}
