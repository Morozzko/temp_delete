import React, { useState } from 'react'
import { BaseModal } from './BaseModal'
import { Button } from '../../Button'

export default {
  title: 'Atoms/Modal',
}

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <div className="h-[900px] bg-second" />
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      <BaseModal.Wrapper
        open={isOpen}
        onClose={() => setIsOpen(false)}
        ariaLabelledby="пример"
      >
        <BaseModal.Header>
          <BaseModal.Title>
            Lorem ipsum dolor sit amet consectetu
          </BaseModal.Title>
          <BaseModal.SubTitle>
            Lorem ipsum dolor sit amet consectetu
          </BaseModal.SubTitle>
        </BaseModal.Header>
        <BaseModal.Content>
          <div className="flex justify-between mt-10">
            <Button className="mr-4" color="black">
              text
            </Button>
          </div>
        </BaseModal.Content>
      </BaseModal.Wrapper>
    </>
  )
}
