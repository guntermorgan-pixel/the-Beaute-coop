import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-ink text-ivory hover:bg-olive-dark active:bg-olive-dark',
  olive: 'bg-olive text-ivory hover:bg-olive-dark active:bg-olive-dark',
  brass: 'bg-brass text-ink hover:bg-brass-light active:bg-brass-light',
  outline: 'bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-ivory',
  'outline-light':
    'bg-transparent text-ivory border-2 border-ivory hover:bg-ivory hover:text-ink',
}

const SIZES = {
  sm: 'px-4 py-3 text-xs sm:px-6 sm:text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base sm:text-lg',
}

/**
 * Shared CTA button. Renders a react-router <Link> for internal paths,
 * or an <a> for external URLs (e.g. Square booking pages). Sized for
 * thumb-friendly tap targets (min 44px height) per the mobile-first spec.
 */
export default function Button({
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-display uppercase tracking-wide min-h-11 transition-colors duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
