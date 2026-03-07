import { useParams, Link, Navigate } from 'react-router-dom';
import { initialCategories } from '../../data';
import TodoList from '../../components/TodoList';

const PlacePage = () => {
  const { categoryId, placeId } = useParams();

  const currentCategory = initialCategories.find((category) => category.id === categoryId);

  if (!currentCategory) return <Navigate to="/404" replace />;

  const currentPlace = currentCategory.places.find((place) => place.id === placeId);

  if (!currentPlace) {
    return (
      <div className="place-not-found">
        <h2>Локация не найдена</h2>
        <p>К сожалению, указанная точка маршрута отсутствует в базе.</p>
        <Link to={`/categories/${categoryId}`} className="button place-not-found-button">
          Вернуться к списку
        </Link>
      </div>
    );
  }

  return (
    <div className="place-page">
      <header className="place-header">
        <Link to={`/categories/${categoryId}`} className="place-back-link">
          ← Вернуться к маршруту
        </Link>
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
        <button onClick={() => window.history.back()} className="button place-back-button">
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default PlacePage;
