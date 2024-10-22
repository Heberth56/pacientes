import { Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import {
  testPatientDataThunk,
  diagnosticData,
} from "../../app/slice/diagnosticSlice";
import { useDispatch, useSelector } from "react-redux";
import Links from "../ui/Links";
import { FaClipboardCheck, FaFilePdf } from "react-icons/fa";
const Diagnostics = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataTest = useSelector(diagnosticData);

  const handleNavigate = () => {
    navigate("consult");
  };

  return (
    <div
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-violet-100 my-5"
      id="diagnostic"
    >
      <h2 className="bg-landing text-center font-bold text-2xl lg:text-3xl  underline">
        REALIZE SU CONSULTA
      </h2>
      <p className="text-base text-neutralDGray font-medium underline">NOTA:</p>
      <p className="">
        Para consultar los resultados de sus exámenes en nuestra clínica, es
        necesario que ya esté registrado en nuestro sistema. Si ya cuenta con un
        registro, simplemente ingrese su cédula de identidad para acceder a los
        exámenes que se ha realizado.
      </p>

      <div className="my-5">
        <Formik
          initialValues={{ cedula: "" }}
          validationSchema={null}
          onSubmit={(val) => {
            if (val.cedula) dispatch(testPatientDataThunk(val.cedula));
          }}
        >
          {({ handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 my-5 md:w-1/2 w-full"
            >
              <Field
                name="cedula"
                type="number"
                placeholder="Ingrese su cédula de identidad"
                disabled={false}
                className=" text-lg py-3 rounded-lg outline-none border-2 border-[#F3F4F6] w-full"
              />
              <button
                type="submit"
                className="bg-btn-landing text-white px-5 rounded-md font-bold"
              >
                Buscar
              </button>
            </form>
          )}
        </Formik>
      </div>
      <div className="mt-5 w-full flex justify-center">
        <table className="table-auto md:w-1/2 w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-violet-800 text-white">
              <th className="py-2">#</th>
              <th>Fecha</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {console.log(dataTest)}
            {dataTest?.result?.length == 0 || dataTest.length == 0 ? (
              <tr>
                <td colSpan={3} className="p-2">
                  Sin datos
                </td>
              </tr>
            ) : (
              dataTest?.result?.map((elem, index) => (
                <tr key={index}>
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{elem.fecha}</td>
                  <td className="p-2">
                    <ul className="flex row-auto gap-2">
                      <Links link={`/consult/${elem.id}`}>
                        <FaClipboardCheck className="text-green-500 text-xl" />{" "}
                        <span className="font-semibold">Ver</span>
                      </Links>

                      <button className="mt-1 p-3 hover:bg-gray-300 hover:bg-opacity-30 flex gap-1">
                        <FaFilePdf className="text-red-600 text-lg" />
                        pdf
                      </button>
                    </ul>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Diagnostics;
