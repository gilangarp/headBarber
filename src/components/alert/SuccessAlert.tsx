import { BsInfoCircle } from "react-icons/bs";

interface SuccessAlertProps {
  message: string;
}

const SuccessAlert = ({ message }: SuccessAlertProps) => {
  return (
    <div
      id="alert-border-3"
      className=" flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 "
      role="alert"
    >
      <BsInfoCircle className="shrink-0 w-4 h-4" />
      <div className="ms-3 text-sm font-medium">{message}</div>
    </div>
  );
};

export default SuccessAlert;
