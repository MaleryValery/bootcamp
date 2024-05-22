import React from 'react'

type Props = {
    title: string
    value: string
}

export default function CardProperty({title, value}: Props) {
  return (
    <div>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}
