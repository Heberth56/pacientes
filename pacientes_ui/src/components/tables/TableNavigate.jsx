import {
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import ButtonNavigate from "./ButtonNavigate";
const TableNavigate = ({ table, count }) => {
  return (
    <div className="flex flex-row-reverse items-center justify-between bg-sky-950 py-2 px-8 text-white font-normal">
      <div className="flex items-center gap-2">
        <ButtonNavigate
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
        >
          <FaAngleDoubleLeft />
        </ButtonNavigate>

        <ButtonNavigate
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <FaAngleLeft />
        </ButtonNavigate>
        {table.getPageOptions().map((elem, index) => (
          <ButtonNavigate
            disabled={false}
            key={index}
            onClick={() => table.setPageIndex(elem)}
          >
            {elem + 1}
          </ButtonNavigate>
        ))}

        <ButtonNavigate
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <FaAngleRight />
        </ButtonNavigate>

        <ButtonNavigate
          disabled={!table.getCanNextPage()}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <FaAngleDoubleRight />
        </ButtonNavigate>
      </div>
      <div className="">
        Mostrando de {Number(table.getRowModel().rows[0]?.id) + 1 || 0} a &nbsp;
        {Number(
          table.getRowModel().rows[table.getRowModel().rows.length - 1]?.id
        ) + 1 || 0}
        &nbsp; de un total de {count}
      </div>
    </div>
  );
};

export default TableNavigate;
