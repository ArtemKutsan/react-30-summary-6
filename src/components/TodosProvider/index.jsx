import { useState } from 'react';
import { todosData } from './todosData';
import TodosContext from '../../context/todos-context';

function TodosProvider({ children }) {
  const [todos, setTodos] = useState(todosData);

  return <TodosContext.Provider value={{ todos, setTodos }}>{children}</TodosContext.Provider>;
}

export default TodosProvider;
