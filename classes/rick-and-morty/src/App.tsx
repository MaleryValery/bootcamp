import { useEffect } from "react"
import Characters from "./components/Characters"
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setCharactersData, setTheme } from "./store/slices";
import { FaLightbulb } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import { Welcome } from "./types/characters.types";

const fetchData = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data: Welcome = await response.json();
    return data.results; 
  } catch (error) {
      console.log("We have an error: ",error)
  }
}

function App() {
  const {isDark} = useAppSelector(state => state.characters);
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchData().then((data) => dispatch(setCharactersData(data!)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    if (isDark) {
      document.querySelector('#root')!.classList.remove('dark');
    } else {
      document.querySelector('#root')!.classList.add('dark');
    }
  }, [isDark]);

  return (
    <>
      <div className="bg-[url('./assets/bg.svg')] bg-repeat bg-contain">
        <div className="bg-stone-100 dark:bg-[#272B33] dark:bg-opacity-90 bg-opacity-95 w-full h-full">
          <header className="px-7 py-4">
            <nav className="flex  justify-between">
              <div className="bg-[url('./assets/logo.svg')] w-[50px] h-[50px] bg-no-repeat bg-contain"></div>
              <button onClick={() => dispatch(setTheme())}>{isDark ? <FaRegLightbulb size={30}/> : <FaLightbulb color='#fbbf24' size={30} /> }</button>
            </nav>
          </header>
          <h1 className="text-center text-[3.2rem] sm:text-[3.75rem] font-black p-2 opacity-100 dark:text-stone-100">The Rick and Morty API</h1>
        </div>
      </div>
      <div className="bg-[#272B33] px-7">
          <Characters />
      </div>
    </>
  )
}

export default App
