import { useLocation } from 'react-router-dom';
import { IDocuments } from '../../types/interface';
import doctorsArray from '../../utils/data-base/doctors-db';
import {
  diagnosisArray,
  ultrasoundArray,
  infectionsArray,
} from '../../utils/data-base/diagnosis-db';
import PdfBlock from '../../components/pdf-block/pdf-block';
import Loading from '../../components/ui/loading/loading';

function PdfDocumentPage() {
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

  return <PdfBlock documents={documents} />;
}
export default PdfDocumentPage;
