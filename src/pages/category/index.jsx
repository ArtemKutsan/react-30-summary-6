import { useParams, Link, Navigate } from 'react-router-dom';
import { initialCategories } from '../../data';
import Meta from '../../components/Meta';

function CategoryPage() {
  const { categoryId } = useParams();
  const category = initialCategories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="category-page">
      <Meta title={category.name} />
      <div className="category-header-box">
        <Link to="/categories" className="category-back-link">
          ← Все категории
        </Link>
        <div className="category-title-row">
          <span className="category-main-icon">{category.icon}</span>
          <h1>{category.name}</h1>
        </div>
      </div>

      <div className="places-section">
        <h2 className="places-section-title">Доступные локации</h2>
        <div className="places-grid">
          {category.places.map((place) => (
            <Link
              to={`/categories/${categoryId}/places/${place.id}`}
              key={place.id}
              className="place-card"
            >
              <div className="place-emoji">{place.image}</div>
              <div className="place-info">
                <h3 className="place-card-name">{place.name}</h3>
                <p className="place-card-desc">{place.description.substring(0, 70)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
