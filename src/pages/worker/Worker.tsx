import TableHeader from "./TableHeader";
import TableWorker from "./TableWorker";

const Worker = () => {
  return (
    <div className="flex flex-col gap-2 mx-auto ">
      <TableHeader />
      <TableWorker />
    </div>
  );
};

export default Worker;
