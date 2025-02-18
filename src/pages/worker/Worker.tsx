import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { useStoreSelector } from "../../hooks/useStore";

const Worker = () => {
  const navigate = useNavigate();

  const handleAddWorker = () => {
    navigate("/dashboard/worker/add");
  };

  const { role } = useStoreSelector((state) => state.loginDashboard);

  return (
    <div>
      {role === "owner" && (
        <Button
          iconPosition="right"
          icon={<BsFillPersonVcardFill />}
          label="Add Worker"
          onClick={handleAddWorker}
        />
      )}
    </div>
  );
};

export default Worker;
