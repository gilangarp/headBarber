import { useEffect } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { workerInputSlice } from "../../store/workerSlice";
import { getAllRoleThunk } from "../../actions/roleAction";

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
  } = useStoreSelector((state) => state.createWorker);

  const { roles } = useStoreSelector((state) => state.getAllRole);
  useEffect(() => {
    dispatch(getAllRoleThunk());
  }, [dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "first_name") {
      dispatch(workerInputSlice.setFirstName(value));
    } else if (id === "last_name") {
      dispatch(workerInputSlice.setLastName(value));
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    dispatch(workerInputSlice.setFile(selectedFile));
  };

  const data = [
    { uuid: "1", code: "Item 1" },
    { uuid: "2", code: "Item 2" },
    { uuid: "3", code: "Item 3" },
  ];

  const handleRoleSelect = (id: number) => {
    dispatch(workerInputSlice.setRole(id));
  };

  const handleOutletSelect = (id: string) => {
    dispatch(workerInputSlice.setOutlet(id));
  };

  const handlePasswordChange = (newPassword: string) => {
    dispatch(workerInputSlice.setPassword(newPassword));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(workerInputSlice.setEmail(e.target.value));
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
      alert("Please fill all fields correctly.");
      return;
    }

    const confirmAction = window.confirm("Are you sure you want to submit?");
    if (confirmAction) {
      console.log("Form data submitted", {
        firstName,
        lastName,
        email,
        password,
        file,
        selectedRoleUuid,
        selectedOutletUuid,
      });
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
  };
};

export default UseCreateWorker;
