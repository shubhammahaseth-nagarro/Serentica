import { Navigate, useLocation } from "react-router-dom";
import { Dashboard } from "../../Dashboard";

function ProtectedRoute({ children }) {
  //   const { isAuthenticated } = useAuth();
  const location = useLocation();

  //   return <Navigate to="/auth/login" state={{ from: location }} replace />;

  return <Dashboard>{children}</Dashboard>;
}

export default ProtectedRoute;
