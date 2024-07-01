import Header from '../../components/header/header';
import AllLinks from '../../components/ui/all-links/all-links';
import Footer from '../../components/footer/footer';
import { analysisType } from './analysis';

function AnalysisPage() {
  const kindOf = 'analysis';

  return (
    <>
      <Header />
      <AllLinks kind={kindOf} documentType={analysisType} />
      <Footer />
    </>
  );
}

export default AnalysisPage;
