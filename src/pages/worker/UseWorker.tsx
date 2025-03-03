import { useEffect } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { getAllWorkerThunk } from "../../actions/workerAction";
import { useNavigate } from "react-router-dom";
import { getAllRoleThunk } from "../../actions/roleAction";
import { getAllWorkerActions } from "../../store/getAllWorkerSlice";

const UseWorker = () => {
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const { worker, filter } = useStoreSelector((state) => state.getAllWorker);
  const { token } = useStoreSelector((state) => state.loginDashboard);

  const handleAddWorker = () => {
    navigate("/dashboard/worker/add");
  };

  const handleAddRole = () => {
    navigate("/dashboard/role/add");
  };

  const onReset = () => {
    dispatch(getAllWorkerActions.resetFilter());
  };

  const { role } = useStoreSelector((state) => state.loginDashboard);
  const { roles } = useStoreSelector((state) => state.getAllRole);
  useEffect(() => {
    if (token) {
      dispatch(getAllRoleThunk({ token }));
    }
  }, [dispatch, token]);

  const handleRoleSelect = (name: string) => {
    dispatch(getAllWorkerActions.setFilter({ ...filter, roleName: name }));
  };

  const handleOutletSelect = (code: string) => {
    dispatch(getAllWorkerActions.setFilter({ ...filter, outletCode: code }));
  };

  const handleDelete = (uuid: string) => {
    console.log(uuid);
  };

  useEffect(() => {
    if (token && filter) {
      dispatch(getAllWorkerThunk({ token, filter }));
    }
  }, [dispatch, token, filter]);

  return {
    worker,
    handleOutletSelect,
    handleRoleSelect,
    roles,
    handleAddWorker,
    role,
    onReset,
    handleDelete,
    handleAddRole,
  };
};

export default UseWorker;
