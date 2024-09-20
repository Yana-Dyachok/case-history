import { useLocation } from 'react-router-dom';
import DataTable from '../../data-table/data-table';
import { PathDataType } from '../../../types/types';
import analysisType from '../../../pages/analysis/analysis';
import urina from '../../../utils/data-base/urina-data';
import biochemistry from '../../../utils/data-base/biochemistry-data';
import general from '../../../utils/data-base/general-data';

function TableComponent() {
  const location = useLocation();
  const pathArray = location.pathname.split('/');
  const keyData = pathArray[pathArray.length - 1];
  const title = analysisType[keyData];

  const dataMap: Record<string, PathDataType[]> = {
    urina,
    biochemistry,
    general,
  };

  const data: PathDataType[] | undefined = dataMap[keyData];

  if (!data) {
    return <div>Дані для цього аналізу не знайдено.</div>;
  }

  return <DataTable data={data} title={title} />;
}

export default TableComponent;
