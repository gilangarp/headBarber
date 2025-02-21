import { FaPlus } from "react-icons/fa";
import { isOwner } from "../../utils/access";
import UseOutlet from "./UseOutlet";

const TableHeader = () => {
  const { handleAddOutlet, role } = UseOutlet();
  return (
    <section className="w-full bg-primary-100 shadow-md">
      <div className="flex flex-col items-center justify-between py-3 px-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3 ml-auto">
          {isOwner(role ?? "") && (
            <button
              type="button"
              onClick={handleAddOutlet}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800"
            >
              <FaPlus className="h-3.5 w-3.5 mr-2" />
              Add Outlet
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TableHeader;
