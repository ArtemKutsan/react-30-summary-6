import { Link } from 'react-router-dom';
import { useContext } from 'react';
import TodosContext from '../../context/todos-context';
import { initialCategories } from '../../data';

function HomePage() {
  const { todos } = useContext(TodosContext);

  const totalPlaces = initialCategories.reduce((acc, category) => acc + category.places.length, 0);

  const allTodos = Object.values(todos).flat();
  const totalTodos = allTodos.length;
  const completedTodos = allTodos.filter((todo) => todo.completed).length;

  const progress = totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);

  return (
    <div className="home">
      <div className="hero">
        <h1>Спланируйте ваше идеальное путешествие</h1>
        <p>
          Управляйте маршрутами, составляйте списки дел и следите за прогрессом подготовки к поездке
          в одном удобном сервисе.
        </p>
        <Link to="/categories" className="button">
          Перейти к маршрутам →
        </Link>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{totalPlaces}</span>
          <span className="stat-label">Локаций в базе</span>
        </div>
        <div className="stat-card">
          <div className="progress-circle-container">
            <svg className="circular-progress" style={{ '--progress': progress }}>
              <circle className="bg" />
              <circle className="fg" />
              <text x="50%" y="50%" className="progress-text">
                {progress}%
              </text>
            </svg>
            <span className="stat-label">Готовность поездки</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-value">
            {completedTodos} / {totalTodos}
          </span>
          <span className="stat-label">Задач выполнено</span>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">🗺️</span>
          <h3>Умные маршруты</h3>
          <p>
            Все интересные места сгруппированы по категориям для оптимального планирования времени.
          </p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📋</span>
          <h3>Чек-листы</h3>
          <p>
            Создавайте индивидуальные списки дел для каждой точки вашего маршрута, чтобы ничего не
            забыть.
          </p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📊</span>
          <h3>Контроль прогресса</h3>
          <p>Наглядная визуализация степени готовности вашего путешествия на каждом этапе.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
