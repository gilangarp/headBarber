import DropDownOutletCode from "../../components/Dropdown/DropDownOutletCode";
import DropDownRoleName from "../../components/Dropdown/DropDownRoleName";
import { isOwner } from "../../utils/access";
import UseWorker from "./UseWorker";
import { FaPlus, FaUndo } from "react-icons/fa";

const TableHeader = () => {
  const {
    handleAddWorker,
    role,
    roles,
    handleRoleSelect,
    data,
    handleOutletSelect,
    onReset,
  } = UseWorker();
  return (
    <section className="w-full bg-primary-100 shadow-md">
      <div className="flex flex-col items-center justify-between py-3 px-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3 ml-auto">
          {isOwner(role ?? "") && (
            <button
              type="button"
              onClick={handleAddWorker}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800"
            >
              <FaPlus className="h-3.5 w-3.5 mr-2" />
              Add Worker
            </button>
          )}
          <div className="flex items-center w-full space-x-3 md:w-auto">
            <DropDownRoleName
              buttonLabel="Role"
              data={roles}
              handle={handleRoleSelect}
            />
            <DropDownOutletCode
              buttonLabel="Outlet"
              data={data}
              handle={handleOutletSelect}
            />
          </div>
          <div>
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
