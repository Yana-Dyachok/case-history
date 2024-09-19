import AllLinks from '../../components/all-links/all-links';
import { ultrasoundType } from './ultrasound';

function UltrasoundPage() {
  const kindOf = 'diagnosis/ultrasound';
  return <AllLinks kind={kindOf} documentType={ultrasoundType} />;
}

export default UltrasoundPage;
