import { useEffect } from "react";
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
    error,
    lastName,
    selectedRoleUuid,
    selectedOutletUuid,
    successMessage,
  } = useStoreSelector((state) => state.createWorker);

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
    console.log(id);
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
      !selectedOutletUuid ||
      !token
    ) {
      alert("Please fill all fields correctly.");
      return;
    }

    const confirmAction = window.confirm("Are you sure you want to submit?");
    if (confirmAction) {
      const data = {
        firstName,
        lastName,
        email,
        password,
        file,
        roleId: selectedRoleUuid,
        outletId: selectedOutletUuid,
      };

      dispatch(createWorkerThunk({ form: data, token }));
    }
  };
  return {
    handleConfirm,
    handleEmailChange,
    handlePasswordChange,
    handleOutletSelect,
    handleRoleSelect,
    data,
    handleFileChange,
    handleInputChange,
    firstName,
    lastName,
    password,
    email,
    file,
    error,
    roles,
    successMessage,
  };
};

export default UseCreateWorker;
