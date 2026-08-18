import { useEffect, useRef, useState } from 'react'

/**
 * Fade-up-on-scroll wrapper, matching the approved mockups' .reveal/.reveal.in
 * behavior (IntersectionObserver, threshold 0.15, reveals once).
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useRef(null)
  // Prerendering (scripts/prerender.mjs) runs this on the server, where
  // `window` doesn't exist and no scroll will ever happen — start visible
  // there so crawlers and the pre-hydration first paint see real content
  // instead of the opacity:0 pre-scroll state. Real browsers still start
  // hidden and reveal via the IntersectionObserver below.
  const [visible, setVisible] = useState(() => typeof window === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
