import TableHeader from "./TableHeader";
import TableWorker from "./TableWorker";

const Worker = () => {
  return (
    <div className="flex flex-col gap-2 px-4 mx-auto max-w-screen-2xl lg:px-12">
      <TableHeader />
      <TableWorker />
    </div>
  );
};

export default Worker;
