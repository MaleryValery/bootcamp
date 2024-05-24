import { getPointsSum } from './utils';

/* eslint-disable react/prop-types */
function Cards({ cards, hand }) {
  return (
    <div className="hand">
      <h3>
        {hand} {getPointsSum(cards)}
      </h3>

      <ul className="card__list">
        {cards.map((card) => (
          <li className="card" key={card.value + card.type}>
            <span>{card.type}</span>
            <span>{card.value}</span>
            <span>{card.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
