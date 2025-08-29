type IconId =
  | 'home'
  | 'sessions'
  | 'online'
  | 'progress'
  | 'login'
  | 'favorite'
  | 'search'
  | 'back'

export default function Icon({
  id,
  className = '',
}: {
  id: IconId
  className?: string
}) {
  return (
    <svg className={className} aria-hidden="true">
      <use xlinkHref={`#${id}`} />
    </svg>
  )
}

export type { IconId }
