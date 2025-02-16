import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownItem {
  uuid: string;
  code: string;
}

interface DropdownProps {
  data: DropdownItem[];
  handle: (uuid: string) => void;
  buttonLabel: string;
}

const Dropdown = ({ data, handle, buttonLabel }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(buttonLabel);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (uuid: string, label: string) => {
    handle(uuid);
    setSelectedLabel(label);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
        type="button"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="dropdown"
      >
        {selectedLabel} {/* Display the selected label */}
        <IoIosArrowDown className="w-2.5 h-2.5 ms-3" />
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44"
        >
          <ul className="py-2 text-sm text-gray-700">
            {data.map((item) => (
              <li key={item.uuid}>
                <button
                  onClick={() => handleSelect(item.uuid, item.code)}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  {item.code}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
