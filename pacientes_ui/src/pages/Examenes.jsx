import { useEffect } from "react";
import { Formik } from "formik";
import CustomTextarea from "../components/forms/CustomTextArea";
import CustomCheckbox from "../components/forms/CustomCheckbox";
import CustomButton from "../components/forms/CustomButton";
import CustomDropdown from "../components/forms/CustomDropdown";
import FormContent from "../layout/FormContent";
import FormSkeleton from "../components/skeletons/FormSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpecialtyTemaDataThunk,
  createTestDataThunk,
} from "../app/slice/testSlice";
import { getUsersDataThunk } from "../app/slice/usersSlice";
import { getPatientsDataThunk } from "../app/slice/patientsSlice";
import toast, { Toaster } from "react-hot-toast";
import useGlobalNavigate from "../components/ui/Navigate";

const Examenes = () => {
  const dispatch = useDispatch();
  const { handleNavigate } = useGlobalNavigate();
  const { content, formData, loading, isLoading, error, message } = useSelector(
    (state) => state.testSlice
  );
  const { data: dataUser } = useSelector((state) => state.usersSlice);
  const { data: dataPatient } = useSelector((state) => state.patientsSlice);

  useEffect(() => {
    dispatch(getSpecialtyTemaDataThunk());
    dispatch(getUsersDataThunk());
    dispatch(getPatientsDataThunk());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(message);
  }, [error]);

  const handleSubmit = (values, reset_form) => {
    dispatch(createTestDataThunk(values))
      .unwrap()
      .then(() => {
        toast.success("Examen registrado exitosamente");
        reset_form();
      });
  };

  if (isLoading) return <FormSkeleton />;

  return (
    <Formik
      initialValues={formData}
      enableReinitialize={true}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormContent title="Examenes">
            <Toaster />
            <CustomDropdown title="Paciente:" name="patient">
              <option value="" key={"spec"}>
                Seleccione al paciente
              </option>
              {dataPatient?.map((elem, index) => (
                <option value={elem.id} key={index}>
                  {elem.first_name + " " + elem.last_name}
                </option>
              ))}
            </CustomDropdown>

            <CustomDropdown title="Médico:" name="user">
              <option value="" key={"spec"}>
                Seleccione al médico encargado
              </option>
              {dataUser?.map((elem, index) => (
                <option value={elem.id} key={index}>
                  {elem.first_name + " " + elem.last_name}
                </option>
              ))}
            </CustomDropdown>
            <CustomTextarea
              title="Diagnóstico:"
              name="diagnostic"
              placeholder="Diagnosticar al paciente"
            />
            <h2 className="text-blue-950 font-bold text-center text-lg  mt-4">
              EXAMENES SOLICITADOS
            </h2>

            {content?.map((elem, index) => {
              return (
                <div key={index} className="my-2">
                  <strong className="text-base text-blue-950">
                    {elem.name}
                    <hr className="border-blue-950" />
                  </strong>
                  <div className="flex flex-wrap gap-5 mt-1">
                    {elem?.temas.map((val, i) => (
                      <CustomCheckbox
                        name={"temas"}
                        value={val.id}
                        text={val.name}
                        key={i}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col md:flex-row gap-6">
              <CustomButton
                onClick={handleSubmit}
                type="button"
                disabled={loading}
              >
                {loading ? "Guardando" : "Guardar"}
              </CustomButton>

              <CustomButton
                bg="bg-red-500"
                disabled={loading}
                type="button"
                onClick={() => handleNavigate("/examenes/admin")}
              >
                Cancelar
              </CustomButton>
            </div>
          </FormContent>
        </form>
      )}
    </Formik>
  );
};

export default Examenes;
