import { useNavigate } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
const ButtonView = ({ text, to }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(to);
  };
  return (
    <>
      <button
        className="flex w-1/5 text-left text-lg  font-bold items-center bg-sky-700 text-white"
        onClick={handleNavigate}
      >
        <FaCaretRight /> {text}
      </button>
      <hr />
    </>
  );
};

export default ButtonView;
