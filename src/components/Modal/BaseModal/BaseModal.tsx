import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'
import { BaseModalProps } from './BaseModal.types'
import { Button } from '../../Button'
import { Modal } from '../Modal'

export const BaseModalWrapper = ({
  onClose,
  children,
  className = '',
  ...modalProps
}: BaseModalProps) => (
  <Modal onClose={onClose} {...modalProps}>
    <div
      className={clsx(
        className,
        'relative scrollbar max-h-screen bg-[white] box-border overflow-y-auto rounded-xl'
      )}
    >
      {children}
      <Button
        className="absolute top-6 right-6 opacity-40 hover:opacity-100 focus:opacity-100 bg-[transparent]"
        onClick={onClose}
      >
        X
      </Button>
    </div>
  </Modal>
)

export const BaseModal = {
  Wrapper: BaseModalWrapper,

  Header: ({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) => (
    <header
      className={`${className} grid grid-cols-1 gap-3 p-12 `}
      {...props}
    />
  ),

  Title: ({
    className = '',
    children,
    ...props
  }: HTMLAttributes<HTMLDivElement>) => (
    <h2
      className={`
      ${className}  text-black text-paragraph-xl font-bold  m-0`}
      {...props}
    >
      {children}
    </h2>
  ),

  SubTitle: ({
    className = '',
    children,
    ...props
  }: HTMLAttributes<HTMLDivElement>) => (
    <p className={`${className} font-normal  m-0`} {...props}>
      {children}
    </p>
  ),

  Content: ({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`${className} px-12 pb-12  text-black`} {...props} />
  ),
}
