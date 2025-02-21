import { Link } from "react-router-dom";
import UseWorker from "./UseWorker";

const TableWorker = () => {
  const { worker } = UseWorker();
  return (
    <div className="overflow-auto ">
      <table className="w-full text-base text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-primary-100">
          <tr className="text-nowrap">
            <th scope="col" className="text-sm px-4 py-3 border-l">
              Full Name
            </th>
            <th scope="col" className="text-sm  px-4 py-3 border-l">
              Outlet Code
            </th>
            <th scope="col" className="text-sm px-4 py-3 border-l">
              Role
            </th>
            <th scope="col" className="text-sm px-4 py-3 border-l border-r">
              Come To Work
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWorker;
