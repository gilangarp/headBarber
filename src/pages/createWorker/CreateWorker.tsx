import FileUpload from "../../components/Input/FileUpload";
import { InputField } from "../../components/Input/InputField";
import { PasswordValidation } from "../../components/Input/PasswordValidation";
import { EmailInputField } from "../../components/Input/EmailInput";
import ButtonFull from "../../components/Button/Button";
import UseCreateWorker from "./UseCreateWorker";
import DropdownSelect from "../../components/Dropdown/DropdownSelect";

const CreateWorker = () => {
  const {
    handleConfirm,
    handleEmailChange,
    handlePasswordChange,
    handleOutletSelect,
    handleRoleSelect,
    handleFileChange,
    handleInputChange,
    data,
    error,
    firstName,
    lastName,
    password,
    email,
    file,
    roles,
    successMessage,
  } = UseCreateWorker();
  return (
    <div className="flex flex-col gap-3">
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
          data={data}
          lable="Outlet Code"
          labelKey="code"
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
        error={error}
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
        <ButtonFull label="Confirm" onClick={handleConfirm} />
      </div>
      {successMessage && <div className="text-red-500">{successMessage}</div>}
    </div>
  );
};

export default CreateWorker;
