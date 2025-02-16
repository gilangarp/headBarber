import { AiOutlineCloudUpload } from "react-icons/ai";
import { useState } from "react";

interface FileUploadProps {
  file: File | null;
  handle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = ({ file, handle }: FileUploadProps) => {
  const [error, setError] = useState<string>("");

  const validateFile = (file: File | null) => {
    if (file) {
      const validTypes = ["image/svg+xml", "image/png", "image/jpeg"];
      if (!validTypes.includes(file.type)) {
        setError("Invalid file type. Please upload an SVG, PNG, or JPG file.");
      } else {
        setError("");
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    handle(event);
    validateFile(selectedFile);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <AiOutlineCloudUpload className="w-8 h-8 mb-4 text-gray-500" />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG or JPG (MAX. 400x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      {file && !error && (
        <p className="mt-2 text-sm text-gray-700">Selected file: {file.name}</p>
      )}
    </div>
  );
};

export default FileUpload;
