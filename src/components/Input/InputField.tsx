import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  onButtonClick?: () => void;
}

export const InputField = ({
  id,
  label,
  placeholder,
  required = false,
  type = "text",
  value,
  onChange,
  icon,
  onButtonClick,
}: InputFieldProps) => {
  return (
    <div className="w-full relative">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>

      <div className="relative w-full">
        <input
          type={type}
          id={id}
          className=" text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />

        {onButtonClick && (
          <button
            type="button"
            onClick={onButtonClick}
            className="absolute right-1 top-1/2 transform -translate-y-1/2  px-2 py-2 "
            aria-label="Button action"
          >
            {icon && <span className="text-black text-lg">{icon}</span>}
          </button>
        )}
      </div>
    </div>
  );
};
