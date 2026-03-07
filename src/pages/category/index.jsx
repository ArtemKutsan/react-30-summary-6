import { useParams, Link, Navigate } from 'react-router-dom';
import { initialCategories } from '../../data';

function CategoryPage() {
  const { categoryId } = useParams();
  const category = initialCategories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="category-page">
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/categories" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'block', marginBottom: '0.75rem' }}>
          ← Все категории
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '2.5rem' }}>{category.icon}</span>
          <h1>{category.name}</h1>
        </div>
      </div>

      <div className="places-section">
        <h2 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Доступные локации</h2>
        <div className="places-grid">
          {category.places.map((place) => (
            <Link
              to={`/categories/${categoryId}/places/${place.id}`}
              key={place.id}
              className="place-card"
            >
              <div className="place-emoji">{place.image}</div>
              <div className="place-info">
                <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{place.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', lineHeight: '1.4' }}>
                  {place.description.substring(0, 70)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
