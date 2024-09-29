import { useEffect } from "react";
import { Formik } from "formik";
import { specialty_schema } from "../utils/schema";
import CustomInput from "../components/forms/CustomInput";
import CustomButton from "../components/forms/CustomButton";
import FormContent from "../layout/FormContent";
import FormSkeleton from "../components/skeletons/FormSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  createSpecialtyDataThunk,
  editSpecialtyDataThunk,
  getSpecialtyByIdDataThunk,
  resetState,
} from "../app/slice/specialtySlices";
import { useParams } from "react-router-dom";
import useGlobalNavigate from "../components/ui/Navigate";
import toast, { Toaster } from "react-hot-toast";

const Especialidad = () => {
  const dispatch = useDispatch();
  const { handleNavigate } = useGlobalNavigate();
  const params = useParams();

  const { isLoading, loading, formData, error, message } = useSelector(
    (state) => state.specialtySlices
  );

  useEffect(() => {
    if (error) toast.error(message);
  }, [error]);

  useEffect(() => {
    if (params.specialty_id)
      dispatch(getSpecialtyByIdDataThunk(params.specialty_id));
    else dispatch(resetState());
  }, [params]);

  const handleSubmit = (values, reset_form) => {
    if (params.specialty_id) {
      dispatch(
        editSpecialtyDataThunk({
          specialty_id: params.specialty_id,
          data: values,
        })
      )
        .unwrap()
        .then(() => {
          toast.success("Especialidad editado exitosamente");
        });
      return;
    }

    dispatch(createSpecialtyDataThunk(values))
      .unwrap()
      .then(() => {
        toast.success("Especialidad creado exitosamente");
        reset_form();
      });
  };

  if (isLoading) return <FormSkeleton />;

  return (
    <Formik
      initialValues={formData}
      enableReinitialize={true}
      validationSchema={specialty_schema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormContent title="Registro de Especialidades">
            <Toaster />
            <div className="md:flex-row gap-6">
              <CustomInput
                title="Especialidad"
                name="name"
                placeholder="Cardiología"
              />

              <CustomInput
                title="Descripción de la especialidad"
                name="description"
                placeholder="La cardiología es una rama"
                required={false}
              />
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
                onClick={() => handleNavigate("/especialidad/admin")}
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

export default Especialidad;
