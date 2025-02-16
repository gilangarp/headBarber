import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { BsFillPersonVcardFill } from "react-icons/bs";

const Worker = () => {
  const navigate = useNavigate();

  const handleAddWorker = () => {
    navigate("/dashboard/worker/add");
  };

  return (
    <div>
      <Button
        iconPosition="right"
        icon={<BsFillPersonVcardFill />}
        label="add Worker"
        onClick={handleAddWorker}
      />
    </div>
  );
};

export default Worker;
