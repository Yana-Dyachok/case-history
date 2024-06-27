import LinkTemplate from '../link/link';
import styles from './all-links.module.css';

interface DocumentKindProps {
  kind: string;
  documentType: Record<string, string>;
}

function AllLinks({ kind, documentType }: DocumentKindProps) {
  return (
    <div className={styles.container}>
      {Object.keys(documentType).map((key) => (
        <LinkTemplate key={key} to={`/${kind}/${key}`}>
          {documentType[key]}
        </LinkTemplate>
      ))}
    </div>
  );
}

export default AllLinks;
