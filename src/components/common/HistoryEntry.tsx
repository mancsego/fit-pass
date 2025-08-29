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
    <div className="shrink-0 mr-6 my-4 w-72 relative">
      <img src={image} alt={name} className="w-full h-40 rounded-3xl" />
      <div className="font-bold my-2">{name}</div>
      <Icon
        id="favorite"
        className="absolute top-3 right-3 size-4 stroke-white text-fitpass-green"
      />
      <div className="flex gap-1">
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
