import Icon from '@/components/common/Icon'

export default function MenuItem({
  title,
  icon,
}: {
  title: string
  icon: 'home' | 'sessions' | 'online' | 'progress' | 'login'
}) {
  return (
    <div className="flex flex-col justify-center items-center mx-1">
      <Icon id={icon} className="size-5" />
      <div className="h-10">{title}</div>
    </div>
  )
}
