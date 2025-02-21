import { useEffect, useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownSelectProps<T> {
  data: T[];
  lable: string;
  valueKey: keyof T;
  labelKey: keyof T;
  onChange: (value: string) => void;
}

const DropdownSelect = <T extends object>({
  data,
  lable,
  valueKey,
  labelKey,
  onChange,
}: DropdownSelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(lable);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: string, label: string) => {
    setSelectedLabel(label);
    onChange(value);
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
    <div ref={dropdownRef} className="relative w-full">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="flex items-center justify-start w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700"
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
          className="z-10 absolute mt-1 bg-gray-100 divide-y divide-gray-100 rounded-lg shadow-sm w-full"
          role="menu"
        >
          <ul className="py-2 text-sm text-gray-700">
            {data.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() =>
                    handleSelect(
                      item[valueKey] as string,
                      item[labelKey] as string
                    )
                  }
                  className="block capitalize w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  {item[labelKey] as string}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
