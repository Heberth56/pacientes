import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./SideBar";
import Navbar from "./Navbar";
import Home from "../../pages/Home";
import Usuarios from "../../pages/Usuarios";
import UsuariosAdmin from "../../pages/UsuariosAdmin";
import Pacientes from "../../pages/Pacientes";
import PacientesAdmin from "../../pages/PacientesAdmin";
import Especialidad from "../../pages/Especialidad";
import EspecialidadAdmin from "../../pages/EspecialidadAdmin";
import Temas from "../../pages/Temas";
import TemasAdmin from "../../pages/TemasAdmin";
import Examenes from "../../pages/Examenes";
import ExamenAdmin from "../../pages/ExamenAdmin";
import Diagnostico from "../../pages/Diagnostico";

const SideBarRouter = () => {
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenu(true);
      else setMenu(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar menu={menu} setMenu={setMenu} />
      <Sidebar menu={menu} />
      <div
        className={`px-6 py-6 ${menu && "ml-64"} transition-all duration-300`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/:user_id" element={<Usuarios />} />
          <Route path="/usuarios/admin" element={<UsuariosAdmin />} />
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
        </Routes>
      </div>
    </>
  );
};

export default SideBarRouter;
