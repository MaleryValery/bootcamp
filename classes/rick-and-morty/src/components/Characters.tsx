import { useAppSelector } from '../store/hooks'
import Character from './Character';

export default function Characters() {

    const {characters} = useAppSelector(store => store.characters);
    
  return (
    <ul className='py-[4.5rem] grid grid-cols-1 gap-2 lg:grid-cols-2 2xl:grid-cols-3 max-w-[1920px] justify-center justify-items-center'>
        {characters.map(item => <Character key={item.id} character={item}/>)}
    </ul>
  )
}
