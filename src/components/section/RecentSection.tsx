import bgz from '@/assets/bgz.jpg'
import fmm from '@/assets/fmm.jpg'
import laks from '@/assets/laks.jpg'
import HistoryEntry from '@/components/common/HistoryEntry'

const recents = [
  {
    name: 'Bewegungszentrum Mainz',
    image: bgz,
    open: true,
    tags: ['Cardio training', 'Test'],
  },
  {
    name: 'Freibad Maaraue Mainz-Kostheim',
    image: fmm,
    open: true,
    tags: ['Swimming', '', '', ''],
  },
  {
    name: 'LAKS - Stand UP Paddling & More Mainz',
    image: laks,
    open: false,
    tags: ['Water sports', '', '', '', '', '', ''],
  },
]

export default function RecentSection() {
  return (
    <section className="ml-4">
      <h2>Last Visited</h2>
      <div className="flex overflow-scroll">
        {recents.map((f) => (
          <HistoryEntry {...f} key={f.name} />
        ))}
      </div>
    </section>
  )
}
