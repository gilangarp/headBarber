import FileUpload from "../../components/Input/FileUpload";
import { InputField } from "../../components/Input/InputField";
import { PasswordValidation } from "../../components/Input/PasswordValidation";
import { EmailInputField } from "../../components/Input/EmailInput";
import ButtonFull from "../../components/button/Button";
import UseCreateWorker from "./UseCreateWorker";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import SuccessAlert from "../../components/alert/SuccessAlert";
import ConfirmationAlert from "../../components/alert/ConfirmationAlert";
import ErrorAlert from "../../components/alert/ErrorAlert";
import UseOutlet from "../outlet/UseOutlet";

const CreateWorker = () => {
  const {
    // Handlers for actions
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
  } = UseCreateWorker();
  const { outlets } = UseOutlet();
  return (
    <div className="flex flex-col gap-3">
      {successMessage && <SuccessAlert message={successMessage} />}
      {errorCreate && <ErrorAlert message={errorCreate} />}
      {showErrorInput && <ErrorAlert message="" />}
      {showConfirmation && (
        <ConfirmationAlert
          message="Are you sure you want to submit?"
          onCancel={handleCancelAction}
          onConfirm={handleConfirmAction}
        />
      )}
      <div className="flex justify-between gap-5">
        <InputField
          id="first_name"
          label="First name"
          placeholder="First Name"
          required
          value={firstName}
          onChange={handleInputChange}
        />
        <InputField
          id="last_name"
          label="Last name"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col w-full lg:flex-row justify-between gap-5">
        <DropdownSelect
          data={outlets}
          lable="Outlet Code"
          labelKey="outletCode"
          valueKey="uuid"
          onChange={handleOutletSelect}
        />
        <DropdownSelect
          data={roles}
          lable="Role"
          labelKey="name"
          valueKey="id"
          onChange={handleRoleSelect}
        />
      </div>
      <PasswordValidation
        password={password}
        error=""
        onPasswordChange={handlePasswordChange}
      />
      <EmailInputField
        id="email"
        label="Email Address"
        placeholder="Enter your email"
        required={true}
        value={email}
        onChange={handleEmailChange}
      />
      <FileUpload file={file} handle={handleFileChange} />
      <div>
        <ButtonFull label="Confirm" onClick={() => setShowConfirmation(true)} />
      </div>
    </div>
  );
};

export default CreateWorker;
