import { useParams } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { useEffect } from "react";
import { getByIdWorkerThunk } from "../../actions/workerAction";

const DetailWorker = () => {
  const dispatch = useStoreDispatch();
  const { id } = useParams<{ id: string }>();

  const { token } = useStoreSelector((state) => state.loginDashboard);
  const { worker } = useStoreSelector((state) => state.getByIdWorker);

  console.log(id);
  useEffect(() => {
    if (id && token) {
      dispatch(getByIdWorkerThunk({ token, uuid: id }));
    }
  }, [dispatch, token, id]);
  return (
    <div>
      <h1>{worker?.fullName}</h1>
    </div>
  );
};

export default DetailWorker;
