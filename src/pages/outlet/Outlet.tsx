import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Button from "../../components/button/Button";
import { useStoreSelector } from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";
import { isOwnerOrManager } from "../../utils/access";

const Outlet = () => {
  const navigate = useNavigate();

  const handleAddWorker = () => {
    navigate("/dashboard/outlet/add");
  };

  const { role } = useStoreSelector((state) => state.loginDashboard);

  return (
    <div>
      {isOwnerOrManager(role ?? "") && (
        <Button
          iconPosition="right"
          icon={<HiOutlineBuildingOffice2 />}
          label="Add Outlet"
          onClick={handleAddWorker}
        />
      )}
    </div>
  );
};

export default Outlet;
