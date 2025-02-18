import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import TableWorker from "./TableWorker";
import DropdownRole from "../../components/Dropdown/DropdownRole";
import DropdownOutlet from "../../components/Dropdown/DropdownOutlet";
import { workerInputSlice } from "../../store/workerSlice";
import { useEffect } from "react";
import { getAllRoleThunk } from "../../actions/roleAction";
import { isOwner } from "../../utils/access";

const Worker = () => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const handleAddWorker = () => {
    navigate("/dashboard/worker/add");
  };
  const data = [
    { uuid: "1", code: "Item 1" },
    { uuid: "2", code: "Item 2" },
    { uuid: "3", code: "Item 3" },
  ];

  const { role } = useStoreSelector((state) => state.loginDashboard);
  const { roles } = useStoreSelector((state) => state.getAllRole);
  useEffect(() => {
    dispatch(getAllRoleThunk());
  }, [dispatch]);

  const handleRoleSelect = (id: number) => {
    dispatch(workerInputSlice.setRole(id));
  };

  const handleOutletSelect = (id: string) => {
    dispatch(workerInputSlice.setOutlet(id));
  };

  return (
    <div className="flex flex-col gap-5 px-4 mx-auto max-w-screen-2xl lg:px-12">
      <div className="flex flex-col lg:flex-row justify-end gap-5">
        <div className="flex gap-5">
          <div className="w-44">
            <DropdownOutlet
              buttonLabel="Outlet Code"
              data={data}
              handle={handleOutletSelect}
            />
          </div>
          <div className="w-44">
            <DropdownRole
              buttonLabel="Role"
              data={roles}
              handle={handleRoleSelect}
            />
          </div>
        </div>

        <div>
          {isOwner(role ?? "") && (
            <Button
              iconPosition="right"
              icon={<BsFillPersonVcardFill />}
              label="Add Worker"
              onClick={handleAddWorker}
              style="text-nowrap"
            />
          )}
        </div>
      </div>

      <TableWorker />
    </div>
  );
};

export default Worker;
