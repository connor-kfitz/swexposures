import "./ProductTable.scss";

type ProductTableProps = {
  table: any
}

export default function ProductTable({table}: ProductTableProps) {

  const productTable = objectToNestedArray(table);

  function objectToNestedArray(object: any) {
    let nestedArray = [];
    for (const row in object) {
      nestedArray.push(object[row]);
    }
    return nestedArray;
  }

  return (
    <table className="product-table">
      <tbody className="product-table__table-body">
        {productTable.map((row: string[], index: number) => (
          <tr className={`product-table__table-row` + (index % 2 == 0 ? " gray-background" : "") + (index === 0 ? " bold" : "")} key={index}>
            {row.map((cell: string, index: number) => (
              <td className={`product-table__table-item ` + (index === 0 ? " bold" : "center")} key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
