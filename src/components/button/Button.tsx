import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  style?: string;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  textColor?: string;
}
const Button = ({
  label,
  onClick,
  icon,
  iconPosition,
  style,
  bgColor = "bg-[#2563EB] ",
  textColor = "text-[#2563EB]",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center gap-3 ${bgColor} ${textColor} bg-opacity-20 px-10 py-[5px] rounded-lg ${style}`}
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
