import AllLinks from '../../components/all-links/all-links';
import analysisType from './analysis';

function AnalysisPage() {
  const kindOf = 'analysis';

  return <AllLinks kind={kindOf} documentType={analysisType} />;
}

export default AnalysisPage;
