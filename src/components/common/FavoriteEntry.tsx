export default function FavoriteEntry({
  name,
  image,
  open,
}: {
  name: string
  image: string
  open: boolean
}) {
  return (
    <div className="flex flex-col items-center mr-4 my-4">
      <img
        src={image}
        alt={name}
        className="size-20 rounded-full object-cover"
      />
      <div>{name}</div>
      {open && <div className="text-green-600">Open</div>}
    </div>
  )
}
