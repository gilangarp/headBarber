import { FaPlus, FaUndo } from "react-icons/fa";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import UseOutlet from "../outlet/UseOutlet";
import UseSchedule from "./UseSchedule";
import { hasPermission, Role } from "../../utils/access";
import Search from "../../components/Input/SearchInput";
import { CiSearch } from "react-icons/ci";

const TableHeader = () => {
  const { outlets } = UseOutlet();
  const {
    months,
    handleRoleSelect,
    handleOutletSelect,
    handleMonthSelect,
    handleAddSchedule,
    searchQuery,
    handleSearchChange,
    handleSearchSubmit,
    role,
    roles,
    onReset,
  } = UseSchedule();

  return (
    <section className="w-full bg-primary-100 shadow-md">
      <div className="flex flex-col items-center justify-between py-3 px-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <Search
          value={searchQuery}
          onChange={handleSearchChange}
          onSearch={handleSearchSubmit}
          icon={<CiSearch />}
        />

        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 lg:w-auto lg:flex-row lg:space-y-0 lg:items-center lg:space-x-3 ml-auto">
          {hasPermission(role as Role, "create:schedule") && (
            <button
              type="button"
              onClick={handleAddSchedule}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800"
            >
              <FaPlus className="h-3.5 w-3.5 mr-2" />
              Add Schedule
            </button>
          )}
          <div className="flex items-center w-full space-x-3 md:w-auto">
            <div className="w-36">
              <DropdownSelect
                data={roles}
                labelKey="name"
                valueKey="id"
                lable="Role"
                onChange={handleRoleSelect}
              />
            </div>
            {hasPermission(role as Role, "view:schedule") && (
              <div className="w-36">
                <DropdownSelect
                  data={outlets}
                  labelKey="outletCode"
                  valueKey="uuid"
                  lable="Outlet"
                  onChange={handleOutletSelect}
                />
              </div>
            )}
          </div>
          <div className="flex items-center w-full space-x-3 md:w-auto">
            <div className="w-36">
              <DropdownSelect
                data={months}
                labelKey="name"
                valueKey="id"
                lable="Month"
                onChange={handleMonthSelect}
              />
            </div>
            <button
              type="button"
              onClick={onReset}
              className="flex items-center justify-center px-2 py-2 rounded-full text-sm font-medium text-red-500 bg-white hover:bg-red-50 "
            >
              <FaUndo className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableHeader;
