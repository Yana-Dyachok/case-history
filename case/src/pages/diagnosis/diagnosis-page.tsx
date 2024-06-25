import Header from '../../components/header/header';
import AllLinks from '../../components/ui/all-links/all-links';
import { diagnosisType } from './diagnosis';
import Footer from '../../components/footer/footer';

function DiagnosisPage() {
  const kindOf = 'diagnosis';

  return (
    <>
      <Header />
      <AllLinks kind={kindOf} documentType={diagnosisType} />
      <Footer />
    </>
  );
}

export default DiagnosisPage;
