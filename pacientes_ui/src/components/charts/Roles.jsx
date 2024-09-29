import { FaLaptop, FaUserNurse, FaUserTie } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
const Box = ({ title, children }) => (
  <div
    className="flex flex-col min-w-[8rem] 
    w-full h-32  bg-sky-800 rounded-lg items-center 
    justify-center text-white text-3xl hover:bg-sky-900 hover:text-sky-400"
  >
    {children}
    <span className="font-semibold text-lg">{title}</span>
  </div>
);

const Roles = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-sky-950 rounded-lg shadow-md ">
      <div className="flex-1 flex flex-col justify-center md:w-1/3 md:mb-0 pr-4">
        <h2 className="text-xl font-semibold text-sky-300 mb-2">
          Descripción de la Clínica
        </h2>
        <p className="text-sky-600">
          La clínica ofrece una variedad de servicios médicos para atender a
          todas tus necesidades de salud. Nuestro equipo de profesionales está
          comprometido con el bienestar y la satisfacción de nuestros pacientes.
          Ven y descubre la calidad de nuestros servicios y el cuidado
          excepcional que brindamos. <br />
          Estos son nuestro roles...
        </p>
      </div>

      <div className="flex-1 md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Box title="Administrador/a">
            <FaLaptop />
          </Box>
          <Box title="Doctor/a">
            <FaUserDoctor />
          </Box>
          <Box title="Enfermera/o">
            <FaUserNurse />
          </Box>
          <Box title="Secretaria/o">
            <FaUserTie />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Roles;
