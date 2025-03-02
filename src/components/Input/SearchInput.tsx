import React from "react";
import { InputField } from "./InputField";

interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  onButtonClick?: () => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "Search...",
  onSearch,
  value,
  onChange,
  icon,
  onButtonClick,
}) => {
  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="w-full relative">
      <InputField
        id="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        icon={icon}
        onButtonClick={onButtonClick || handleSearch}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
