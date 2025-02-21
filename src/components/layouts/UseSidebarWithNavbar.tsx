import { useLocation, useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { authWorkerActions } from "../../store/authWorkerSlice";
import { useEffect } from "react";
import { getByIdWorkerThunk } from "../../actions/workerAction";

const UseSidebarWithNavbar = () => {
  const dispatch = useStoreDispatch();
  const location = useLocation();
  const currentPath = location.pathname;
  const { token, uuid } = useStoreSelector((state) => state.loginDashboard);
  const { worker } = useStoreSelector((state) => state.getByIdWorker);

  useEffect(() => {
    if (uuid && token) {
      dispatch(getByIdWorkerThunk({ token, uuid }));
    }
  }, [dispatch, token, uuid]);

  const navigate = useNavigate();

  const logout = () => {
    dispatch(authWorkerActions.logout());
    navigate("/dashboard/login");
  };

  return { currentPath, logout, worker };
};

export default UseSidebarWithNavbar;
