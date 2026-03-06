// src/components/categories/index.jsx
// import styles from './categories.module.css';
import { Link } from 'react-router-dom';
import { initialCategories } from '../../data';

function CategoriesPage() {
  return (
    <div className="categories">
      <h1>Районы города</h1>
      <p className="subtitle">Выберите район, чтобы узнать о его достопримечательностях</p>
      <div className="categories-grid">
        {initialCategories.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.id} className="category-card">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <div className="card-footer">
              <span className="places-count">{category.places.length} мест</span>
              <span className="view-link">Подробнее →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CategoriesPage;
