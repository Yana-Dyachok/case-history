interface ITableProps<T extends object> {
  data: T[];
  title: string;
}

const DataTable = <T extends object>({ data, title }: ITableProps<T>) => {
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
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{(row as any)[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
