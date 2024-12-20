import { Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import {
  testPatientDataThunk,
  diagnosticData,
  reportSliceDataThunk,
} from "../../app/slice/diagnosticSlice";
import { useDispatch, useSelector } from "react-redux";
import Links from "../ui/Links";
import { FaClipboardCheck, FaFilePdf } from "react-icons/fa";
const Diagnostics = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataTest = useSelector(diagnosticData);

  const handleReport = (id) => {
    dispatch(reportSliceDataThunk(id));
  };

  return (
    <div
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-violet-100 my-5"
      id="diagnostic"
    >
      <h2 className="bg-landing text-center font-bold text-base lg:text-3xl  underline">
        REALIZE SU CONSULTA
      </h2>
      <p className="md:text-base text-sm text-neutralDGray font-medium underline">
        NOTA:
      </p>
      <p className="md:text-base text-sm">
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
                className=" md:text-lg text-sm py-3 rounded-lg outline-none border-2 border-[#F3F4F6] w-full"
              />
              <button
                type="submit"
                className="bg-btn-landing md:text-base text-sm"
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
            <tr className="bg-violet-800 text-white md:text-base text-sm">
              <th className="py-2">#</th>
              <th>Fecha</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
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

                      <button
                        className="mt-1 p-3 hover:bg-gray-300 hover:bg-opacity-30 flex gap-1"
                        onClick={() => handleReport(elem.id)}
                      >
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
