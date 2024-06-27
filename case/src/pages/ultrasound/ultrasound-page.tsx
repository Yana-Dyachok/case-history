import Header from '../../components/header/header';
import AllLinks from '../../components/ui/all-links/all-links';
import {ultrasoundType} from './ultrasound';
import Footer from '../../components/footer/footer';

function UltrasoundPage() {
  const kindOf = 'diagnosis/ulrasound';
  return (
    <>
      <Header />
      <AllLinks kind={kindOf} documentType={ultrasoundType} />
      <Footer />
    </>
  );
}

export default  UltrasoundPage;