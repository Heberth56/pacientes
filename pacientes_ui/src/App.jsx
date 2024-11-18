import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutSidebar from "./layout/LayoutSideBar";
import LayoutProtect from "./layout/LayoutProtect";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import Consult from "./components/landing/Consult";
import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import UsuariosAdmin from "./pages/UsuariosAdmin";
import Pacientes from "./pages/Pacientes";
import PacientesAdmin from "./pages/PacientesAdmin";
import Especialidad from "./pages/Especialidad";
import EspecialidadAdmin from "./pages/EspecialidadAdmin";
import Temas from "./pages/Temas";
import TemasAdmin from "./pages/TemasAdmin";
import Examenes from "./pages/Examenes";
import ExamenAdmin from "./pages/ExamenAdmin";
import Diagnostico from "./pages/Diagnostico";
import NotFound from "./pages/NotFound";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  dataAllow,
  dataAuth,
  dataLoading,
  renewDataThunk,
} from "./app/slice/authSlice";
function App() {
  const dispatch = useDispatch();
  const allow = useSelector(dataAllow);
  const data = useSelector(dataAuth);
  const isLoading = useSelector(dataLoading);

  useEffect(() => {
    dispatch(renewDataThunk());
  }, [dispatch]);

  return (
    <Routes>
      {!allow && <Route path="/" element={<Index />} />}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/consult/:test_id" element={<Consult />} />
      <Route element={<LayoutProtect allow={allow} />}>
        <Route element={<LayoutSidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {data.role == "Administrador" && (
            <>
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/usuarios/:user_id" element={<Usuarios />} />
              <Route path="/usuarios/admin" element={<UsuariosAdmin />} />
            </>
          )}
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/pacientes/:patient_id" element={<Pacientes />} />
          <Route path="/pacientes/admin" element={<PacientesAdmin />} />
          <Route path="/especialidad" element={<Especialidad />} />
          <Route
            path="/especialidad/:specialty_id"
            element={<Especialidad />}
          />
          <Route path="/especialidad/admin" element={<EspecialidadAdmin />} />
          <Route path="/temas" element={<Temas />} />
          <Route path="/temas/:tema_id" element={<Temas />} />
          <Route path="/temas/admin" element={<TemasAdmin />} />
          <Route path="/examenes" element={<Examenes />} />
          <Route path="/examenes/admin" element={<ExamenAdmin />} />
          <Route path="/diagnostico/:test_id" element={<Diagnostico />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
