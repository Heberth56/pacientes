import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({ title, children, icon }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <li>
      <div className="flex items-center pl-3 mt-1 gap-1 hover:bg-gray-300 hover:bg-opacity-30">
        {icon}
        <button
          className="w-full py-3 flex items-center justify-between pr-3"
          onClick={handleMenuClick}
        >
          <span>{title}</span>
          <FaCaretDown
            className={`transition-transform duration-500 ${
              openMenu ? "rotate-180 text-red-500" : "rotate-0 text-green-500"
            }`}
          />
        </button>
      </div>

      <ul
        className={`transition-all duration-500 ${
          openMenu ? "max-h-36 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {children}
      </ul>
    </li>
  );
};

export default Dropdown;
