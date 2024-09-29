import { useEffect } from "react";
import { Formik } from "formik";
import { tema_schema } from "../utils/schema";
import CustomInput from "../components/forms/CustomInput";
import CustomTextarea from "../components/forms/CustomTextArea";
import CustomDropdown from "../components/forms/CustomDropdown";
import CustomButton from "../components/forms/CustomButton";
import FormContent from "../layout/FormContent";
import FormSkeleton from "../components/skeletons/FormSkeleton";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import useGlobalNavigate from "../components/ui/Navigate";
import { getSpecialtiesDataThunk } from "../app/slice/specialtySlices";

import {
  createTemaDataThunk,
  getTemaByIdDataThunk,
  editTemaDataThunk,
  resetState,
} from "../app/slice/temaSlice";

const Temas = () => {
  const dispatch = useDispatch();
  const { handleNavigate } = useGlobalNavigate();
  const params = useParams();

  const { data, error, message } = useSelector(
    (state) => state.specialtySlices
  );

  const {
    isLoading,
    loading,
    formData,
    error: errTema,
    message: errMessage,
  } = useSelector((state) => state.temaSlice);

  useEffect(() => {
    dispatch(getSpecialtiesDataThunk());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(message);
    if (errTema) toast.error(errMessage);
  }, [error, errTema]);

  useEffect(() => {
    if (params.tema_id) dispatch(getTemaByIdDataThunk(params.tema_id));
    else dispatch(resetState());
  }, [params]);

  const handleSubmit = (values, reset_form) => {
    if (params.tema_id) {
      dispatch(
        editTemaDataThunk({
          tema_id: params.tema_id,
          data: values,
        })
      )
        .unwrap()
        .then(() => {
          toast.success("Tema editado exitosamente");
        });
      return;
    }

    dispatch(createTemaDataThunk(values))
      .unwrap()
      .then(() => {
        toast.success("Tema creado exitosamente");
        reset_form();
      });
  };

  if (isLoading) return <FormSkeleton />;

  return (
    <Formik
      initialValues={formData}
      enableReinitialize={true}
      validationSchema={tema_schema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormContent title="Registro de temas">
            {" "}
            <Toaster />
            <CustomDropdown title="Especialidad" name="specialty">
              <option value="" key={"spec"}>
                Seleccione una especialidad
              </option>
              {data?.map((elem, index) => (
                <option value={elem.id} key={index}>
                  {elem.name}
                </option>
              ))}
            </CustomDropdown>
            <CustomInput
              title="Nombre del tema:"
              name="name"
              type="text"
              placeholder="Hemograma Completo"
            />
            <CustomTextarea
              title="Descripción:"
              name="description"
              placeholder="Descripción del tema"
            />
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
                onClick={() => handleNavigate("/temas/admin")}
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

export default Temas;
