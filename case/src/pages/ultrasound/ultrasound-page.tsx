import AllLinks from '../../components/ui/all-links/all-links';
import { ultrasoundType } from './ultrasound';

function UltrasoundPage() {
  const kindOf = 'diagnosis/ulrasound';
  return <AllLinks kind={kindOf} documentType={ultrasoundType} />;
}

export default UltrasoundPage;
