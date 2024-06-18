import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { anatysisType, AnalysisTypeKeys } from './analysis';
import LinkTemplate from '../../components/ui/link/link';

import styles from './analysis.module.css';

function AnalysisPage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                {Object.keys(anatysisType).map((key) => (
                    <LinkTemplate key={key} to={`/analysis/${key}`}>
                        {anatysisType[key as AnalysisTypeKeys]}
                    </LinkTemplate>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default AnalysisPage;
