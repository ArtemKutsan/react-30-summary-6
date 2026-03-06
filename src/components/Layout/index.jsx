// src/components/Layout/index.jsx
// import styles from './Layout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1 className="logo">🏙️ Мой город</h1>
          <nav className="nav">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end
            >
              Главная
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Районы
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
          <p>© 2026 Мой город. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
export default Layout;
