/**
 * Reserves a properly-sized image slot. Pass `src` once real photography is
 * ready — until then it renders a labeled placeholder so layout/design can
 * be reviewed without final assets, and no rebuild is needed to swap photos.
 */
export default function ImageSlot({
  src,
  alt,
  label,
  aspect = 'aspect-[4/5]',
  className = '',
  imgClassName = '',
}) {
  if (src) {
    return (
      <div className={`overflow-hidden ${aspect} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`img-slot flex items-center justify-center ${aspect} ${className}`}
    >
      <span className="px-4 text-center font-body text-xs uppercase tracking-widest text-ink/50">
        {label ?? 'Photo coming soon'}
      </span>
    </div>
  )
}
