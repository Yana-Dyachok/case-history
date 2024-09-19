import AllLinks from '../../components/all-links/all-links';
import infectionsType from './infections';

function InfectionsPage() {
  const kindOf = 'analysis/infections';
  return <AllLinks kind={kindOf} documentType={infectionsType} />;
}

export default InfectionsPage;
