import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { ButtonProps } from './Button.types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      element = 'button',
      color = 'default',
      width = '100%',
      height = '32px',
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const getBGColor = (color: string) => {
      if (color === 'default') {
        return 'bg-primary text-primary'
      }
      if (color === 'black') {
        return 'bg-second text-second'
      }
      if (color === 'blue') {
        return 'bg-third text-third'
      }

      return `bg-[${color}]`
    }

    return React.createElement(
      element,
      {
        ...props,
        className: clsx(
          'inline-flex items-center justify-center p-4',
          'uppercase',
          getBGColor(color),
          `w-[${width}]`,
          `h-[${height}]`,
          disabled ? 'pointer-events-none opacity-50' : 'cursor-pointer',
          className
        ),
        ref,
      },
      children
    )
  }
)
