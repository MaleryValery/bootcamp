import React from 'react'

type Props = {
    title: string
    value: string
    className?: string
}

export default function CardProperty({ title, value, className }: Props) {
  return (
    <div className={`flex flex-col flex-[1_1_0] ${className}`} >
      <p className='text-stone-400'>{title}</p>
      <p  className='text-stone-100'>{value}</p>
    </div>
  )
}
