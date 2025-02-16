const scheduleData = [
  {
    uuid: "19a91a29-c673-47e4-9692-b0fdd71ef060",
    img: "https://media.istockphoto.com/id/472011332/id/foto/kasir-magang-muda-di-supermarket-paruh-waktu-bosan-bijaksana.jpg?s=1024x1024&w=is&k=20&c=j2mDOexSlQB3r8Du75NCPJ9QEZMC6pBMdVs7ejOs4Mw=",
    fullName: "Joe Million ",
    role: "cashier",
    schedule: [
      { date: [1, 2, 4, 5, 6], shift: "Morning" },
      { date: [7, 8, 9, 10], shift: "Afternoon" },
      { date: [12, 13], shift: "Morning" },
      { date: [14, 15, 16, 17, 18, 19, 20], shift: "Afternoon" },
      { date: [21, 23, 24, 25], shift: "Morning" },
      { date: [26, 27, 28], shift: "Afternoon" },
    ],
  },
  {
    uuid: "22f82513-6458-4e26-8572-9d5a1a3d0f07",
    fullName: "Emi Wong",
    role: "cashier",
    img: "https://media.istockphoto.com/id/472011332/id/foto/kasir-magang-muda-di-supermarket-paruh-waktu-bosan-bijaksana.jpg?s=1024x1024&w=is&k=20&c=j2mDOexSlQB3r8Du75NCPJ9QEZMC6pBMdVs7ejOs4Mw=",
    schedule: [
      { date: [1, 2, 3, 4, 5, 6], shift: "Afternoon" },
      { date: [7, 8, 9, 10], shift: "Morning" },
      { date: [11, 12, 13], shift: "Afternoon " },
      { date: [14, 15, 16, 17, 18, 19, 20], shift: "Morning" },
      { date: [21, 22, 23, 24, 25], shift: "Afternoon" },
      { date: [26, 27], shift: "Morning" },
    ],
  },
];

const days = [
  { date: 1, day: "Sat" },
  { date: 2, day: "Sun" },
  { date: 3, day: "Mon" },
  { date: 4, day: "Tue" },
  { date: 5, day: "Wed" },
  { date: 6, day: "Thu" },
  { date: 7, day: "Fri" },
  { date: 8, day: "Sat" },
  { date: 9, day: "Sun" },
  { date: 10, day: "Mon" },
  { date: 11, day: "Tue" },
  { date: 12, day: "Wed" },
  { date: 13, day: "Thu" },
  { date: 14, day: "Fri" },
  { date: 15, day: "Sat" },
  { date: 16, day: "Sun" },
  { date: 17, day: "Mon" },
  { date: 18, day: "Tue" },
  { date: 19, day: "Wed" },
  { date: 20, day: "Thu" },
  { date: 21, day: "Fri" },
  { date: 22, day: "Sat" },
  { date: 23, day: "Sun" },
  { date: 24, day: "Mon" },
  { date: 25, day: "Tue" },
  { date: 26, day: "Wed" },
  { date: 27, day: "Thu" },
  { date: 28, day: "Fri" },
];

const TableSchedule = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right border border-gray-300 text-black">
        <thead className="text-xs text-black bg-white">
          <tr>
            <th
              scope="col"
              className="w-52 px-6 py-4 font-medium text-black text-lg sticky left-0 bg-[#F6FBF5] z-10 border-b border-gray-300 shadow-2xl"
            >
              Name
            </th>
            {days.map((day) => (
              <th
                key={day.date}
                scope="col"
                className="px-6 py-3 border-b border-gray-300 bg-[#F6FBF5]"
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
              <th className="px-6 py-2 text-nowrap font-medium text-black sticky left-0 bg-[#F6FBF5] z-10 border-b border-gray-300 shadow-lg">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={person.img}
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
                    person.schedule.find((item) => item.date.includes(day.date))
                      ?.shift ?? null;

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
