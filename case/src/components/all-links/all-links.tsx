import LinkTemplate from '../ui/link/link';
import Tags from '../ui/tags/tags';
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
          <Tags.H2>{documentType[key]}</Tags.H2>
        </LinkTemplate>
      ))}
    </div>
  );
}

export default AllLinks;
