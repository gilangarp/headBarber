import { useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { createRoleThunk, getAllRoleThunk } from "../../actions/roleAction";
import { createRoleActions } from "../../store/createRoleSlice";

const UseCreateRole = () => {
  const dispatch = useStoreDispatch();
  const { token } = useStoreSelector((state) => state.loginDashboard);
  const { nameRole, successCreate, errorCrate, loading } = useStoreSelector(
    (state) => state.createRole
  );

  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [showErrorInput, setShowErrorInput] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(createRoleActions.setName(e.target.value));
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameRole) {
      setShowErrorInput(true);
      return;
    }
    setShowErrorInput(false);
    setShowConfirmation(true);
  };

  const handleConfirmAction = () => {
    if (!nameRole) {
      setShowErrorInput(true);
      return;
    }
    if (!token) {
      console.error("Token is required!");
      return;
    }

    dispatch(createRoleThunk({ token, name: nameRole }))
      .then(() => {
        dispatch(getAllRoleThunk({ token }));
      })
      .catch(() => {
        setShowErrorInput(true);
      });

    setShowConfirmation(false);
  };

  const handleCancelAction = () => {
    setShowConfirmation(false);
  };

  return {
    handleChange,
    nameRole,
    successCreate,
    errorCrate,
    loading,
    handleConfirm,
    showConfirmation,
    showErrorInput,
    setShowConfirmation,
    handleConfirmAction,
    handleCancelAction,
  };
};

export default UseCreateRole;
