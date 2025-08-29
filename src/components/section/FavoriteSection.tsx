import bgz from '@/assets/bgz.jpg'
import fc from '@/assets/fit_cet.png'
import ff from '@/assets/fit_first.png'
import FavoriteEntry from '@/components/common/FavoriteEntry'

const favorites = [
  { name: 'Bewegungsz...', image: fc, open: true },
  { name: 'Fitness First...', image: ff, open: false },
  { name: 'Fitness-Cent...', image: bgz, open: false },
]

export default function FavoiteSection() {
  return (
    <section className="mx-4">
      <h2>Favoite location</h2>
      <div className="flex">
        {favorites.map((f) => (
          <FavoriteEntry {...f} key={f.name} />
        ))}
      </div>
    </section>
  )
}
