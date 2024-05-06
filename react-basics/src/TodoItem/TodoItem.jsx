import validUrl from 'valid-url';
import './TodoItem.css';
import { imgPlaceholder } from '../consts';

function TodoItem({ todo, onDeleteItem }) {
  const imgURl = validUrl.isUri(todo.img);
  return (
    <li>
      <label className="todo__item" htmlFor="todo">
        <img className="item__image" src={imgURl ? todo.img : imgPlaceholder} />
        {/* <input type="checkbox" name="todo" checked={todo.done} onChange={()=> !todo}/> */}
        <p>{todo.title}</p>
        <p>{todo.date}</p>
        <button
          onClick={() => onDeleteItem(todo.id)}
          className="item__delete-btn"
        >
          ❌
        </button>
      </label>
    </li>
  );
}

export default TodoItem;
