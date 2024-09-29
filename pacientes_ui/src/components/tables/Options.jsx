import Links from "../ui/Links";
import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
const Options = ({ to, ...props }) => {
  return (
    <ul className="flex row-auto gap-2">
      <Links
        link={to}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Editar"
      >
        <FaUserEdit className="text-green-500 text-xl" />
      </Links>
      <button
        className="mt-1 p-3 hover:bg-gray-300 hover:bg-opacity-30"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Eliminar"
        {...props}
      >
        <FaTrashAlt className="text-red-500 text-lg" />
      </button>
      <Tooltip id="my-tooltip" place="bottom" />
    </ul>
  );
};

export default Options;
