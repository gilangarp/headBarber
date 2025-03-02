import ConfirmationAlert from "../../components/alert/ConfirmationAlert";
import { InputField } from "../../components/Input/InputField";
import UseCreateRole from "./UseCreateRole";

const FormCreateRole = () => {
  const {
    handleConfirmAction,
    handleCancelAction,
    showConfirmation,
    handleChange,
    handleConfirm,
    nameRole,
    loading,
  } = UseCreateRole();
  return (
    <div>
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
          {loading ? "Submit..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormCreateRole;
