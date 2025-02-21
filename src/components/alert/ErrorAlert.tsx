import { BsInfoCircle } from "react-icons/bs";

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <div
      id="alert-border-3"
      className=" flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 "
      role="alert"
    >
      <BsInfoCircle className="shrink-0 w-4 h-4" />
      <div className="ms-3 text-sm font-medium">{message}</div>
    </div>
  );
};

export default ErrorAlert;
