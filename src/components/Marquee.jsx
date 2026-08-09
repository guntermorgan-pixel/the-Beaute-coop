/**
 * Infinite horizontal ticker used on Home, listing every service category.
 * Repeats the label set 3x so the seam is never visible mid-scroll.
 */
export default function Marquee({ items }) {
  const set = items.map((label) => (
    <span
      key={label}
      className="font-serif-italic inline-flex items-center gap-10 text-lg text-ivory/55 after:ml-10 after:text-brass after:content-['·']"
    >
      {label}
    </span>
  ))

  return (
    <div className="overflow-hidden whitespace-nowrap border-t border-hairline bg-ink py-[18px] text-brass-light">
      <div className="marquee-track gap-0">
        {set}
        {set}
        {set}
      </div>
    </div>
  )
}
