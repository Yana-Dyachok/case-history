import { useLocation } from 'react-router-dom';
import DataTable from '../data-table/data-table';
import analysisType from '../../pages/analysis/analysis';

function TableComponent() {
  const location = useLocation();
  const pathArray = location.pathname.split('/');
  const keyData = Object.keys(analysisType).find(
    (key) => key === pathArray[pathArray.length - 1],
  );
  const title = analysisType[keyData];
  const dataTable = [
    {
      date: '1',
      name: 'Sample Name 1',
      key: 'Value 1',
    },
    {
      date: '2',
      name: 'Sample Name 2',
      key: 'Value 2',
    },
  ];

  return <DataTable data={dataTable} title={title} />;
}

export default TableComponent;
