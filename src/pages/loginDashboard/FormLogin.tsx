import { useState } from "react";
import { InputField } from "../../components/Input/InputField";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { EmailInputField } from "../../components/Input/EmailInput";
import UseLoginDashboard from "./UseLoginDashboard";
import ErrorAlert from "../../components/alert/ErrorAlert";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const { handleChange, handleSubmit, error, formData } = UseLoginDashboard();
  return (
    <section className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Sign in account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <EmailInputField
              id="email"
              label="Email Address"
              placeholder="name@headbarber.com"
              required={true}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <InputField
              id="password"
              label="Password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              required
              onButtonClick={togglePasswordVisibility}
              icon={showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            />
          </div>

          <button
            type="submit"
            className="w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign in
          </button>
          {error && <ErrorAlert message={error} />}
        </form>
      </div>
    </section>
  );
};

export default FormLogin;
