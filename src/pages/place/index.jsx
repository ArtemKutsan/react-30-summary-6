// src/components/place/index.jsx
// import styles from './place.module.css';
import { useParams, Link, Navigate } from 'react-router-dom';
import { initialCategories } from '../../data';
import TodoList from '../../components/TodoList';

const PlacePage = () => {
  const { categoryId, placeId } = useParams();
  // console.log(categoryId, placeId);

  // Ищем категорию
  const currentCategory = initialCategories.find((category) => category.id === categoryId);

  // Если категория не найдена - 404
  if (!currentCategory) {
    return <Navigate to="/404" replace />;
  }

  // Ищем место в категории
  const currentPlace = currentCategory.places.find((place) => place.id === placeId);

  // Если место не найдено - показываем сообщение
  if (!currentPlace) {
    return (
      <div className="place-not-found">
        <h2>Место не найдено</h2>
        <p>Извините, достопримечательность с таким названием не существует в этом районе.</p>
        <Link to={`/categories/${categoryId}`} className="back-button">
          Вернуться к району
        </Link>
      </div>
    );
  }

  return (
    <div className="place-page">
      <div className="place-header">
        <Link to={`/categories/${categoryId}`} className="back-link">
          ← Назад к району
        </Link>
      </div>
      <div className="place-detail">
        <div className="place-emoji-large">{currentPlace.image}</div>
        <h1>{currentPlace.name}</h1>
        <p className="place-full-description">{currentPlace.description}</p>
        <div className="place-meta">
          <div className="meta-item">
            <span className="meta-label">Район:</span>
            <Link to={`/categories/${categoryId}`} className="meta-value">
              {currentCategory.name}
            </Link>
          </div>
        </div>

        {/* Список дел */}
        <TodoList placeId={currentPlace.id} />

        {/* Кнопка "Назад" */}
        <button onClick={() => window.history.back()} className="back-button">
          ← Назад
        </button>
      </div>
    </div>
  );
};
export default PlacePage;
