import { useEffect, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { deleteRoleThunk, getAllRoleThunk } from "../../actions/roleAction";

const UseTableRole = () => {
  const dispatch = useStoreDispatch();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(Number);

  const { roles } = useStoreSelector((state) => state.getAllRole);
  const { token } = useStoreSelector((state) => state.loginDashboard);
  const { successDelete, errorDelete } = useStoreSelector(
    (state) => state.deleteRole
  );

  useEffect(() => {
    if (token) {
      dispatch(getAllRoleThunk({ token }));
    }
  }, [dispatch, token]);

  const handleConfirmAction = () => {
    if (!token) {
      console.error("Token is required!");
      return;
    }
    if (roleToDelete) {
      dispatch(deleteRoleThunk({ token, id: roleToDelete })).then(() => {
        dispatch(getAllRoleThunk({ token }));
      });
      setShowConfirmation(false);
      setRoleToDelete(0);
    }
  };

  const handleCancelAction = () => {
    setShowConfirmation(false);
    setRoleToDelete(0);
  };

  const handleDelete = (id: number) => {
    setRoleToDelete(id);
    setShowConfirmation(true);
  };
  return {
    roles,
    errorDelete,
    successDelete,
    showConfirmation,
    handleDelete,
    handleCancelAction,
    handleConfirmAction,
  };
};

export default UseTableRole;
