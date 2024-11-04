import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
const ButtonTable = ({ to }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(to);
  };
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 rounded-md bg-sky-950 mb-4 text-white mt-2 md:text-base text-sm"
      onClick={handleNavigate}
    >
      <FaPlus /> Nuevo registro
    </button>
  );
};

export default ButtonTable;
