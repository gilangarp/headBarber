import { isManager } from "../../utils/access";
import TableHeader from "./TableHeader";
import TableOutlet from "./TableOutlet";
import UseOutlet from "./UseOutlet";

const Outlet = () => {
  const { role } = UseOutlet();
  return (
    <div className="flex flex-col gap-2 mx-auto ">
      {isManager(role ?? "") && <TableHeader />}
      <TableOutlet />
    </div>
  );
};

export default Outlet;
