import AllLinks from '../../components/ui/all-links/all-links';
import { analysisType } from './analysis';

function AnalysisPage() {
  const kindOf = 'analysis';

  return <AllLinks kind={kindOf} documentType={analysisType} />;
}

export default AnalysisPage;
