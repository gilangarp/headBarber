import FileUpload from "../../components/Input/FileUpload";
import { InputField } from "../../components/Input/InputField";
import { PasswordValidation } from "../../components/Input/PasswordValidation";
import { EmailInputField } from "../../components/Input/EmailInput";
import ButtonFull from "../../components/Button/Button";
import UseCreateWorker from "./UseCreateWorker";
import DropDownRoleId from "../../components/Dropdown/DropDownRoleId";
import DropDownOutletUuid from "../../components/Dropdown/DropDownOutletUuid";

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
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <DropDownOutletUuid
          buttonLabel="Outlet Code"
          data={data}
          handle={handleOutletSelect}
        />
        <DropDownRoleId
          buttonLabel="Role"
          data={roles}
          handle={handleRoleSelect}
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
    </div>
  );
};

export default CreateWorker;
