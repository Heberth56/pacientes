import { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { schema } from "../utils/schema";
import CustomInput from "../components/forms/CustomInput";
import CustomPassword from "../components/forms/CustomPassword";
import CustomButton from "../components/forms/CustomButton";
import Lottie from "lottie-react";
import toast, { Toaster } from "react-hot-toast";
import { authLoginThunk } from "../app/slice/authSlice";
import loginLottie from "../assets/lottie/login.json";
function LoginPage() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { isLoading, error, message } = useSelector((state) => state.authSlice);

  useEffect(() => {
    if (error) {
      toast.error(message);
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-violet-50">
      <Toaster />
      <div className="flex flex-wrap-reverse justify-center items-center md:flex-nowrap gap-4 w-full p-8 rounded shadow-2xl mx-2 bg-gradient-to-br from-white to-violet-100">
        <div>
          <h1 className="text-center text-lg md:text-2xl font-semibold mb-4 text-violet-700">
            Inicio de Sessión
          </h1>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={schema}
            onSubmit={(values) => {
              dispatch(authLoginThunk(values)).then((x) => {
                if (!x.error) navigation("/home");
              });
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <CustomInput
                  title="Usuario:"
                  name="username"
                  type="text"
                  placeholder="admin123"
                />
                <CustomPassword
                  title="Contraseña:"
                  name="password"
                  type="password"
                  placeholder="admin123"
                />

                <CustomButton type="submit" disabled={isLoading}>
                  {isLoading ? "Validando..." : "Ingresar"}
                </CustomButton>
              </form>
            )}
          </Formik>
        </div>
        <div className="flex items-center justify-center">
          <Lottie
            animationData={loginLottie}
            className="md:w-72 md:h-72 w-40 h-40"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
