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

  const onReset = () => {
    dispatch(getAllWorkerActions.resetFilter());
  };

  const data = [
    { uuid: "1", code: "Item 1" },
    { uuid: "2", code: "Item 2" },
    { uuid: "3", code: "Item 3" },
  ];

  const { role } = useStoreSelector((state) => state.loginDashboard);
  const { roles } = useStoreSelector((state) => state.getAllRole);
  useEffect(() => {
    dispatch(getAllRoleThunk());
  }, [dispatch]);

  const handleRoleSelect = (name: string) => {
    dispatch(getAllWorkerActions.setFilter({ ...filter, roleName: name }));
  };

  const handleOutletSelect = (code: string) => {
    dispatch(getAllWorkerActions.setFilter({ ...filter, outletCode: code }));
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
    data,
    roles,
    handleAddWorker,
    role,
    onReset,
  };
};

export default UseWorker;
