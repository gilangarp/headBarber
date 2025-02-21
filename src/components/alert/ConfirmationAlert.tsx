import { BsInfoCircle } from "react-icons/bs";
import { GoXCircle } from "react-icons/go";

interface ConfirmationAlertProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationAlert = ({
  message,
  onConfirm,
  onCancel,
}: ConfirmationAlertProps) => {
  return (
    <div className="fixed top-12 left-0 right-0 z-50 flex justify-center items-center">
      <div
        id="confirmation-alert"
        className="bg-white shadow-lg rounded-lg border-t-4 border-blue-500 w-80 p-6 flex flex-col items-center"
      >
        <BsInfoCircle className="text-blue-500 w-8 h-8" />
        <div className="mt-4 text-center text-sm font-medium text-gray-800">
          {message}
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
        <button
          onClick={onCancel}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <GoXCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ConfirmationAlert;
