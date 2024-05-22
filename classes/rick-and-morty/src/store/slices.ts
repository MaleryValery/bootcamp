import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from './store'
import { Character } from '../types/characters.types'
import { RootState } from './store'

// Define a type for the slice state
interface CharactersState {
  characters: Character []
  isDark: boolean
}

// Define the initial state using that type
const initialState: CharactersState = {
  characters: [],
  isDark: false
}

export const characterSlice = createSlice({
  name: 'character',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCharactersData: (state: CharactersState, action: PayloadAction<Character[]>) => {
        state.characters = action.payload
    },
    setTheme: (state: CharactersState) => {
        state.isDark = !state.isDark;
    }

  },
})

export const { setCharactersData, setTheme } = characterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const characters = (state: RootState) => state.characters

export default characterSlice.reducer