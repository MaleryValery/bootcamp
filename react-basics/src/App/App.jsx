import { useEffect, useState } from 'react';
import './App.css';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import { getStorage, setStorage } from '../utils/local-storage';

function App() {
  const [todoList, setTodoList] = useState(getStorage() || []);

  useEffect(() => {
    setStorage(todoList);
  }, [todoList]);

  const handleAddTodo = (item) => {
    setTodoList([...todoList, item]);
  };

  const handleDeleteItem = (id) => {
    setTodoList((prev) => prev.filter((el) => el.id !== id));
  };

  const handleClearTodo = () => {
    setTodoList([]);
  };

  return (
    <>
      <h1>Create your ToDo</h1>
      <Form onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} onDeleteItem={handleDeleteItem} />
      {todoList.length ? (
        <button
          disabled={!todoList.length}
          className="clear-btn"
          onClick={handleClearTodo}
        >
          Clear todo
        </button>
      ) : (
        ''
      )}
    </>
  );
}

export default App;
