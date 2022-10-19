import React from 'react'
import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
}

export const ButtonOverview = () => (
  <div className="grid gap-4">
    <Button>test</Button>
    <Button element="div" width="32px" height="64px" color="black">
      div
    </Button>
    <Button element="div" disabled color="black">
      disabled div
    </Button>

    <Button disabled element="a" color="red" className="rounded-2xl">
      disabled a
    </Button>
    <Button disabled element="a" color="#50d71e">
      disabled a
    </Button>
    <Button disabled>test</Button>
    <Button disabled>
      <p className="m-2">Ω</p>
      <span>и текст</span>
    </Button>
  </div>
)
