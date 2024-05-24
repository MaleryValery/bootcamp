type Props = {
    title: string
    value: string
    className?: string
}

export default function CardProperty({ title, value, className }: Props) {
  return (
    <div className={`flex flex-col flex-[1_1_0] ${className}`} >
      <p className='text-gray-400'>{title}</p>
      <p  className='dark:text-stone-100 text-zinc-600'>{value}</p>
    </div>
  )
}
