import { Link } from "react-router-dom";
import UseWorker from "./UseWorker";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const TableWorker = () => {
  const { worker, handleDelete } = UseWorker();
  return (
    <div className="overflow-auto ">
      <table className="w-full text-base text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-primary-100">
          <tr className="text-nowrap">
            <th
              style={{ width: "30%" }}
              scope="col"
              className="text-sm px-4 py-3 border-l"
            >
              Full Name
            </th>
            <th
              style={{ width: "20%" }}
              scope="col"
              className="text-sm  px-4 py-3 border-l"
            >
              Outlet Code
            </th>
            <th
              style={{ width: "20%" }}
              scope="col"
              className="text-sm px-4 py-3 border-l"
            >
              Role
            </th>
            <th
              style={{ width: "20%" }}
              scope="col"
              className="text-sm px-4 py-3 border-l border-r"
            >
              Come To Work
            </th>
            <th
              style={{ width: "10%" }}
              scope="col"
              className="text-sm px-4 py-3 border-l border-r"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {worker.map((data) => (
            <tr key={data.uuid} className="border-b hover:bg-gray-100">
              <th scope="row" className="border-l border-gray-300">
                <Link
                  to={`/dashboard/worker/${data.uuid}`}
                  className="flex items-center px-4 py-2 font-medium text-black whitespace-nowrap truncate"
                >
                  <img
                    src={data.image}
                    alt={data.fullName}
                    className="h-8 w-8 rounded-full object-cover mr-3"
                  />
                  {data.fullName}
                </Link>
              </th>

              <td className="px-4 py-2 border-l">
                <span className="text-black font-medium px-2 py-0.5 rounded">
                  {data.outletCode}
                </span>
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap border-l">
                <div className="flex items-center">{data.role}</div>
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap border-l border-r">
                {data.createdAt}
              </td>
              <td className="flex items-center justify-end gap-5 px-4 py-2 font-medium text-gray-900 whitespace-nowrap border-l border-r">
                <Link to={`/dashboard/worker/setting/${data.uuid}`}>
                  <CiEdit className="w-6 h-6" />
                </Link>
                <button onClick={() => handleDelete(data.uuid)}>
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

export default TableWorker;
