import Header from '../../components/header/header';
import AllLinks from '../../components/ui/all-links/all-links';
import Footer from '../../components/footer/footer';
import { anatysisType } from './analysis';

function AnalysisPage() {
    const kindOf = 'analisis';

    return (
        <>
            <Header />
            <AllLinks kind={kindOf} documentType={anatysisType} />
            <Footer />
        </>
    );
}

export default AnalysisPage;
