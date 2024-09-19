import AllLinks from '../../components/ui/all-links/all-links';
import diagnosisType from './diagnosis';

function DiagnosisPage() {
  const kindOf = 'diagnosis';

  return <AllLinks kind={kindOf} documentType={diagnosisType} />;
}

export default DiagnosisPage;
