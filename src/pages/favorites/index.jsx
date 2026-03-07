import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TodosContext from '../../context/todos-context';
import { initialCategories } from '../../data';
import Meta from '../../components/Meta';

const FavoritesPage = () => {
  const { favorites } = useContext(TodosContext);

  const favoritePlaces = initialCategories.flatMap((category) =>
    category.places
      .filter((place) => favorites.includes(place.id))
      .map((place) => ({
        ...place,
        categoryId: category.id,
      })),
  );

  return (
    <div className="favorites-page">
      <Meta title="Избранное" />
      <h1 className="favorites-title">Ваше избранное</h1>

      {favoritePlaces.length === 0 ? (
        <div className="favorites-empty">
          <p>В вашем списке избранного пока пусто.</p>
          <Link to="/categories" className="button button-primary">
            Найти интересные места
          </Link>
        </div>
      ) : (
        <div className="favorites-grid">
          {favoritePlaces.map((place) => (
            <Link
              key={place.id}
              to={`/categories/${place.categoryId}/places/${place.id}`}
              className="favorite-card"
            >
              <div className="favorite-icon">{place.image}</div>
              <div className="favorite-info">
                <h3 className="favorite-name">{place.name}</h3>
                <p className="favorite-desc">{place.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
