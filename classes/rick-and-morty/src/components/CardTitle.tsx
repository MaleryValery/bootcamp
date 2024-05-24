type Props = {
    name: string
    species: string
    status: string
}


export default function CardTitle({name, species, status}: Props) {
  return (
    <div className='flex flex-col flex-[1_1_0] dark:text-white text-gray-800 justify-start'>
      <h2 className='text-[27px] leading-[1.1] font-bold'>{name}</h2>
      <div>
        <span className={`w-[9px] h-[9px] inline-flex rounded-full mr-2 ${status === "Alive" ? "bg-green-500" : "bg-red-500"}`}></span>
        <span className='font-[16px] leading-normal dark:text-white text-gray-800'>{status} - {species}</span>
      </div>
    </div>
  )
}
