import alarm from '@/assets/alarm.png'
import portrait from '@/assets/portrait.png'
import Icon from '@/components/common/Icon'
import Menu from '@/components/common/Menu'
import ReferenceCard from '@/components/common/ReferenceCard'
import FavoiteSection from '@/components/section/FavoriteSection'
import RecentSection from '@/components/section/RecentSection'

export default function Home() {
  return (
    <div className="flex flex-col items-stretch">
      <header className="mx-4 mb-5 relative">
        <div className="flex justify-end gap-4 mb-5 ">
          <img src={alarm} alt="alarm" className="size-10" />
          <img src={portrait} alt="portrait" className="rounded-full size-10" />
        </div>
        <input
          id="search"
          type="text"
          className="w-full px-12 py-3"
          placeholder="Search for studios on the map"
        />
        <Icon
          id="search"
          className="absolute size-6 top-18 left-4 text-fitpass-grey"
        />
      </header>
      <main>
        <RecentSection />
        <FavoiteSection />
        <ReferenceCard />
      </main>
      <Menu />
    </div>
  )
}
