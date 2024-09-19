import AllLinks from '../../components/all-links/all-links';
import doctorsType from './doctors';

function DoctorsPage() {
  const kindOf = 'consultations';
  return <AllLinks kind={kindOf} documentType={doctorsType} />;
}

export default DoctorsPage;
