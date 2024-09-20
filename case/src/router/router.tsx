import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../components/base/layout/layout';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import AnamnesisMorbiPage from '../pages/anamnesis-morbi/anamnesis-morbi';
import AnamnesisVitePage from '../pages/anamnesis-vite/anamnesis-vite';
import AnalysisPage from '../pages/analysis/analysis-page';
import DiagnosisPage from '../pages/diagnosis/diagnosis-page';
import DoctorsPage from '../pages/doctors/doctors-page';
import TreatmentPage from '../pages/treatment/treatment-page';
import PdfDocumentPage from '../pages/pdf-document-page/pdf-document-page';
import UltrasoundPage from '../pages/ultrasound/ultrasound-page';
import InfectionsPage from '../pages/infections-page/infections-page';
import TableComponent from '../components/base/table-component/table-component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/anamnesis-morbi" element={<AnamnesisMorbiPage />} />
      <Route path="/anamnesis-vite" element={<AnamnesisVitePage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/analysis/*" element={<TableComponent />} />
      <Route path="/diagnosis" element={<DiagnosisPage />} />
      <Route path="/diagnosis/ultrasound/" element={<UltrasoundPage />} />
      <Route path="/diagnosis/*" element={<PdfDocumentPage />} />
      <Route path="/treatment" element={<TreatmentPage />} />
      <Route path="/treatment/*" element={<PdfDocumentPage />} />
      <Route path="/consultations" element={<DoctorsPage />} />
      <Route path="/consultations/*" element={<PdfDocumentPage />} />
      <Route path="/analysis/infections/" element={<InfectionsPage />} />
      <Route path="/analysis/infections/*" element={<PdfDocumentPage />} />
      <Route path="*" element={<NotFoundPage />} handle={{ hidePath: true }} />
    </Route>,
  ),
);

export default router;
