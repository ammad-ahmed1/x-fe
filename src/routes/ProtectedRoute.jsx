import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // assuming you have context set up

const ProtectedRoute = ({ children }) => {
  //   const { accessToken } = useAuth();
  const accessToken = true;
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
