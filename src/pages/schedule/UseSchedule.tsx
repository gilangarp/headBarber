import { useEffect } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { getAllScheduleActions } from "../../store/getAllScheduleSlice";
import {
  getAllDateThunk,
  getAllScheduleThunk,
} from "../../actions/scheduleAction";
import { useNavigate } from "react-router-dom";

const UseSchedule = () => {
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const { schedule, filterSchedule } = useStoreSelector(
    (state) => state.getAllSchedule
  );
  const { token, role } = useStoreSelector((state) => state.loginDashboard);
  const { date } = useStoreSelector((state) => state.getAllDate);
  interface MonthType {
    id: number;
    name: string;
  }

  const handleAddSchedule = () => {
    navigate("/dashboard/schedule/add");
  };

  const handleRoleSelect = (uuid: string) => {
    dispatch(
      getAllScheduleActions.setFilter({ ...filterSchedule, roleId: uuid })
    );
  };

  const handleOutletSelect = (id: string) => {
    dispatch(
      getAllScheduleActions.setFilter({ ...filterSchedule, outletId: id })
    );
  };

  const handleMonthSelect = (id: string) => {
    dispatch(getAllScheduleActions.setFilter({ ...filterSchedule, month: id }));
  };

  const onReset = () => {
    dispatch(getAllScheduleActions.resetFilter());
  };

  const now = new Date();
  const monthNow = now.getMonth() + 1;
  const monthFilter = filterSchedule?.month;
  const month = monthFilter || monthNow;

  useEffect(() => {
    if (token) {
      dispatch(
        getAllScheduleThunk({
          token,
          filter: filterSchedule || {},
        })
      );
    }
  }, [dispatch, token, filterSchedule]);

  useEffect(() => {
    if (month) {
      dispatch(getAllDateThunk({ month: month.toString() }));
    }
  }, [dispatch, month]);

  const months: MonthType[] = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];

  return {
    months,
    handleRoleSelect,
    handleAddSchedule,
    handleOutletSelect,
    handleMonthSelect,
    onReset,
    schedule,
    date,
    role,
  };
};

export default UseSchedule;
