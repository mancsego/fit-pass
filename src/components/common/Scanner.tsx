import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const id = 'reader'
let rendered = false

export default function Scanner() {
  const navigate = useNavigate()

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      id,
      { fps: 1, qrbox: 250, disableFlip: false },
      false,
    )

    setTimeout(() => {
      if (rendered) return

      scanner.render(() => {
        navigate('/fit-pass/ticket')
      }, undefined)
      rendered = true
    }, 0)

    return () => {
      scanner.clear().then(() => {
        rendered = false
      })
    }
  }, [])

  return (
    <div id={id} className="w-72 h-[300px] px-2 [*>button]:text-amber-200" />
  )
}
