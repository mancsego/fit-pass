import IconSet from '@/components/common/IconSet'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <>
      <IconSet />
      <Outlet />
    </>
  )
}
