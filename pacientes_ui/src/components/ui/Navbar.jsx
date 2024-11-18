import ButtonNav from "./ButtonNav";
import { RiMenu3Line, RiMenu2Line } from "react-icons/ri";
import {
  FaStethoscope,
  FaBookOpen,
  FaClipboard,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { resetState } from "../../app/slice/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ menu, setMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSidebar = () => {
    setMenu(!menu);
  };

  const handleLogOut = () => {
    dispatch(resetState());
    localStorage.removeItem("lab_data");
    navigate("/");
  };

  return (
    <nav
      className={`flex justify-between items-center px-5 py-4 shadow-md ${
        menu && "ml-64"
      } transition-all duration-300`}
    >
      <button className="text-sky-950 text-2xl" onClick={handleSidebar}>
        {menu ? <RiMenu3Line /> : <RiMenu2Line />}
      </button>
      <div className="flex gap-2">
        <ButtonNav text="Home" to="/home">
          <FaHome />
        </ButtonNav>
        <ButtonNav text="Temas" to="/temas/admin">
          <FaBookOpen />
        </ButtonNav>
        <ButtonNav text="Examen" to="/examenes/admin">
          <FaClipboard />
        </ButtonNav>
        <ButtonNav text="Salir" to="/" out={true} onClick={handleLogOut}>
          <FaSignOutAlt />
        </ButtonNav>
      </div>
    </nav>
  );
};

export default Navbar;
