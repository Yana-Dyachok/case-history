import { useLocation } from 'react-router-dom';
import DataTable from '../data-table/data-table';
import analysisType from '../../pages/analysis/analysis';
import urinaTable from '../../utils/data-base/urina-data';

function TableComponent() {
  const location = useLocation();
  const pathArray = location.pathname.split('/');
  const keyData = Object.keys(analysisType).find(
    (key) => key === pathArray[pathArray.length - 1],
  );
  const title = analysisType[keyData];
  return <DataTable data={urinaTable} title={title} />;
}

export default TableComponent;
