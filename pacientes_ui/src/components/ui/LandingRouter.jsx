import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import Index from "../../pages/Index";

const LandingRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default LandingRouter;
