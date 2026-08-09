import { useEffect, useRef, useState } from 'react'

/**
 * Fade-up-on-scroll wrapper, matching the approved mockups' .reveal/.reveal.in
 * behavior (IntersectionObserver, threshold 0.15, reveals once).
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

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
