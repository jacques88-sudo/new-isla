type IslaMarkProps = {
  size?: number
  className?: string
}

/**
 * Isla logo: a volcanic island over two waves, with the sun behind it.
 * Used for the header brand mark and for the stamp on the postcard list.
 */
function IslaMark({ size = 44, className }: IslaMarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Isla Adventures"
    >
      <circle cx="40" cy="24" r="9" fill="currentColor" opacity="0.35" />
      <path
        d="M6 40 L24 14 L33 27 L38 21 L58 40 Z"
        fill="currentColor"
      />
      <path
        d="M4 46c5 0 5 4 10 4s5-4 10-4 5 4 10 4 5-4 10-4 5 4 10 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M4 55c5 0 5 4 10 4s5-4 10-4 5 4 10 4 5-4 10-4 5 4 10 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  )
}

export default IslaMark
