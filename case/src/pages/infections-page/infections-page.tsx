import Header from '../../components/header/header';
import AllLinks from '../../components/ui/all-links/all-links';
import { infectionsType } from './infections';
import Footer from '../../components/footer/footer';

function InfectionsPage() {
  const kindOf = 'analysis/infections';
  return (
    <>
      <Header />
      <AllLinks kind={kindOf} documentType={infectionsType} />
      <Footer />
    </>
  );
}

export default InfectionsPage;
