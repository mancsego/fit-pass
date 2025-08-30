import logo from '@/assets/logo.png'
import Scanner from '@/components/common/Scanner'

export default function Login() {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-4 bg-fitpass-green text-white">
      <img src={logo} alt="logo" className="size-64" />
      <Scanner />
      <Scanner />
    </div>
  )
}
