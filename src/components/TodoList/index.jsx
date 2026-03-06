// src/components/TodoList/index.jsx
import { useState, useEffect, useContext } from 'react';
import TodosContext from '../../context/todos-context';

function TodoList({ placeId }) {
  const { todos, setTodos } = useContext(TodosContext);

  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');

  // Имитация загрузки
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Загрузка...</p>;

  // Тудушки для текущего места
  const currentTodos = todos[placeId] ?? [];

  // Добавление туду
  const addTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      completed: false,
    };

    const updatedTodos = [...currentTodos, newTodo];

    setTodos((prev) => ({
      ...prev,
      [placeId]: updatedTodos,
    }));

    setInputValue('');
  };

  // Переключение completed
  const toggleTodo = (id) => {
    const updatedTodos = currentTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );

    setTodos((prev) => ({
      ...prev,
      [placeId]: updatedTodos,
    }));
  };

  // Удаление туду
  const deleteTodo = (id) => {
    const updatedTodos = currentTodos.filter((todo) => todo.id !== id);

    setTodos((prev) => ({
      ...prev,
      [placeId]: updatedTodos,
    }));
  };

  // Прогресс выполнения
  const completedCount = currentTodos.filter((todo) => todo.completed).length;
  const totalCount = currentTodos.length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <>
      <span>Запланировано:</span>

      {/* Прогресс-бар */}
      <div style={{ margin: '1rem 0' }}>
        <div
          style={{
            height: '0.5rem',
            width: '100%',
            background: '#ddd',
            borderRadius: '0.5rem',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: '#4caf50',
              transition: '0.3s',
            }}
          />
        </div>
        <small>
          {completedCount} из {totalCount} выполнено ({progress}%)
        </small>
      </div>

      {/* Инпут + кнопка */}
      <div style={{ margin: '1rem 0', display: 'flex', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Новая задача..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={addTodo}>Добавить</button>
      </div>

      {/* Список */}
      <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {currentTodos.map((todo) => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>

            {/* Кнопка удаления */}
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                marginLeft: 'auto',
                background: 'red',
                height: '2rem',
                width: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default TodoList;
