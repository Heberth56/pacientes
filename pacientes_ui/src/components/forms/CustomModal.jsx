import { FaTimes } from "react-icons/fa";
import Thead from "../tables/Thead";
const CustomModal = ({ modal, setModal, title, header_table, children }) => {
  const handleModal = () => {
    setModal(!modal);
  };

  if (!modal) return;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg p-4 w-1/2 relative overflow-x-auto">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-xl font-bold uppercase">{title}</h2>
          <button onClick={handleModal} type="button">
            <FaTimes />
          </button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-200">
            <Thead data={header_table} />
            <tbody>{children}</tbody>
          </table>
        </div>
        <div className="mt-4 flex float-end">
          <button
            onClick={handleModal}
            className="flex gap-2 items-center px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
            type="button"
          >
            <FaTimes /> Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
