import { useLocation, useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { authWorkerActions } from "../../store/authWorkerSlice";

const UseSidebarWithNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { role } = useStoreSelector((state) => state.loginDashboard);

  const dispatch = useStoreDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(authWorkerActions.logout());
    navigate("/dashboard/login");
  };

  return { currentPath, logout, role };
};

export default UseSidebarWithNavbar;
