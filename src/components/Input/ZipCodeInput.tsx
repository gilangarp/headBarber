import { FaLocationDot } from "react-icons/fa6";

interface ZipCodeInputProps {
  longitude: string;
  latitude: string;
  onLatitudeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLongitudeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ZipCodeInput = ({
  longitude,
  latitude,
  onLatitudeChange,
  onLongitudeChange,
}: ZipCodeInputProps) => {
  return (
    <div className="flex justify-between gap-5">
      <div className="w-full">
        <label
          htmlFor="latitude-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Latitude:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <FaLocationDot className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            id="latitude-input"
            aria-describedby="latitude-helper-text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="e.g. 40.7128"
            pattern="^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$" // Latitude range: -90 to 90
            required
            value={latitude}
            onChange={onLatitudeChange}
          />
        </div>
        <p id="latitude-helper-text" className="mt-2 text-sm text-gray-500">
          Please enter a valid latitude between -90 and 90.
        </p>
      </div>

      <div className="w-full">
        <label
          htmlFor="longitude-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Longitude:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <FaLocationDot className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            id="longitude-input"
            aria-describedby="longitude-helper-text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="e.g. -74.0060"
            pattern="^-?((1[0-7]\d(\.\d+)?)|(180(\.0+)?))$" // Longitude range: -180 to 180
            required
            value={longitude}
            onChange={onLongitudeChange}
          />
        </div>
        <p id="longitude-helper-text" className="mt-2 text-sm text-gray-500">
          Please enter a valid longitude between -180 and 180.
        </p>
      </div>
    </div>
  );
};

export default ZipCodeInput;
