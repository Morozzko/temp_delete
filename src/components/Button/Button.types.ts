import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  height?: string
  color?: 'default' | 'black' | 'blue' | string
  element?: 'a' | 'div' | 'button'
  className?: string
}
