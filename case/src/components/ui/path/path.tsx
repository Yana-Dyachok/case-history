import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import LinkTemplate from '../link/link';
import pathData from '../../../utils/const/path-data';
import styles from './path.module.css';

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
    const keyData = Object.keys(pathData).find((key) => key === segment);
    const translatedValue = keyData ? pathData[keyData] : segment;
    pathElements.push({ value: translatedValue, link: cumulativePath });
  });

  return pathElements.length > 1 ? (
    <ul className={styles.pathContainer}>
      {pathElements.map((elem: PathElement) => {
        return (
          <li className={styles.pathElement} key={elem.link}>
            <LinkTemplate to={elem.link}>
              {elem.link === '/' ? '' : '/'}
              {elem.value}
            </LinkTemplate>
          </li>
        );
      })}
    </ul>
  ) : null;
}

export default Path;
