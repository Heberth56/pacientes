import { useEffect } from "react";
import { Formik } from "formik";
import { patient_schema } from "../utils/schema";
import CustomInput from "../components/forms/CustomInput";
import CustomDropdown from "../components/forms/CustomDropdown";
import CustomButton from "../components/forms/CustomButton";
import FormContent from "../layout/FormContent";
import FormSkeleton from "../components/skeletons/FormSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  createPatientDataThunk,
  editPatientDataThunk,
  getPatientByIdDataThunk,
  resetState,
} from "../app/slice/patientsSlice";
import { useParams } from "react-router-dom";
import useGlobalNavigate from "../components/ui/Navigate";
import toast, { Toaster } from "react-hot-toast";

const Pacientes = () => {
  const dispatch = useDispatch();
  const { handleNavigate } = useGlobalNavigate();
  const params = useParams();

  const { isLoading, loading, formData, data, error, message } = useSelector(
    (state) => state.patientsSlice
  );

  useEffect(() => {
    if (error) toast.error(message);
  }, [error]);

  useEffect(() => {
    if (params.patient_id) dispatch(getPatientByIdDataThunk(params.patient_id));
    else dispatch(resetState());
  }, [params]);

  const handleSubmit = (values, reset_form) => {
    const new_data = {
      ...values,
      age: values.age || null,
    };

    if (params.patient_id) {
      dispatch(
        editPatientDataThunk({ patient_id: params.patient_id, data: new_data })
      )
        .unwrap()
        .then(() => {
          toast.success("Paciente editado exitosamente");
        });
      return;
    }

    dispatch(createPatientDataThunk(new_data))
      .unwrap()
      .then(() => {
        toast.success("Paciente creado exitosamente");
        reset_form();
      });
  };

  if (isLoading) return <FormSkeleton />;

  return (
    <Formik
      initialValues={formData}
      enableReinitialize={true}
      validationSchema={patient_schema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormContent title="Registro de Pacientes">
            <Toaster />
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <CustomInput
                  title="Nombre completo"
                  name="first_name"
                  placeholder="Jhon Alex"
                />

                <CustomInput
                  title="Apellidos"
                  name="last_name"
                  placeholder="Lopez"
                />

                <CustomInput
                  title="Teléfono/Celular:"
                  name="phone"
                  type="number"
                  placeholder="79652314"
                  required={false}
                />

                <CustomDropdown title="Genero" name="gender" required={false}>
                  <option value="" key={1}>
                    Seleccione su género
                  </option>
                  <option value="M" key={2}>
                    Masculino
                  </option>
                  <option value="F" key={3}>
                    Femenino
                  </option>
                </CustomDropdown>
              </div>
              <div className="md:w-1/2">
                <CustomInput
                  title="Cédula:"
                  name="cedula"
                  type="number"
                  placeholder="11558698"
                />

                <CustomInput
                  title="Edad:"
                  name="age"
                  type="number"
                  placeholder="25"
                  required={false}
                />

                <CustomInput
                  title="Dirección:"
                  name="address"
                  placeholder="Av. Los Pinos"
                  required={false}
                />
              </div>
            </div>
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
                onClick={() => handleNavigate("/pacientes/admin")}
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

export default Pacientes;
