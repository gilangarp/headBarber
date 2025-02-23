import { useParams } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { useEffect } from "react";
import { getByIdWorkerThunk } from "../../actions/workerAction";
import {
  getAllDateThunk,
  getAllScheduleThunk,
} from "../../actions/scheduleAction";

const UseDetailWorker = () => {
  const dispatch = useStoreDispatch();
  const { id } = useParams<{ id: string }>();

  const { token } = useStoreSelector((state) => state.loginDashboard);
  const { worker } = useStoreSelector((state) => state.getByIdWorker);

  const { schedule } = useStoreSelector((state) => state.getAllSchedule);
  const { date } = useStoreSelector((state) => state.getAllDate);

  const now = new Date();
  const monthNow = now.getMonth() + 1;

  useEffect(() => {
    if (token && id) {
      dispatch(
        getAllScheduleThunk({
          token,
          filter: {
            userId: id,
          },
        })
      );
    }
  }, [dispatch, token, id]);

  useEffect(() => {
    if (monthNow) {
      dispatch(getAllDateThunk({ month: monthNow.toString() }));
    }
  }, [dispatch, monthNow]);

  useEffect(() => {
    if (id && token) {
      dispatch(getByIdWorkerThunk({ token, uuid: id }));
    }
  }, [dispatch, token, id]);

  return { worker, date, schedule };
};

export default UseDetailWorker;
