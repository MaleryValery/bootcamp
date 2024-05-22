import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todoList, onDeleteItem, onUpdateItem }) {
  return (
    <ul className="list">
      {todoList.map((item, i) => {
        return (
          <TodoItem
            key={i}
            todo={item}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
