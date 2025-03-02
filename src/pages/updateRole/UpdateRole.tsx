import ConfirmationAlert from "../../components/alert/ConfirmationAlert";
import ErrorAlert from "../../components/alert/ErrorAlert";
import SuccessAlert from "../../components/alert/SuccessAlert";
import { InputField } from "../../components/Input/InputField";
import UseUpdateRole from "./UseUpdateRole";

const UpdateRole = () => {
  const {
    handleChange,
    handleConfirm,
    nameRole,
    showErrorInput,
    handleConfirmAction,
    handleCancelAction,
    showConfirmation,
    errorUpdate,
    successUpdate,
  } = UseUpdateRole();

  const errorMessage = showErrorInput || errorUpdate;
  const successMessage = successUpdate;
  return (
    <div>
      {errorMessage && (
        <ErrorAlert message={errorUpdate || "Role name is required."} />
      )}
      {successMessage && <SuccessAlert message={successMessage} />}

      {showConfirmation && (
        <ConfirmationAlert
          message="Are you sure you want to submit?"
          onCancel={handleCancelAction}
          onConfirm={handleConfirmAction}
        />
      )}
      <form className="flex flex-col gap-5">
        <InputField
          id="roleName"
          label="Role Name"
          onChange={handleChange}
          placeholder="Enter role name"
          value={nameRole || ""}
        />
        <button
          className="bg-[#2563EB] text-[#2563EB] bg-opacity-20 px-10 py-[5px] rounded-lg font-bold text-lg text-center"
          onClick={handleConfirm}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRole;
