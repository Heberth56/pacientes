import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import TableNavigate from "./TableNavigate";
import TableSkeleton from "../skeletons/TableSkeleton";
import TableSearch from "./TableSearch";
import TableDropdown from "./TableDropdown";

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};

const TableContent = ({ data, columns, isLoading, col = 3, children }) => {
  const [filter, setFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filter,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
  });
  return (
    <div className="overflow-x-auto mt-4">
      {children}
      <table className="table-auto w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <td colSpan={col} className="px-4 py-2">
              <div className="flex justify-between items-center">
                <TableDropdown table={table} />
                <TableSearch filter={filter} setFilter={setFilter} />
              </div>
            </td>
          </tr>
          {table.getHeaderGroups().map((elem) => (
            <tr key={elem.id} className="bg-sky-950 p-5 text-white">
              {elem.headers.map((val) => (
                <th key={val.id} className="py-2 px-4 text-left uppercase">
                  {val.isPlaceholder
                    ? null
                    : flexRender(val.column.columnDef.header, val.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {isLoading ? (
            <TableSkeleton columns={col} />
          ) : (
            <>
              {table.getRowModel().rows.map((elem) => (
                <tr key={elem.id} className="text-gray-600 hover:bg-gray-100">
                  {elem.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="py-2 px-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={col}>
              {data?.length ? (
                <TableNavigate table={table} count={data?.length || 0} />
              ) : null}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TableContent;
