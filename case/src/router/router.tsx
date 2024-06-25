import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import AnamnesisMorbiPage from '../pages/anamnesis-morbi/anamnesis-morbi';
import AnamnesisVitePage from '../pages/anamnesis-vite/anamnesis-vite';
import AnalysisPage from '../pages/analysis/analysis-page';
import DiagnosisPage from '../pages/diagnosis/diagnosis-page';
import DoctorsPage from '../pages/doctors/doctors-page';
import TreatmentPage from '../pages/treatment/treatment-page';
import GeneralBlood from '../components/general-blood/general-blood';
import ImgDocumentPage from '../pages/img-document-page/img-document-page';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/anamnesis-morbi" element={<AnamnesisMorbiPage />} />
      <Route path="/anamnesis-vite" element={<AnamnesisVitePage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/diagnosis" element={<DiagnosisPage />} />
      <Route path="/treatment" element={<TreatmentPage/>} />
      <Route path="/consultations" element={<DoctorsPage/>} />
      <Route path="/analysis/*" element={<GeneralBlood />} />
      <Route path="/consultations/*" element={<ImgDocumentPage/>} />
      <Route path="/diagnosis/*" element={<ImgDocumentPage/>} />
    </Routes>
  );
}

export default Router;
