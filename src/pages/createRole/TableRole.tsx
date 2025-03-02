import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import ConfirmationAlert from "../../components/alert/ConfirmationAlert";
import UseTableRole from "./UseTableRole";

const TableRole = () => {
  const {
    roles,
    showConfirmation,
    handleDelete,
    handleCancelAction,
    handleConfirmAction,
  } = UseTableRole();
  return (
    <div className="overflow-auto ">
      {showConfirmation && (
        <ConfirmationAlert
          message={`are you sure to delete?`}
          onCancel={handleCancelAction}
          onConfirm={handleConfirmAction}
        />
      )}
      <table className="w-full text-base text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-primary-100">
          <tr className="text-nowrap">
            <th
              style={{ width: "5%" }}
              scope="col"
              className="text-sm  px-4 py-3 border-l"
            >
              No
            </th>
            <th
              style={{ width: "45%" }}
              scope="col"
              className="text-sm px-4 py-3 border-l"
            >
              Role
            </th>
            <th
              style={{ width: "45%" }}
              scope="col"
              className="text-sm px-4 py-3 border-l border-r"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {roles.map((data, index) => (
            <tr key={data.id} className="border-b hover:bg-gray-100">
              <th scope="row" className="border-l text-center border-gray-300">
                {index + 1}
              </th>

              <td className="px-4 py-2 border-l">
                <h1 className="text-black font-medium ">{data.name}</h1>
              </td>
              <td className="px-4 py-2 flex justify-end gap-5 font-medium text-gray-900 whitespace-nowrap border-l">
                <Link to={`/dashboard/role/setting/${data.id}`}>
                  <CiEdit className="w-6 h-6" />
                </Link>
                <button onClick={() => handleDelete(data.id)}>
                  <MdDeleteOutline className="w-6 h-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRole;
