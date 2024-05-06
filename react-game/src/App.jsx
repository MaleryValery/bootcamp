import { useEffect, useState } from 'react';
import './App.css';
import { buildDeck, checkWinner, getPointsSum, shuffleDeck } from './utils';
import Cards from './Cards';

function App() {
  const [deck, setDeck] = useState(shuffleDeck(buildDeck()));
  const [playerHand, setPlayerHand] = useState([]);
  const [houseHand, setHouseHand] = useState([]);
  const [winner, setWinner] = useState('');
  const [isGame, setIsGame] = useState(true);

  useEffect(() => {
    if (!playerHand.length) return;
    if (getPointsSum(playerHand) === 21) {
      setWinner('player');
      setIsGame(false);
    } else if (getPointsSum(playerHand) > 21) {
      setWinner('house');
      setIsGame(false);
    }
  }, [playerHand]);

  useEffect(() => {
    if (isGame) return;
    setWinner(checkWinner(playerHand, houseHand));
  }, [isGame, playerHand, houseHand]);

  const handlerDeal = () => {
    if (!isGame) return;
    const newDeck = [...deck];
    setPlayerHand((prev) => [...prev, newDeck.pop()]);
    setDeck(newDeck);
  };

  const handlerStop = () => {
    const newDeck = [...deck];
    setHouseHand(newDeck.slice(-2));
    setDeck(newDeck.slice(0, newDeck.length - 2));
    setIsGame(false);
  };

  const restartGame = () => {
    setDeck(shuffleDeck(buildDeck()));
    setIsGame(true);
    setPlayerHand([]);
    setHouseHand([]);
    setWinner('');
  };

  return (
    <>
      <h1>{winner.length > 0 ? `${winner} wins 💸` : 'Silly Blackjack'}</h1>
      <div className="btns__wrapper">
        <button disabled={!isGame} onClick={handlerDeal}>
          DEAL
        </button>
        <button disabled={!playerHand.length || !isGame} onClick={handlerStop}>
          STOP
        </button>
      </div>

      <div className="hands__cards">
        <Cards hand="player" cards={playerHand} gameStatus={isGame} />
        <button onClick={restartGame}>🔄</button>
        <Cards hand="house" cards={houseHand} gameStatus={isGame} />
      </div>
    </>
  );
}

export default App;
