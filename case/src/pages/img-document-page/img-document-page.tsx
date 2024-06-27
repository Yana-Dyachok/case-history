import { useLocation } from 'react-router-dom';
import Header from '../../components/header/header';
import ImgSlider from '../../components/ui/each-img-slider/img-slider';
import { IDocuments } from '../../types/interface';
import doctorsArray from '../../mockAPI/doctors-db';
import { diagnosisArray, ultrasoundArray } from '../../mockAPI/diagnosis-db';
import PdfSlider from '../../components/ui/pdf-slider/pdf-slider';
import Footer from '../../components/footer/footer';
import Loading from '../../components/ui/loading/loading';

function ImgDocumentPage() {
  const location = useLocation();
  const segments = location.pathname.split('/');
  const doctorId = segments[segments.length - 1];
  const documents: IDocuments | undefined = [
    ...diagnosisArray,
    ...doctorsArray,
    ...ultrasoundArray,
  ].find((el) => el.id === doctorId);
  if (!documents) {
    return (
      <>
        <Header />
        <Loading />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {documents.pdfArray.length > 0 ? (
        <PdfSlider documents={documents} />
      ) : (
        <ImgSlider documents={documents} />
      )}
      <Footer />
    </>
  );
}
export default ImgDocumentPage;
