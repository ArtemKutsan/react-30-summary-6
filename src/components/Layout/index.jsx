// src/components/Layout/index.jsx
import { NavLink, Outlet } from 'react-router-dom';
import '../../App.css';

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <NavLink to="/" className="logo">
            <span>✈️</span> TRAVEL PLANNER
          </NavLink>
          <nav className="nav">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end
            >
              Обзор
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Маршруты
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 Travel Planner. Профессиональное планирование ваших поездок.</p>
        </div>
      </footer>
    </div>
  );
}
export default Layout;
