import { useLocation } from 'react-router-dom';
import { IDocuments } from '../../types/interface';
import doctorsArray from '../../mockAPI/doctors-db';
import {
  diagnosisArray,
  ultrasoundArray,
  infectionsArray,
} from '../../mockAPI/diagnosis-db';
import PdfSlider from '../../components/ui/pdf-slider/pdf-slider';
import Loading from '../../components/ui/loading/loading';

function ImgDocumentPage() {
  const location = useLocation();
  const segments = location.pathname.split('/');
  const id = segments[segments.length - 1];
  const documents: IDocuments | undefined = [
    ...diagnosisArray,
    ...doctorsArray,
    ...ultrasoundArray,
    ...infectionsArray,
  ].find((el) => el.id === id);
  if (!documents) {
    return <Loading />;
  }

  return <PdfSlider documents={documents} />;
}
export default ImgDocumentPage;
