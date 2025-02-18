import { Navigate } from "react-router-dom";
import { useStoreSelector } from "../hooks/useStore";

interface PrivateRouteProps {
  children: React.ReactNode;
  to: string;
  requiredRoles: string[];
}

const PrivateRoute = ({ children, requiredRoles, to }: PrivateRouteProps) => {
  const { token, role } = useStoreSelector((state) => state.loginDashboard);

  if (!token) {
    return <Navigate to={to} replace />;
  }

  if (!role || !requiredRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
