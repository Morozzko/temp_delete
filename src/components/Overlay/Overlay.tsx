import React, { useEffect } from 'react'
import { OverlayProps } from './Overlay.types'

export const Overlay = (props: OverlayProps) => {
  // useEffect Останавливает прокрутку страницы
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'

    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-[2] bg-shark/80"
      {...props}
    />
  )
}
