import { Navigate, Outlet } from "react-router-dom";
const LayoutProtect = ({ allow }) => {
  if (!allow) return <Navigate to="/" replace />;
  // else return <Navigate to="/home" replace />;
  return <Outlet />;
};

export default LayoutProtect;
