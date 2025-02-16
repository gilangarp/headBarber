import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  style?: string;
}
const Button = ({ label, onClick, icon, iconPosition, style }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 text-[#2563EB] bg-[#2563EB] bg-opacity-20 px-10 py-2 rounded-lg ${style}`}
    >
      {icon && iconPosition === "left" && (
        <span className="text-lg mr-2">{icon}</span>
      )}{" "}
      <h1 className=" font-bold text-lg text-center">{label}</h1>
      {icon && iconPosition === "right" && (
        <span className="text-xl ml-2">{icon}</span>
      )}
    </button>
  );
};

export default Button;
