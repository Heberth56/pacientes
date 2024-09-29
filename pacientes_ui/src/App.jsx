import { Route, Routes } from "react-router-dom";
import SideBarRouter from "./components/ui/SideBarRouter";
import LandingRouter from "./components/ui/LandingRouter";
import NotFound from "./pages/NotFound";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/landing/*" element={<LandingRouter />} />
      <Route path="/dashboard/*" element={<SideBarRouter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
