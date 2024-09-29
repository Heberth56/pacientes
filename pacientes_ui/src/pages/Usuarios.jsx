import { useEffect } from "react";
import { Formik } from "formik";
import { user_schema } from "../utils/schema";
import CustomInput from "../components/forms/CustomInput";
import CustomDropdown from "../components/forms/CustomDropdown";
import CustomButton from "../components/forms/CustomButton";
import FormContent from "../layout/FormContent";
import FormSkeleton from "../components/skeletons/FormSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getRolesDataThunk } from "../app/slice/rolesSlice";
import {
  createUserDataThunk,
  getUserByIdDataThunk,
  resetState,
} from "../app/slice/usersSlice";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import useGlobalNavigate from "../components/ui/Navigate";
const Usuarios = () => {
  const dispatch = useDispatch();
  const { handleNavigate } = useGlobalNavigate();
  const params = useParams();
  const { data, error, message } = useSelector((state) => state.rolesSlice);
  const {
    isLoading,
    loading,
    formData,
    error: userError,
    message: userMessage,
  } = useSelector((state) => state.usersSlice);

  useEffect(() => {
    dispatch(getRolesDataThunk());
    toast.remove();
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(message);
    if (userError) toast.error(userMessage);
  }, [error, userError]);

  useEffect(() => {
    if (params.user_id) dispatch(getUserByIdDataThunk(params.user_id));
    else dispatch(resetState());
  }, [params]);

  const handleSubmit = (values, reset_form) => {
    const new_data = {
      ...values,
      age: values.age || null,
    };

    dispatch(createUserDataThunk(new_data))
      .unwrap()
      .then(() => {
        toast.success("Usuario creado exitosamente");
        reset_form();
        // handleNavigate();
      });
  };

  if (isLoading) return <FormSkeleton />;

  return (
    <Formik
      initialValues={formData}
      enableReinitialize={true}
      validationSchema={user_schema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormContent title="Registro de Usuarios">
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

                <CustomDropdown title="Rol" name="role">
                  <option value="" key={"r"}>
                    Seleccione un rol
                  </option>
                  {data?.map((elem, index) => (
                    <option value={elem.id} key={index}>
                      {elem.name}
                    </option>
                  ))}
                </CustomDropdown>
              </div>
              <div className="md:w-1/2">
                <CustomInput
                  title="Correo electronico:"
                  name="email"
                  type="email"
                  placeholder="juan@gmail.com"
                  required={false}
                />

                <CustomInput
                  title="Contraseña:"
                  name="password"
                  type="password"
                  placeholder="admin123"
                />

                <CustomInput
                  title="Usuario:"
                  name="username"
                  placeholder="admin"
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
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <CustomButton
                onClick={handleSubmit}
                type="button"
                disabled={loading}
              >
                {loading ? "Guardando" : "Registrar"}
              </CustomButton>

              <CustomButton
                bg="bg-red-500"
                disabled={loading}
                type="button"
                onClick={() => handleNavigate("/usuarios/admin")}
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

export default Usuarios;
