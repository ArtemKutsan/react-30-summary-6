import { Link } from 'react-router-dom';
import { initialCategories } from '../../data';

function CategoriesPage() {
  return (
    <div className="categories">
      <header style={{ marginBottom: '2rem' }}>
        <h1>Категории маршрутов</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Выберите тип локаций для вашего будущего путешествия
        </p>
      </header>

      <div className="categories-grid">
        {initialCategories.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.id} className="category-card">
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{category.icon}</div>
            <h2>{category.name}</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0.25rem 0 1rem', fontSize: '0.875rem' }}>
              Исследуйте лучшие {category.name.toLowerCase()} для включения в свой план.
            </p>
            <div className="card-footer">
              <span className="places-count">{category.places.length} локаций</span>
              <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.8125rem' }}>
                Выбрать →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
