import { useLocation } from 'react-router-dom';
import Header from '../../components/header/header';
import ImgSlider from '../../components/ui/each-img-slider/img-slider';
import { IDocumentsImg } from '../../types/interface';
import doctorsArray from '../../mockAPI/doctors-db';
import { diagnosisArray, ultrasoundArray } from '../../mockAPI/diagnosis-db';
import Footer from '../../components/footer/footer';
import Loading from '../../components/ui/loading/loading';

function ImgDocumentPage() {
  const location = useLocation();
  const segments = location.pathname.split('/');
  const doctorId = segments[segments.length - 1];
  const documentsImg: IDocumentsImg | undefined = [
    ...diagnosisArray,
    ...doctorsArray,
    ...ultrasoundArray,
  ].find((el) => el.id === doctorId);
  if (!documentsImg) {
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
      <ImgSlider documentsImg={documentsImg} />
      <Footer />
    </>
  );
}
export default ImgDocumentPage;
