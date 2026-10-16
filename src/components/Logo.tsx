type Props = {
  className?: string
  tone?: 'dark' | 'light'
}

/** Marca própria: patinha laranja + "cafuné" em DM Serif Display. */
export function Logo({ className = '', tone = 'dark' }: Props) {
  const ink = tone === 'dark' ? '#1a3d1a' : '#effdf0'
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-[1.55em] w-[1.55em] shrink-0" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="#e86a10" />
        <g fill="#effdf0">
          <ellipse cx="24" cy="31" rx="9" ry="7" />
          <ellipse cx="13.5" cy="23.5" rx="3.2" ry="4.4" transform="rotate(-20 13.5 23.5)" />
          <ellipse cx="19.5" cy="15.5" rx="3.2" ry="4.6" transform="rotate(-8 19.5 15.5)" />
          <ellipse cx="28.5" cy="15.5" rx="3.2" ry="4.6" transform="rotate(8 28.5 15.5)" />
          <ellipse cx="34.5" cy="23.5" rx="3.2" ry="4.4" transform="rotate(20 34.5 23.5)" />
        </g>
      </svg>
      <span className="font-serif-display leading-none tracking-tight" style={{ color: ink }}>
        cafuné
      </span>
    </span>
  )
}
