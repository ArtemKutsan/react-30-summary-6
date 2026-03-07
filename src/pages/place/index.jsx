import { useParams, Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { initialCategories } from '../../data';
import TodoList from '../../components/TodoList';
import TodosContext from '../../context/todos-context';
import Meta from '../../components/Meta';

const PlacePage = () => {
  const { categoryId, placeId } = useParams();
  const { favorites, toggleFavorite } = useContext(TodosContext);

  const currentCategory = initialCategories.find((category) => category.id === categoryId);

  if (!currentCategory) return <Navigate to="/404" replace />;

  const currentPlace = currentCategory.places.find((place) => place.id === placeId);

  if (!currentPlace) {
    return (
      <div className="place-not-found">
        <h2>Локация не найдена</h2>
        <p>К сожалению, указанная точка маршрута отсутствует в базе.</p>
        <Link to={`/categories/${categoryId}`} className="button-primary place-not-found-button">
          Вернуться к списку
        </Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(placeId);

  return (
    <div className="place-page">
      <Meta title={currentPlace.name} />
      <header className="place-header">
        <Link to={`/categories/${categoryId}`} className="place-back-link">
          ← Вернуться к маршруту
        </Link>

        <button
          onClick={() => toggleFavorite(placeId)}
          className={`button-transparent favorite-toggle ${isFavorite ? 'active' : ''}`}
          aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </header>

      <article className="place-detail">
        <div className="place-hero">
          <div className="place-emoji-large">{currentPlace.image}</div>

          <h1 className="place-title">{currentPlace.name}</h1>

          <p className="place-description">{currentPlace.description}</p>
        </div>

        <div className="place-checklist">
          <h2 className="place-checklist-title">📝 Чек-лист</h2>

          <TodoList placeId={currentPlace.id} />
        </div>
      </article>

      <div className="place-footer">
        <button
          onClick={() => window.history.back()}
          className="button-transparent place-back-button"
        >
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default PlacePage;
