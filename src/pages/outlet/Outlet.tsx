import { hasPermission, Role } from "../../utils/access";
import TableHeader from "./TableHeader";
import TableOutlet from "./TableOutlet";
import UseOutlet from "./UseOutlet";

const Outlet = () => {
  const { role } = UseOutlet();
  return (
    <div className="flex flex-col gap-2 mx-auto ">
      {hasPermission(role as Role, "create:outlet") && <TableHeader />}
      <TableOutlet />
    </div>
  );
};

export default Outlet;
