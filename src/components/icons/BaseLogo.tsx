/** The Base network mark: a square in Base Blue. */
export function BaseLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#0000ff" />
    </svg>
  )
}
