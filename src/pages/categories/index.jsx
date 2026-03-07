import { Link } from 'react-router-dom';
import { initialCategories } from '../../data';
import Meta from '../../components/Meta';

function CategoriesPage() {
  return (
    <div className="categories">
      <Meta title="Маршруты" />
      <header className="categories-header">
        <h1>Категории маршрутов</h1>
        <p className="categories-subtitle">
          Выберите тип локаций для вашего будущего путешествия
        </p>
      </header>

      <div className="categories-grid">
        {initialCategories.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.id} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <h2>{category.name}</h2>
            <p className="category-desc">
              Исследуйте лучшие {category.name.toLowerCase()} для включения в свой план.
            </p>
            <div className="card-footer">
              <span className="places-count">{category.places.length} локаций</span>
              <span className="category-select">Выбрать →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
