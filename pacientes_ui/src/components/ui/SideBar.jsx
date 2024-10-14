import SideBarLottie from "../../assets/lottie/SideBar.json";
import {
  FaUser,
  FaUserNurse,
  FaHome,
  FaStethoscope,
  FaBook,
  FaFileAlt,
  FaSignOutAlt,
  FaCaretRight,
} from "react-icons/fa";
import Links from "./Links";
import Dropdown from "./Dropdown";
import Lottie from "lottie-react";

const SideBar = ({ menu }) => {
  return (
    <div
      className={`h-screen fixed left-0 top-0 overflow-auto bg-sky-950 custom-scrollbar text-white ${
        menu ? "w-64" : "w-0"
      } transition-all duration-300 md:fixed`}
    >
      <div className="py-6">
        <h4 className="text-center font-semibold">Medicina.org</h4>
        <div className="flex items-center justify-center">
          <Lottie animationData={SideBarLottie} className="w-40 h-40" />
        </div>
        <ul className="mt-5">
          <Links link="/home" active={true}>
            <FaHome className="text-blue-400" /> Home
          </Links>
          <Dropdown
            icon={<FaUser className="text-teal-500" />}
            title="Usuarios"
          >
            <Links link="/usuarios">
              <FaCaretRight className="text-teal-500" />
              Nuevo usuario
            </Links>
            <Links link="/usuarios/admin">
              <FaCaretRight className="text-teal-500" />
              Administrar usuarios
            </Links>
          </Dropdown>
          <Dropdown
            icon={<FaUserNurse className="text-orange-500" />}
            title="Pacientes"
          >
            <Links link="/pacientes">
              <FaCaretRight className="text-orange-500" />
              Nuevo paciente
            </Links>
            <Links link="/pacientes/admin">
              <FaCaretRight className="text-orange-500" />
              Administrar pacientes
            </Links>
          </Dropdown>

          <Dropdown
            icon={<FaStethoscope className="text-yellow-500" />}
            title="Especialidades"
          >
            <Links link="/especialidad">
              <FaCaretRight className="text-yellow-500" />
              Nueva especialidad
            </Links>
            <Links link="/especialidad/admin">
              <FaCaretRight className="text-yellow-500" />
              Administrar especialidades
            </Links>
          </Dropdown>

          <Dropdown
            icon={<FaBook className="text-fuchsia-500" />}
            title="Temas"
          >
            <Links link="/temas">
              <FaCaretRight className="text-fuchsia-500" />
              Nuevo tema
            </Links>
            <Links link="/temas/admin">
              <FaCaretRight className="text-fuchsia-500" />
              Administrar temas
            </Links>
          </Dropdown>
          <Dropdown
            icon={<FaFileAlt className="text-green-300" />}
            title="Examenes"
          >
            <Links link="/examenes">
              <FaCaretRight className="text-green-300" />
              Nuevo examen
            </Links>
            <Links link="/examenes/admin">
              <FaCaretRight className="text-green-300" />
              Administrar Examenes
            </Links>
          </Dropdown>
          <Links link="/">
            <FaSignOutAlt className="text-red-500" /> Cerrar sesión
          </Links>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
