import { FaCheck, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
const Confirm = ({ text, children, ...props }) => {
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: text }} />
      <div className="flex justify-end mt-2 gap-2">
        <button
          {...props}
          className="flex gap-1 items-center px-3 py-1 
          bg-green-500 text-white rounded
          hover:bg-green-700 focus:outline-none"
        >
          <FaCheck className="text-sm" /> Aceptar
        </button>
        <button
          onClick={() => toast.dismiss()}
          className="flex gap-1 items-center px-3 py-1 
          bg-red-500 text-white rounded 
          hover:bg-red-700 focus:outline-none"
        >
          <FaTimes /> Cancelar
        </button>
      </div>
    </div>
  );
};

export default Confirm;
