import { useState } from 'react';
import { todosData } from './todosData';
import TodosContext from '../../context/todos-context';

function TodosProvider({ children }) {
  const [todos, setTodos] = useState(todosData);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (placeId) => {
    setFavorites((prev) =>
      prev.includes(placeId) ? prev.filter((id) => id !== placeId) : [...prev, placeId]
    );
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos, favorites, toggleFavorite }}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProvider;
