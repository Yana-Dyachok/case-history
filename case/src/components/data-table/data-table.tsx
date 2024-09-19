import Tags from '../ui/tags/tags';
import { PathDataType } from '../../types/types';
import styles from './data-table.module.css';

interface ITableProps<T extends PathDataType> {
  data: T[];
  title: string;
}

function DataTable<T extends PathDataType>({ data, title }: ITableProps<T>) {
  if (!data || data.length === 0) {
    return <div>Немає даних для відображення</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className={styles.tableBlock}>
      <Tags.H2>{title}</Tags.H2>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className={styles.th}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.date || rowIndex}>
              {headers.map((header) => (
                /* eslint-disable react/no-array-index-key */
                <td key={`${rowIndex}-${header}`} className={styles.td}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
