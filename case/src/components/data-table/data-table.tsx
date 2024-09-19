import Tags from '../ui/tags/tags';
import styles from './data-table.module.css';

type DataRow = {
  date: string;
  name: string;
  [key: string]: string;
};

interface ITableProps<T extends DataRow> {
  data: T[];
  title: string;
}

function DataTable<T extends DataRow>({ data, title }: ITableProps<T>) {
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
          {data.map((row) => (
            <tr key={row.date}>
              {headers.map((header) => (
                <td key={header} className={styles.td}>
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
