// src/components/place/index.jsx
// import styles from './place.module.css';
import { useParams, Link, Navigate } from 'react-router-dom';
import { districtsData } from '../../data';

const PlacePage = () => {
  const { districtId, placeId } = useParams();
  // Ищем район
  const district = districtsData.find((d) => d.id === districtId);
  // Если район не найден - 404
  if (!district) {
    return <Navigate to="/404" replace />;
  }
  // Ищем место в районе
  const place = district.places.find((p) => p.id === placeId);
  // Если место не найдено - показываем сообщение
  if (!place) {
    return (
      <div className="place-not-found">
        <h2>Место не найдено</h2>
        <p>Извините, достопримечательность с таким названием не существует в этом районе.</p>
        <Link to={`/districts/${districtId}`} className="back-button">
          Вернуться к району
        </Link>
      </div>
    );
  }

  return (
    <div className="place-page">
      <div className="place-header">
        <Link to={`/districts/${districtId}`} className="back-link">
          ← Назад к району
        </Link>
      </div>
      <div className="place-detail">
        <div className="place-emoji-large">{place.image}</div>
        <h1>{place.name}</h1>
        <p className="place-full-description">{place.description}</p>
        <div className="place-meta">
          <div className="meta-item">
            <span className="meta-label">Район:</span>
            <Link to={`/districts/${districtId}`} className="meta-value">
              {district.name}
            </Link>
          </div>
        </div>
        {/* Кнопка "Назад" */}
        <button onClick={() => window.history.back()} className="back-button">
          ← Назад
        </button>
      </div>
    </div>
  );
};
export default PlacePage;
