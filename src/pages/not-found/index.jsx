// src/components/not-found/index.jsx
// import styles from './not-found.module.css';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <>
      <h1>Страница {location.pathname} не найдена</h1>
      <p>Вы будете перенаправлены на Home page через 3 секунды</p>
      <Link to="/">Go Home page</Link>
    </>
  );
}

export default NotFoundPage;
