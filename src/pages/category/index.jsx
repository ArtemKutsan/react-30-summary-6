// src/components/category/index.jsx
// import styles from './category.module.css';
import { useParams, Link, Navigate } from 'react-router-dom';
import { initialCategories } from '../../data';

function CategoryPage() {
  const { categoryId } = useParams();
  const category = initialCategories.find((category) => category.id === categoryId);

  return (
    <div className="category-page">
      <div className="category-header">
        <Link to="/categories" className="back-link">
          ← Назад к районам
        </Link>
        <h1>{category.name}</h1>
        <p className="category-description">{category.description}</p>
      </div>
      <div className="places-section">
        <h2>Достопримечательности района</h2>
        <div className="places-grid">
          {category.places.map((place) => (
            <Link
              to={`/categories/${categoryId}/places/${place.id}`}
              key={place.id}
              className="place-card"
            >
              <div className="place-emoji">{place.image}</div>
              <div className="place-info">
                <h3>{place.name}</h3>
                <p>{place.description.substring(0, 60)}...</p>
                <span className="view-details">Подробнее →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CategoryPage;
