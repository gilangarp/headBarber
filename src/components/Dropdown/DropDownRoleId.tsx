import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownItem {
  id: number;
  name: string;
}

interface DropdownProps {
  data: DropdownItem[];
  handle: (id: number) => void;
  buttonLabel: string;
}

const DropDownRoleId = ({ data, handle, buttonLabel }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(buttonLabel);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (id: number, label: string) => {
    setSelectedLabel(buttonLabel);
    handle(id);
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
        className="w-full  text-sm font-medium text-gray-900 bg-white border border-gray-600 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 px-5 py-2.5 text-center inline-flex items-center"
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
              <li key={item.id}>
                <button
                  onClick={() => handleSelect(item.id, item.name)}
                  className="block capitalize w-full px-4 py-2 text-left hover:bg-gray-100"
                  role="menuitem"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownRoleId;
