import { HTMLAttributes } from 'react'
import { OverlayProps } from '../Overlay/Overlay.types'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  ariaLabelledby?: string
  onClose?: () => void
  open: boolean
  overlayProps?: OverlayProps
}
