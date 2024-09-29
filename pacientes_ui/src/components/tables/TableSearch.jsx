import { FaBrush } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
const TableSearch = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-row-reverse gap-3 items-center my-2">
      <button
        onClick={() => setFilter("")}
        className="flex items-center justify-center p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
        data-tooltip-id="my-search"
        data-tooltip-content="Limpiar"
      >
        <FaBrush size={22} />
      </button>

      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
      />
      <Tooltip id="my-search" place="bottom" />
    </div>
  );
};

export default TableSearch;
