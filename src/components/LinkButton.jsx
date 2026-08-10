const TONES = {
  default: 'border-olive text-olive bg-olive/7 hover:bg-olive hover:text-ivory',
  light: 'border-olive-light text-olive-light bg-olive-light/14 hover:bg-olive-light hover:text-ink',
}

/**
 * Pill-style outline link button for Instagram/Website links — distinct from
 * the neutral service chips and the brass "Book" buttons. Use tone="light"
 * on dark backgrounds (artist page hero) for contrast.
 */
export default function LinkButton({ href, tone = 'default', icon, children, className = '', ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.25 border px-5.5 py-3.25 font-body text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${TONES[tone]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </a>
  )
}
