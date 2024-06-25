import Header from '../../components/header/header';
import AllLinks from '../../components/ui/all-links/all-links';
import { doctorsType } from './doctors';
import Footer from '../../components/footer/footer';

function DoctorsPage() {
  const kindOf = 'consultations';
  return (
    <>
      <Header />
      <AllLinks kind={kindOf} documentType={doctorsType} />
      <Footer />
    </>
  );
}

export default DoctorsPage;
