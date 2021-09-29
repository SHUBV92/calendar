import { useState } from "react";

import moment from "moment";

const Calendar = () => {
  const [dateObject, setDateObject] = useState<Object>(moment());

  const firstDayOfMonth = () => {
    const dateobject = dateObject;
    const firstDay = moment(dateobject).startOf("month").format("d");
    return firstDay;
  };

  const blanks = [];

  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<td className="calendar-day empty">{""}</td>);
  }

  const weekdayshort = moment.weekdaysShort();

  const weekdayshortname = weekdayshort.map((day) => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });

  return (
    <div>
      <h2>Calendar</h2>
      {weekdayshortname}
    </div>
  );
};

export default Calendar;
