import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import LinkTemplate from '../link/link';
import PathData from '../../../utils/const/path-data';
import styles from './path-comp.module.css';

interface PathElement {
  value: string | JSX.Element;
  link: string;
}

function Path() {
  const location = useLocation();
  const pathArray = location.pathname.split('/').filter(Boolean);
  const pathElements: PathElement[] = [];
  pathElements.push({ value: <FontAwesomeIcon icon={faHome} />, link: '/' });
  let cumulativePath = '';
  pathArray.forEach((segment) => {
    cumulativePath += `/${segment}`;
    const keyData = Object.keys(PathData).find((key) => key === segment);
    const translatedValue = keyData ? PathData[keyData] : segment;
    pathElements.push({ value: translatedValue, link: cumulativePath });
  });

  return pathElements.length > 2 ? (
    <ul className={styles.pathContainer}>
      {pathElements.map((elem: PathElement, index) => {
        const getSlash = index !== pathElements.length - 1 ? ' / ' : '';
        return (
          <p className={styles.pathElement} key={elem.link}>
            <LinkTemplate to={elem.link}>{elem.value}</LinkTemplate>
            {getSlash}
          </p>
        );
      })}
    </ul>
  ) : null;
}

export default Path;
