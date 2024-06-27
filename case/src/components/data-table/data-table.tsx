type DataRow = {
  id: string;
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
    <div>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {headers.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
