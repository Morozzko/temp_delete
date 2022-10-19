import clsx from 'clsx'
import React, { FC, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'
import { ModalProps } from './Modal.types'
import { Overlay } from '../Overlay'

export const Modal: FC<ModalProps> = ({
  open,
  children,
  ariaLabelledby,
  overlayProps,
  onClose = () => {},
  ...htmlDivProps
}) => {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose()
      }
    },
    [open]
  )

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', onKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onKeyDown])

  const modal = (
    <>
      <Overlay onClick={onClose} {...overlayProps} />
      <FocusLock returnFocus>
        <div
          className={clsx(
            'fixed outline-none -translate-y-[50%] top-[50%] z-[3]',
            '-translate-x-[50%] left-[50%]'
          )}
          aria-modal
          aria-labelledby={ariaLabelledby}
          tabIndex={-1}
          role="dialog"
          {...htmlDivProps}
        >
          {children}
        </div>
      </FocusLock>
    </>
  )

  return open ? createPortal(modal, document.body) : null
}
