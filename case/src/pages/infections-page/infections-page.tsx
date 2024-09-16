import AllLinks from '../../components/ui/all-links/all-links';
import { infectionsType } from './infections';

function InfectionsPage() {
  const kindOf = 'analysis/infections';
  return <AllLinks kind={kindOf} documentType={infectionsType} />;
}

export default InfectionsPage;
