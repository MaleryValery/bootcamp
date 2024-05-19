import { useEffect, useReducer } from 'react';
import './App.css';
import { buildDeck, checkWinner, getPointsSum, shuffleDeck } from './utils';
import Cards from './Cards';
import { ACTIONS, WINNERS } from './consts';

const initState = {
  deck: shuffleDeck(buildDeck()),
  playerHand: [],
  houseHand: [],
  winner: '',
  isGame: true,
  isStop: false,
};

const reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.startGame:
      return { ...initState };
    case ACTIONS.stopGame:
      return { ...state, isGame: false, winner: action.payload };
    case ACTIONS.playerHand: {
      const newDeck = [...state.deck];
      const newHand = [...state.playerHand, newDeck.pop()];
      return { ...state, playerHand: newHand, deck: newDeck };
    }
    case ACTIONS.houseHand: {
      const newDeck = [...state.deck];
      const newHand = newDeck.slice(-2);
      return {
        ...state,
        houseHand: newHand,
        deck: newDeck.slice(0, newDeck.length - 2),
        isGame: false,
        isStop: true,
      };
    }

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reduce, initState);

  useEffect(() => {
    if (!state.playerHand.length) return;
    if (getPointsSum(state.playerHand) === 21) {
      dispatch({ type: ACTIONS.stopGame, payload: WINNERS.player });
    } else if (getPointsSum(state.playerHand) > 21) {
      console.log('🚀 ~ useEffect ~  WINNERS.house:', WINNERS.house);
      dispatch({ type: ACTIONS.stopGame, payload: WINNERS.house });
    }
  }, [state.playerHand]);

  useEffect(() => {
    if (!state.isStop) return;
    const winner = checkWinner(state.playerHand, state.houseHand);
    dispatch({ type: ACTIONS.stopGame, payload: winner });
  }, [state.isStop, state.playerHand, state.houseHand]);

  const handlerDeal = () => {
    if (!state.isGame) return;
    dispatch({ type: ACTIONS.playerHand });
  };

  const handlerStop = () => {
    dispatch({ type: ACTIONS.houseHand });
  };

  const restartGame = () => {
    dispatch({ type: ACTIONS.startGame });
  };

  return (
    <>
      <h1>
        {state.winner.length > 0
          ? `${state.winner} wins 💸`
          : 'Silly Blackjack'}
      </h1>
      <div className="btns__wrapper">
        <button disabled={!state.isGame} onClick={handlerDeal}>
          DEAL
        </button>
        <button
          disabled={!state.playerHand.length || !state.isGame}
          onClick={handlerStop}
        >
          STOP
        </button>
      </div>

      <div className="hands__cards">
        <Cards
          hand="player"
          cards={state.playerHand}
          gameStatus={state.isGame}
        />
        <button onClick={restartGame}>🔄</button>
        <Cards hand="house" cards={state.houseHand} gameStatus={state.isGame} />
      </div>
    </>
  );
}

export default App;
