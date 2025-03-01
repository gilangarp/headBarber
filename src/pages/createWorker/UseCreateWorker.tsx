import { useEffect, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { getAllRoleThunk } from "../../actions/roleAction";
import { createWorkerAction } from "../../store/createInputSlice";
import { createWorkerThunk } from "../../actions/workerAction";
import { getAllOutletThunk } from "../../actions/outletAction";

const UseCreateWorker = () => {
  const dispatch = useStoreDispatch();
  const {
    file,
    password,
    email,
    firstName,
    errorCreate,
    lastName,
    selectedRoleUuid,
    selectedOutletUuid,
    successMessage,
  } = useStoreSelector((state) => state.createWorker);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showErrorInput, setShowErrorInput] = useState(false);

  const { roles } = useStoreSelector((state) => state.getAllRole);
  const { token } = useStoreSelector((state) => state.loginDashboard);
  const { outlets } = useStoreSelector((state) => state.getAllOutlet);

  useEffect(() => {
    if (token) {
      dispatch(getAllRoleThunk({ token }));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(getAllOutletThunk({ token }));
    }
  }, [dispatch, token]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "first_name") {
      dispatch(createWorkerAction.setFirstName(value));
    } else if (id === "last_name") {
      dispatch(createWorkerAction.setLastName(value));
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    dispatch(createWorkerAction.setFile(selectedFile));
  };

  const handleRoleSelect = (id: string) => {
    dispatch(createWorkerAction.setRole(id));
  };

  const handleOutletSelect = (id: string[]) => {
    console.log(id);
    dispatch(createWorkerAction.setOutlet(id));
  };

  const handlePasswordChange = (newPassword: string) => {
    dispatch(createWorkerAction.setPassword(newPassword));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(createWorkerAction.setEmail(e.target.value));
  };

  const handleConfirm = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !file ||
      !selectedRoleUuid ||
      !selectedOutletUuid
    ) {
      setShowErrorInput(true);
      return;
    }

    setShowErrorInput(false);
    setShowConfirmation(true);
  };

  const handleConfirmAction = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !file ||
      !selectedRoleUuid ||
      !selectedOutletUuid ||
      !token
    ) {
      return;
    }

    const result = {
      firstName,
      lastName,
      email,
      password,
      file,
      roleId: selectedRoleUuid,
      outletId: selectedOutletUuid,
    };
    dispatch(createWorkerThunk({ form: result, token }));
    setShowConfirmation(false);
  };

  const handleCancelAction = () => {
    setShowConfirmation(false);
  };

  return {
    // Handlers for actions
    handleConfirm,
    handleConfirmAction,
    handleCancelAction,
    handleEmailChange,
    handlePasswordChange,
    handleOutletSelect,
    handleRoleSelect,
    handleFileChange,
    handleInputChange,

    // States for modal visibility and error handling
    showConfirmation,
    showErrorInput,
    setShowConfirmation,

    // Form data
    firstName,
    lastName,
    password,
    email,
    file,

    // Additional state and data
    errorCreate,
    successMessage,

    // Data used for dropdown selections
    roles,
    outlets,
  };
};

export default UseCreateWorker;
