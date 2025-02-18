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

const DropdownOutlet = ({ data, handle, buttonLabel }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(buttonLabel);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (uuid: string, label: string) => {
    handle(uuid);
    setSelectedLabel(label);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside of it
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

  // Keyboard navigation support
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleDropdown();
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative w-full"
      ref={dropdownRef}
      onKeyDown={handleKeyDown} // Allow keyboard interaction for the dropdown
      tabIndex={0} // Make the dropdown focusable
    >
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-black capitalize bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
        type="button"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="dropdown"
      >
        {selectedLabel}
        <IoIosArrowDown className="w-2.5 h-2.5 ms-3" />
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44"
          role="menu"
        >
          <ul className="py-2 text-sm text-gray-700">
            {data.map((item) => (
              <li key={item.uuid}>
                <button
                  onClick={() => handleSelect(item.uuid, item.code)}
                  className="block capitalize w-full px-4 py-2 text-left hover:bg-gray-100"
                  role="menuitem"
                  aria-selected={selectedLabel === item.code ? "true" : "false"} // Dynamically set aria-selected
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

export default DropdownOutlet;
