import MensualChart from "../components/charts/MensualChart";
import PacientesChart from "../components/charts/PacientesChart";
import UsuariosChart from "../components/charts/UsuariosChart";
import Roles from "../components/charts/Roles";

const Home = () => {
  return (
    <div className="px-5 gap-6 flex flex-col">
      <h1 className="text-3xl font-bold text-sky-700 uppercase">
        BIENVENIDO JHON BON DOE
        <hr />
      </h1>

      <p className="text-gray-700">
        Aquí puedes ver las estadísticas detalladas de las "Especialidades",
        "Temas" y "Exámenes" para los dos meses más activos del año actual. Esta
        visualización te ayudará a entender mejor las tendencias y el
        rendimiento en estas áreas.
      </p>

      <div className="w-full h-48 sm:h-72 md:h-96 lg:h-120 max-w-4xl mx-auto">
        <MensualChart />
      </div>
      <Roles />

      <div className="flex flex-col md:flex-row gap-6 items-center border-b border-b-sky-200">
        <div className="md:w-1/2">
          <PacientesChart />
        </div>
        <div className="md:w-1/2">
          Un registro de pacientes es un sistema detallado y organizado que
          contiene información esencial sobre la salud y el historial médico de
          cada paciente. Incluye datos personales como nombre, edad y contacto,
          junto con antecedentes médicos, diagnósticos, tratamientos, y
          medicamentos prescritos. También puede registrar visitas al médico,
          resultados de pruebas de laboratorio, y procedimientos realizados.
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center text-justify">
        <div className="md:w-1/2">
          Un registro de usuarios con roles definidos como administrador,
          doctor, secretario y enfermera, contiene información esencial para la
          gestión del sistema de salud. Este registro facilita la asignación de
          responsabilidades y el seguimiento de estadísticas de rendimiento y
          actividad de cada rol. Además, permite una gestión eficiente y segura
          de los accesos y privilegios dentro del sistema.
        </div>
        <div className="md:w-1/2">
          <UsuariosChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
