import { CiSearch } from "react-icons/ci";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import Search from "../../components/Input/SearchInput";
import { hasPermission, Role } from "../../utils/access";
import UseOutlet from "../outlet/UseOutlet";
import UseSchedule from "../schedule/UseSchedule";
import UseWorker from "./UseWorker";
import { FaPlus, FaUndo } from "react-icons/fa";

const TableHeader = () => {
  const {
    handleAddWorker,
    role,
    roles,
    handleRoleSelect,
    handleOutletSelect,
    onReset,
    handleAddRole,
  } = UseWorker();
  const { searchQuery, handleSearchChange, handleSearchSubmit } = UseSchedule();
  const { outlets } = UseOutlet();
  return (
    <section className="grid p-3 grid-cols-1 grid-rows-2 lg:grid-cols-[1fr,auto,auto] lg:grid-rows-1 lg:right-0 gap-3 w-full bg-primary-100 shadow-md">
      <div className="w-full">
        <Search
          value={searchQuery}
          onChange={handleSearchChange}
          onSearch={handleSearchSubmit}
          icon={<CiSearch />}
        />
      </div>
      {hasPermission(role as Role, "create:worker/role") && (
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleAddWorker}
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800"
          >
            <FaPlus className="h-3.5 w-3.5 mr-2" />
            Add Worker
          </button>
          <button
            type="button"
            onClick={handleAddRole}
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800"
          >
            <FaPlus className="h-3.5 w-3.5 mr-2" />
            Add Role
          </button>
        </div>
      )}

      <div className="grid grid-cols-[1fr,1fr,auto] gap-3">
        <DropdownSelect
          data={roles}
          labelKey="name"
          valueKey="name"
          lable="Role"
          onChange={handleRoleSelect}
        />

        <DropdownSelect
          data={outlets}
          labelKey="outletCode"
          valueKey="outletCode"
          lable="Outlet"
          onChange={handleOutletSelect}
        />

        <div className="flex items-center ">
          <button
            type="button"
            onClick={onReset}
            className="border-4 p-2 bg-white rounded-full"
          >
            <FaUndo className="h-3.5 w-3.5 text-red-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TableHeader;
