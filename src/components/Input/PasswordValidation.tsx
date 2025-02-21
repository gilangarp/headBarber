import { useState } from "react";
import { InputField } from "./InputField";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface PasswordValidationProps {
  password: string;
  error: string;
  onPasswordChange: (password: string) => void;
}

export const PasswordValidation = ({
  password,
  error,
  onPasswordChange,
}: PasswordValidationProps) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePasswordsMatch = password !== confirmPassword;
  const combinedError = validatePasswordsMatch
    ? "Password tidak cocok!"
    : error;

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  return (
    <form>
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <InputField
          id="password"
          label="Password"
          placeholder="Enter Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          required
          onButtonClick={togglePasswordVisibility}
          icon={showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        />

        <InputField
          id="confirmPassword"
          label="Confirm Password"
          placeholder="Enter Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          onButtonClick={toggleConfirmPasswordVisibility}
          icon={showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        />
      </div>
      {combinedError && (
        <p className="text-red-500 text-sm mt-2">{combinedError}</p>
      )}
    </form>
  );
};
