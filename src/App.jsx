import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home';
import DistrictsPage from './pages/districts';
import DistrictPage from './pages/district';
import PlacePage from './pages/place';
import NotFoundPage from './pages/not-found';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="districts" element={<DistrictsPage />} />
        <Route path="districts/:districtId" element={<DistrictPage />} />
        <Route path="districts/:districtId/places/:placeId" element={<PlacePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
