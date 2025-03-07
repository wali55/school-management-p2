const TableList = ({columns, renderedRow, data}: {
    columns: {label: string; accessor: string; className?: string;}[],
    renderedRow: (item: any) => React.ReactNode,
    data: any; 
}) => {
    return (
        <table className="w-full">
            <thead>
                <tr className="text-sm font-semibold text-gray-500 text-left">
                    {columns.map((column) => (
                        <td key={column.accessor} className={column.className}>{column.label}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item: any) => renderedRow(item))}
            </tbody>
        </table>
    )
}

export default TableList;