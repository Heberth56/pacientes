import Lottie from "lottie-react";
import gearsLottie from "../../assets/lottie/gear.json";
import imgDoctor from "../../assets/images/doctors.jpg";
const About = () => {
  return (
    <div id="about">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              src={imgDoctor}
              alt="Image not found"
              className="w-full object-contain"
            />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl bg-landing mb-4 md:w-4/5">
              Sobre Nosotros
            </h2>
            <p className=" text-sm text-neutralDGray mb-8">
              El laboratorio clínico, inicialmente conocido como "Clínica Mayo",
              fue fundado el 24 de mayo de 1991 en Sopocachi, donde se encargaba
              de manejar todos los datos generados en su ámbito de trabajo,
              incluyendo la admisión de pacientes, la asignación de tareas, la
              recepción de resultados, el control de calidad, la elaboración de
              informes y la gestión de archivos históricos. En ese contexto, se
              estaba presenciando el surgimiento de redes informáticas,
              permitiendo que los clínicos solicitaran pruebas analíticas
              directamente a través de un ordenador y recibieran los resultados
              de la misma manera.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-10">
        <div className="flex md:flex-row flex-col items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              Consultas Aplicadas <br />
              <span className="bg-landing">Ayudas Especializadas</span>
            </h2>
            <p className="text-sm text-neutralDGray mb-8">
              Si bien el laboratorio se esfuerza notablemente por mejorar la
              instrumentación y la aplicación de métodos validados y
              controlados, se ha observado una menor diligencia en la
              implementación de medidas destinadas a mejorar las características
              del registro de pacientes, un proceso que podría beneficiarse
              significativamente de la integración de nuevas tecnologías.
            </p>
          </div>
          <div className="md:w-1/2 flex">
            <Lottie animationData={gearsLottie} className="max-w-xs mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
