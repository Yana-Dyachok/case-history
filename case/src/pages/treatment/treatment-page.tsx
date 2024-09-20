import AllLinks from '../../components/all-links/all-links';
import treatmentType from './treatment';

function TreatmentPage() {
  const kindOf = 'treatment';
  return <AllLinks kind={kindOf} documentType={treatmentType} />;
}

export default TreatmentPage;
