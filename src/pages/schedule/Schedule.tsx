import TableSchedule from "../../components/table/TableSchedule";
import TableHeader from "./TableHeader";
import UseSchedule from "./UseSchedule";

const Schedule = () => {
  const { schedule, date } = UseSchedule();

  return (
    <div className="flex flex-col gap-2">
      <TableHeader />
      <TableSchedule days={date} scheduleData={schedule} />
    </div>
  );
};

export default Schedule;
