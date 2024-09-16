import { useLocation } from 'react-router-dom';
import ImgSlider from '../../components/ui/each-img-slider/img-slider';
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

  return (
    <div>
      {documents.pdfArray.length > 0 ? (
        <PdfSlider documents={documents} />
      ) : (
        <ImgSlider documents={documents} />
      )}
    </div>
  );
}
export default ImgDocumentPage;
