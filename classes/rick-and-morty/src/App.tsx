import { useEffect } from "react"
import Characters from "./components/Characters"
import { useAppDispatch } from "./store/hooks";
import { setCharactersData } from "./store/slices";
// import { Character } from "./types/characters.types";
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
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchData().then((data) => dispatch(setCharactersData(data!)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
      <h1>The Rick and Morty API</h1>
      <div className="bg-[#272B33] px-7">
          <Characters />
      </div>
    </>
  )
}

export default App
