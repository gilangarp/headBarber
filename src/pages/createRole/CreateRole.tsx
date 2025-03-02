import ErrorAlert from "../../components/alert/ErrorAlert";
import SuccessAlert from "../../components/alert/SuccessAlert";
import FormCreateRole from "./FormCreateRole";
import TableRole from "./TableRole";
import UseCreateRole from "./UseCreateRole";
import UseTableRole from "./UseTableRole";

const CreateRole = () => {
  const { errorCrate, showErrorInput, successCreate } = UseCreateRole();
  const { errorDelete, successDelete } = UseTableRole();

  const errorMessage = errorCrate || errorDelete || "Role name is required.";
  const successMessage = successCreate || successDelete;
  return (
    <div>
      {(showErrorInput || errorCrate || errorDelete) && (
        <ErrorAlert message={errorMessage} />
      )}

      {successMessage && <SuccessAlert message={successMessage} />}
      <div className="flex flex-col gap-5">
        <TableRole />
        <FormCreateRole />
      </div>
    </div>
  );
};

export default CreateRole;
