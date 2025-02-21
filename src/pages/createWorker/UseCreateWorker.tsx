import { useEffect, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { getAllRoleThunk } from "../../actions/roleAction";
import { createWorkerAction } from "../../store/createInputSlice";
import { createWorkerThunk } from "../../actions/workerAction";

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

  useEffect(() => {
    dispatch(getAllRoleThunk());
  }, [dispatch]);

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

  const data = [
    { uuid: "93866bbd-9c22-475f-93d3-7f6c2dc6cdc0", code: "hdbr01" },
    { uuid: "f7fe4832-667e-42ac-8b88-d4c39760f968", code: "hdbr02" },
    { uuid: "0b1c2b9c-a345-46db-812a-3159ec5ec6ff", code: "hdbr03" },
  ];

  const handleRoleSelect = (id: string) => {
    dispatch(createWorkerAction.setRole(id));
  };

  const handleOutletSelect = (id: string) => {
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
    data,
    roles,
  };
};

export default UseCreateWorker;
