import { useEffect, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import TodosContext from '../../context/todos-context';

function TodoList({ placeId }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { text: '' },
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [placeId]);

  if (loading) return <div className="todo-loading">Подготовка данных...</div>;

  const currentTodos = todos[placeId] ?? [];

  const addTodo = ({ text }) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    setTodos((prev) => ({
      ...prev,
      [placeId]: [...(prev[placeId] || []), newTodo],
    }));

    reset();
  };

  const toggleTodo = (id) => {
    setTodos((prev) => ({
      ...prev,
      [placeId]: prev[placeId].map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => ({
      ...prev,
      [placeId]: prev[placeId].filter((todo) => todo.id !== id),
    }));
  };

  const completedCount = currentTodos.filter((t) => t.completed).length;
  const totalCount = currentTodos.length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="todo-container">
      <div className="todo-progress">
        <div className="todo-progress-header">
          <span>Готовность локации</span>
          <span>{progress}%</span>
        </div>

        <div className="todo-progress-bar">
          <div className="todo-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <form onSubmit={handleSubmit(addTodo)} className="todo-form">
        <input
          type="text"
          placeholder="Добавить пункт плана..."
          {...register('text', { required: true })}
          className="todo-input"
        />
        <button type="submit" className="button-primary todo-button">
          Добавить
        </button>
      </form>

      {errors.text && <p className="todo-error">Введите текст задачи</p>}

      {currentTodos.length === 0 ? (
        <p className="todo-empty">План пуст. Добавьте задачи для этой точки маршрута.</p>
      ) : (
        <ul className="todo-list">
          {currentTodos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
              />

              <span className={`todo-text ${todo.completed ? 'completed' : 'active'}`}>
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="button-transparent todo-delete"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
