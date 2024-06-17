import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import AnamnesisMorbiPage from '../pages/anamnesis-morbi/anamnesis-morbi';
import AnamnesisVitePage from '../pages/anamnesis-vite/anamnesis-vite';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/anamnesis-morbi" element={<AnamnesisMorbiPage />} />
      <Route path="/anamnesis-vite" element={<AnamnesisVitePage />} />
    </Routes>
  );
}

export default Router;
