import { Link } from 'react-router-dom'

const VARIANTS = {
  solid: 'border-transparent bg-brass text-ink hover:bg-brass-light',
  outline: 'border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/6',
  dark: 'border-transparent bg-ink text-ivory hover:bg-brass hover:text-ink',
}

const SIZES = {
  sm: 'px-6 py-3 text-[11px]',
  md: 'px-8 py-4 text-xs',
  lg: 'px-5 py-[17px] text-xs',
}

/**
 * Shared CTA button matching the approved mockups' .btn system exactly.
 * Renders a react-router <Link> for internal paths, or an <a> for external
 * URLs (Square booking pages, mailto:, sms:, tel:).
 */
export default function Button({
  to,
  href,
  onClick,
  variant = 'solid',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = `inline-block border font-body font-medium uppercase tracking-[0.16em] transition-all duration-300 ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  if (href) {
    const isNav = /^(mailto:|sms:|tel:)/.test(href)
    return (
      <a
        href={href}
        target={isNav ? undefined : '_blank'}
        rel={isNav ? undefined : 'noopener noreferrer'}
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
