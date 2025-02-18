const TableWorker = () => {
  const data = [
    {
      uuid: "9b072c5a-8df2-49f5-94bc-9112b1fff83d",
      fullName: "Isabella Marie",
      image: "http://localhost:8000/uploads/file-1739799103930-335641227.jpeg",
      role: "owner",
      outletCode: "hdbr01",
      createdAt: "2025-02-17",
    },
    {
      uuid: "0f4ecec2-9663-4e0c-9968-5f3f7aa0d7bf",
      fullName: "Baylee Camilla",
      image: "http://localhost:8000/uploads/file-1739837787405-231734132.jpg",
      role: "cashier",
      outletCode: "hdbr01",
      createdAt: "2025-02-18",
    },
  ];
  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          <th scope="col" className="px-4 py-3">
            Full Name
          </th>
          <th scope="col" className="px-4 py-3">
            Outlet Code
          </th>
          <th scope="col" className="px-4 py-3">
            Role
          </th>
          <th scope="col" className="px-4 py-3">
            Created At
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((worker) => (
          <tr className="border-b hover:bg-gray-100">
            <th
              scope="row"
              className="flex items-center px-4 py-2 font-medium text-black whitespace-nowrap "
            >
              <img
                src={worker.image}
                alt={worker.fullName}
                className="h-8 w-8 rounded-full object-cover mr-3"
              />
              {worker.fullName}
            </th>
            <td className="px-4 py-2">
              <span className="text-black text-xs font-medium px-2 py-0.5 rounded">
                {worker.outletCode}
              </span>
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
              <div className="flex items-center">{worker.role}</div>
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">
              {worker.createdAt}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableWorker;
