// src/components/home/index.jsx
// import styles from './home.module.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Добро пожаловать в наш город!</h1>
        <p>Откройте для себя удивительные места и достопримечательности</p>
        <Link to="/districts" className="cta-button">
          Исследовать районы →
        </Link>
      </div>
      <div className="features">
        <h2>Почему стоит посетить наш город?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🏛️</span>
            <h3>Богатая история</h3>
            <p>Город с вековой историей и уникальными памятниками архитектуры</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🌳</span>
            <h3>Живописные парки</h3>
            <p>Множество зеленых зон для отдыха и прогулок</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎭</span>
            <h3>Культурная жизнь</h3>
            <p>Театры, музеи и выставки на любой вкус</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
