import { useNavigate } from "react-router-dom";

const useGlobalNavigate = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`/dashboard${path}`);
  };

  return { handleNavigate };
};

export default useGlobalNavigate;
