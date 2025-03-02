import { useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { updateRoleActions } from "../../store/updateRoleSlice";

const UseUpdateRole = () => {
  const dispatch = useStoreDispatch();
  const { token } = useStoreSelector((state) => state.loginDashboard);
  const { nameRole, errorUpdate, successUpdate } = useStoreSelector(
    (state) => state.updateRole
  );

  const { id } = useParams<{ id: string }>();
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [showErrorInput, setShowErrorInput] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateRoleActions.setName(e.target.value));
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
    dispatch(
      updateRoleActions.updateRoleThunk({
        token,
        name: nameRole,
        roleId: Number(id),
      })
    );
    setShowConfirmation(false);
  };

  const handleCancelAction = () => {
    setShowConfirmation(false);
  };

  return {
    handleChange,
    handleConfirm,
    nameRole,
    showErrorInput,
    handleConfirmAction,
    handleCancelAction,
    showConfirmation,
    errorUpdate,
    successUpdate,
  };
};

export default UseUpdateRole;
