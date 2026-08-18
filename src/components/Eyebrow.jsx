const TONES = {
  brass: 'text-brass-light before:bg-brass-light',
  olive: 'text-olive before:bg-olive-light',
}

/**
 * Small tracked label with a leading rule, used above every section
 * headline across the site ("Arlington, VA", "Our Story", "Currently
 * Seeking", etc).
 */
export default function Eyebrow({ as: Tag = 'div', tone = 'brass', center = false, className = '', children }) {
  return (
    <Tag
      className={`label flex items-center gap-3.5 text-[11.5px] tracking-[0.28em] before:h-px before:w-[34px] before:content-[''] ${TONES[tone]} ${center ? 'justify-center' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
