import { FaPeopleGroup, FaBuildingShield } from "react-icons/fa6";
import { GiMedicinePills, GiMedicines } from "react-icons/gi";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdHealthAndSafety, MdAdminPanelSettings } from "react-icons/md";
import { FaStethoscope, FaUserMd, FaSyringe, FaDumbbell } from "react-icons/fa";
import { services } from "../../utils/services";

const iconMap = {
  FaStethoscope: FaStethoscope,
  FaUserMd: FaUserMd,
  FaSyringe: FaSyringe,
  FaDumbbell: FaDumbbell,
};

const Service = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="md:text-4xl text-2xl text-neutralDGray font-semibold mb-2">
          Nuestros pacientes
        </h2>
        <p className="text-neutralGrey">
          Nuestros pacientes están satisfechos con nuestros servicios y la
          precisión de nuestros diagnósticos. Además, pueden consultar
          fácilmente sus resultados a través de nuestra página web, lo que les
          brinda comodidad y acceso rápido a su información médica.
        </p>
        <div className="flex md:gap-24 gap-10 justify-center items-center my-5">
          <FaPeopleGroup size={45} className="text-sky-600" />
          <AiFillMedicineBox size={45} className="text-sky-600" />
          <GiMedicinePills size={45} className="text-sky-600" />
          <GiMedicines size={45} className="text-sky-600" />
          <MdHealthAndSafety size={45} className="text-sky-600" />
        </div>
      </div>
      <hr className="border-sky-200 border-dotted" />
      <div className="mt-20 text-center">
        <h2 className="md:text-4xl text-2xl text-neutralDGray font-semibold mb-2">
          Gestiona tu atención médica <br /> de manera centralizada
        </h2>
        <p className="text-neutralGrey">
          Con nuestra plataforma innovadora, puedes gestionar todos los aspectos
          de tu atención médica de forma centralizada. Desde citas y resultados
          de pruebas hasta historiales médicos y comunicación con tus doctores,
          todo está accesible en un solo lugar, haciendo que tu cuidado de salud
          sea más eficiente y fácil de manejar.
        </p>
        <div className="flex gap-5 justify-center items-center my-5">
          <MdAdminPanelSettings size={60} className="text-sky-600" />
          <FaBuildingShield size={60} className="text-sky-600" />
        </div>
      </div>
      <hr className="border-sky-200 border-dotted" />
      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <div
              key={service.id}
              className="px-4 py-8 text-center md:w-[250px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-sky-800 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="bg-[#E8F5E9] h-12 w-12 mx-auto rounded-tl-3xl rounded-br-3xl">
                  <Icon className="text-sky-600" size={50} />
                </div>
                <h4 className="md:text-2xl text-base font-bold text-neutralDGray mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralGrey">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
