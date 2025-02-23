import {
  IDateResponse,
  IWorkScheduleByDateResponse,
} from "../../types/scheduleType";

interface TableScheduleProps {
  days: IDateResponse[];
  scheduleData: IWorkScheduleByDateResponse[];
}

const TableSchedule = ({ days, scheduleData }: TableScheduleProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-base text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 bg-primary-100">
          <tr>
            <th
              scope="col"
              className="text-lg px-4 py-3 border-l w-52 font-medium text-black bg-primary-100 sticky left-0 z-[5] border-b"
            >
              Full Name
            </th>
            {days.map((day) => (
              <th
                key={day.date}
                scope="col"
                className="px-6 py-3 border-b border-gray-300"
              >
                <div className="flex flex-col items-center">
                  <h1 className="text-lg text-black">{day.date}</h1>
                  <h2 className="text-[#98999A]">{day.day}</h2>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((person) => (
            <tr key={person.uuid} className="border-b">
              <th className="px-6 py-2 text-nowrap font-medium text-black sticky left-0 bg-primary-50 z-[5] border-b border-gray-300 shadow-lg">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={person.image}
                    alt={person.fullName}
                  />
                  <div>
                    <h1 className="text-black text-lg w-52">
                      {person.fullName}
                    </h1>
                    <h2 className="text-[#98999A] text-sm ">{person.role}</h2>
                  </div>
                </div>
              </th>
              {(() => {
                let currentShift: string | null = null;
                let colSpan = 0;
                const cells = [];

                days.forEach((day, index) => {
                  const shift =
                    person.schedule.find((item) => item.days.includes(day.date))
                      ?.shift_name ?? null;

                  if (shift === currentShift) {
                    colSpan++;
                  } else {
                    if (currentShift) {
                      cells.push(
                        <td
                          key={`shift-${index}`}
                          colSpan={colSpan}
                          className="text-center"
                        >
                          <div
                            className={`px-2 pb-6 pt-2 rounded text-start ${
                              currentShift === "Morning"
                                ? "bg-[#195DE6] text-[#195DE6] bg-opacity-30"
                                : "bg-[#FFAE02] text-[#FFAE02] bg-opacity-30"
                            }`}
                          >
                            {currentShift}
                          </div>
                        </td>
                      );
                    }

                    if (shift === null) {
                      cells.push(<td key={`empty-${index}`} className=""></td>);
                      currentShift = null;
                      colSpan = 0;
                    } else {
                      currentShift = shift;
                      colSpan = 1;
                    }
                  }
                });

                if (currentShift) {
                  cells.push(
                    <td
                      key={`shift-end`}
                      colSpan={colSpan}
                      className="text-center"
                    >
                      <div
                        className={`px-2 pb-6 pt-2 rounded text-start ${
                          currentShift === "Morning Shift"
                            ? "bg-[#195DE6] text-[#195DE6] bg-opacity-30"
                            : "bg-[#FFAE02] text-[#FFAE02] bg-opacity-30"
                        }`}
                      >
                        {currentShift}
                      </div>
                    </td>
                  );
                }

                return cells;
              })()}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSchedule;
