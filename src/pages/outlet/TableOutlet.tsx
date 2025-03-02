import { Link } from "react-router-dom";
import UseOutlet from "./UseOutlet";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { hasPermission, Role } from "../../utils/access";

const TableOutlet = () => {
  const { outlets, handleDelete, role } = UseOutlet();
  return (
    <div className="overflow-auto ">
      <table className="w-full text-base text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-primary-100">
          <tr className="text-nowrap">
            <th scope="col" className="text-sm px-4 py-3 border-l">
              Outlet Name
            </th>
            <th scope="col" className="text-sm  px-4 py-3 border-l">
              Outlet Code
            </th>
            <th scope="col" className="text-sm px-4 py-3 border-l">
              address
            </th>
            {hasPermission(role as Role, "create:outlet") && (
              <th scope="col" className="text-sm px-4 py-3 border-l">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {outlets.map((data) => (
            <tr key={data.uuid} className="border-b hover:bg-gray-100">
              <th scope="row" className="border-l border-gray-300">
                <Link
                  to={`/dashboard/outlet/${data.uuid}`}
                  className="flex items-center px-4 py-2 font-medium text-black whitespace-nowrap truncate"
                >
                  {data.outletName}
                </Link>
              </th>

              <td className="px-4 py-2 border-l">
                <span className="text-black font-medium px-2 py-0.5 rounded">
                  {data.outletCode}
                </span>
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap border-l">
                <div className="flex items-center">{data.address}</div>
              </td>
              {hasPermission(role as Role, "create:outlet") && (
                <td className="px-4 py-2 flex justify-end gap-5 font-medium text-gray-900 whitespace-nowrap border-l">
                  <Link to={`/dashboard/outlet/setting/${data.uuid}`}>
                    <CiEdit className="w-6 h-6" />
                  </Link>
                  <button onClick={() => handleDelete(data.uuid)}>
                    <MdDeleteOutline className="w-6 h-6" />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOutlet;
