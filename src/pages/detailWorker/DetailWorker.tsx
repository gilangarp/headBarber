import TableSchedule from "../../components/table/TableSchedule";
import UseDetailWorker from "./UseDetailWorker";

const DetailWorker = () => {
  const { worker, date, schedule } = UseDetailWorker();
  return (
    <div className="flex flex-col gap-10">
      <div className="flex text-neutral-800 flex-col items-center justify-center gap-5">
        <img
          className="h-96 w-96 object-cover rounded-full ring-offset-4 ring-4 ring-primary-200"
          src={worker?.image}
          alt={worker?.fullName}
        />
        <div className="flex flex-col items-center justify-center gap-2 font-medium">
          <h1 className="text-3xl font-semibold">{worker?.fullName}</h1>
          <h2 className="text-xl">{worker?.role}</h2>
          {worker?.role !== "owner" && (
            <h1 className="text-xl">
              Working at {worker?.outletName}, Code: {worker?.outletCode}
            </h1>
          )}
          <h1 className="text-lg">Joined on: {worker?.createdAt}</h1>
        </div>
      </div>
      <div>
        <TableSchedule days={date} scheduleData={schedule} />
      </div>
    </div>
  );
};

export default DetailWorker;
