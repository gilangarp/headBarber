import TableHeader from "./TableHeader";
import TableOutlet from "./TableOutlet";

const Outlet = () => {
  return (
    <div className="flex flex-col gap-2 mx-auto ">
      <TableHeader />
      <TableOutlet />
    </div>
  );
};

export default Outlet;
