import { FaPeopleGroup, FaBuildingShield } from "react-icons/fa6";
import { GiMedicinePills, GiMedicines } from "react-icons/gi";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdHealthAndSafety, MdAdminPanelSettings } from "react-icons/md";
import { FaStethoscope, FaUserMd, FaSyringe, FaDumbbell } from "react-icons/fa";
import { services } from "../../utils/services";
import { galery } from "../../utils/galery";

const iconMap = {
  FaStethoscope: FaStethoscope,
  FaUserMd: FaUserMd,
  FaSyringe: FaSyringe,
  FaDumbbell: FaDumbbell,
};
// md:px-14 px-4 py-16
const Service = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="bg-landing md:text-4xl text-2xl text-neutralDGray font-semibold mb-2">
          Nuestros pacientes
        </h2>

        <p className="text-neutralGrey">
          Nuestros pacientes están satisfechos con nuestros servicios y la
          precisión de nuestros diagnósticos. Además, pueden consultar
          fácilmente sus resultados a través de nuestra página web, lo que les
          brinda comodidad y acceso rápido a su información médica.
        </p>
        <div className="flex md:gap-24 gap-10 justify-center items-center my-5">
          <FaPeopleGroup size={45} className="text-violet-800" />
          <AiFillMedicineBox size={45} className="text-violet-800" />
          <GiMedicinePills size={45} className="text-violet-800" />
          <GiMedicines size={45} className="text-violet-800" />
          <MdHealthAndSafety size={45} className="text-violet-800" />
        </div>
      </div>
      <hr className="border-sky-200 border-dotted" />
      <div className="bg-violet-100 px-4 py-16 my-5">
        <h2 className="md:text-4xl text-2xl text-neutralDGray font-semibold mb-2 text-center">
          Nuestros <span className="bg-landing">Ambientes</span>
        </h2>
        <div className="flex flex-wrap gap-5 justify-center items-center mt-5">
          {galery.map((elem) => (
            <div key={elem.id} className="relative w-44 h-44">
              <img
                src={elem.imagen}
                alt="image not found"
                className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105 shadow-lg"
              />
              <div className="rounded-md absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-35 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <span className="text-sm">{elem.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center">
        <h2 className="md:text-4xl text-2xl text-neutralDGray font-semibold mb-2">
          Gestiona tu atención médica <br /> de manera centralizada
        </h2>
        <p className="text-neutralGrey">
          El Laboratorio Clínico "Virgen de Cotoca" despliega su función
          primordial de diagnóstico mediante la realización de una amplia gama
          de exámenes, incluyendo hematología, química sanguínea, análisis de
          heces fecales, orina, serología, bacteriología/cultivos, cito
          patología, hormonas, entre otros.
        </p>
        <div className="flex gap-5 justify-center items-center my-5">
          <MdAdminPanelSettings size={60} className="text-violet-800" />
          <FaBuildingShield size={60} className="text-violet-800" />
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
                  <Icon className="text-violet-800" size={50} />
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
