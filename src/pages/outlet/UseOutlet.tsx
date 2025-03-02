import { useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { useEffect } from "react";
import { getAllOutletThunk } from "../../actions/outletAction";

const UseOutlet = () => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const handleAddOutlet = () => {
    navigate("/dashboard/outlet/add");
  };

  const { role, token } = useStoreSelector((state) => state.loginDashboard);
  const { outlets } = useStoreSelector((state) => state.getAllOutlet);

  useEffect(() => {
    if (token) {
      dispatch(getAllOutletThunk({ token }));
    }
  }, [dispatch, token]);

  const handleDelete = (uuid: string) => {
    console.log(uuid);
  };

  return { handleAddOutlet, role, outlets, handleDelete };
};

export default UseOutlet;
