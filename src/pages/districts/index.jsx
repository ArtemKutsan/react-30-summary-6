// src/components/districts/index.jsx
// import styles from './districts.module.css';
import { Link } from 'react-router-dom';
import { districtsData } from '../../data';

function DistrictsPage() {
  return (
    <div className="districts">
      <h1>Районы города</h1>
      <p className="subtitle">Выберите район, чтобы узнать о его достопримечательностях</p>
      <div className="districts-grid">
        {districtsData.map((district) => (
          <Link to={`/districts/${district.id}`} key={district.id} className="district-card">
            <h2>{district.name}</h2>
            <p>{district.description}</p>
            <div className="card-footer">
              <span className="places-count">{district.places.length} мест</span>
              <span className="view-link">Подробнее →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default DistrictsPage;
