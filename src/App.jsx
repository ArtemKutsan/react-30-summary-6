import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home';
import CategoriesPage from './pages/categories';
import CategoryPage from './pages/category';
import PlacePage from './pages/place';
import FavoritesPage from './pages/favorites';
import AboutPage from './pages/about';
import NotFoundPage from './pages/not-found';
import TodosProvider from './components/TodosProvider';

function App() {
  return (
    <TodosProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:categoryId" element={<CategoryPage />} />
          <Route path="categories/:categoryId/places/:placeId" element={<PlacePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </TodosProvider>
  );
}

export default App;
