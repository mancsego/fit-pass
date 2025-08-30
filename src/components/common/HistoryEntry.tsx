import Icon from '@/components/common/Icon'

export default function HistoryEntry({
  name,
  image,
  open,
  tags,
}: {
  name: string
  image: string
  open: boolean
  tags?: string[]
}) {
  const tagCount = tags?.length ?? 0
  const moreText = tagCount > 1 ? `+ ${tagCount - 1} more` : ''
  const tagElement = tagCount ? `${tags![0]} ${moreText}` : null
  return (
    <div className="shrink-0 mr-6 pb-3 w-70 relative">
      <img src={image} alt={name} className="w-full h-34 rounded-2xl" />
      <div className="font-bold text-sm my-2">{name}</div>
      <Icon
        id="favorite"
        className="absolute top-3 right-3 size-4 stroke-white text-fitpass-green"
      />
      <div className="flex gap-1 text-xs">
        {open && (
          <div>
            <span className="text-green-600">Open</span> &#8729;
          </div>
        )}
        <div className="text-fitpass-grey">{tagElement}</div>
      </div>
    </div>
  )
}
