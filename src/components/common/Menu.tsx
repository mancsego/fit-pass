import login from '@/assets/login.png'
import MenuItem from '@/components/common/MenuItem'
import { Link } from 'react-router'

export default function Menu() {
  return (
    <footer className="mx-4 mt-2 flex justify-between items-start text-fitpass-grey">
      <MenuItem title="Home" icon="home" />
      <MenuItem title="Sessions" icon="sessions" />
      <Link to="/fit-pass/ticket" className="size-12">
        <img src={login} alt="login" />
      </Link>
      <MenuItem title="Online" icon="online" />
      <MenuItem title="Progress" icon="progress" />
    </footer>
  )
}
