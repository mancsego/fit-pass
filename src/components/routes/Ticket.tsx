import portrait from '@/assets/portrait.png'
import Icon from '@/components/common/Icon'
import { Link } from 'react-router'

export default function Ticket() {
  return (
    <div className="flex flex-col mx-4">
      <div className="flex items-center gap-2 text-gray-500">
        <Link to="/fit-pass/">
          <Icon id="back" className="size-10" />
        </Link>
        <h1>Check-in Ticket</h1>
      </div>
      <div className="relative bg-gradient-to-br text-white rounded-2xl from-fitpass-green/80 to-fitpass-green/100 mt-25">
        <div className="flex justify-between py-5 border-b-2 border-dashed px-4 mt-20">
          <div>
            <div>
              Member
              <h2>István Ábrahám</h2>
            </div>
            <div className="mt-5">
              Date
              <h2>{new Date().toLocaleDateString()}</h2>
            </div>
          </div>
          <div>
            Status
            <div className="rounded-md bg-green-700 animate-pulse px-2 py-1">
              CHECKED-IN
            </div>
          </div>
        </div>
        <div className="pt-5 pb-20 px-4">
          Facility
          <h2>Bewegungszentrum Mainz</h2>
          Rheinalle 95, 55118 Mainz
        </div>
        <div className="absolute -top-20 left-[30%] bg-white rounded-full size-40 flex justify-center items-center">
          <img src={portrait} alt="portrait" className="rounded-full size-36" />
        </div>
        <div className="absolute -bottom-6 left-[45%] bg-white rounded-full size-12"></div>
      </div>
    </div>
  )
}
