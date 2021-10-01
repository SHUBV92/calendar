import { useState } from "react";
import Calendar from "react-calendar";
import "./FinalCalendar.css";
import "react-calendar/dist/Calendar.css";

const FinalCalendar = () => {
  const [date, setDate] = useState<any>(new Date());

  const setDateToLocalStorage = () => {
    localStorage.setItem("chosenDate", date.toDateString());
    alert(`You have chosen ${date.toDateString()} for your next delivery`);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-box">
        <Calendar onChange={setDate} value={date} />
      </div>
      {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start: </span> {date[0].toDateString()}
          &nbsp; |&nbsp;
          <span className="bold">End: </span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          {date.toDateString()}
          <span className="bold">Default Selected Date: </span>
        </p>
      )}
      <button onClick={() => setDateToLocalStorage()} className="button">
        CHANGE DATE
      </button>
    </div>
  );
};

export default FinalCalendar;
