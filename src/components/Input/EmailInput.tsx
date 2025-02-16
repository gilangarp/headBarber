import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EmailInputField = ({
  id,
  label,
  placeholder,
  required = false,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="email"
        id={id}
        className="text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
