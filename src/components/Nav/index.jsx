// src/components/Nav/index.jsx
import styles from './Nav.module.css';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Blog', path: '/blog' },
];

function Nav() {
  return (
    <nav>
      <ul>
        {navLinks.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
