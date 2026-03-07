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
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Избранное
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              О приложении
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
