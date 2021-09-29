import { Modal } from "@material-ui/core";
import { useState } from "react";
import { connect } from "react-redux";
import Card from "./Card";

import { cancelChoosing, chooseDate } from "../Calendar/calendar.actions";

interface ChooseDateFromCalendar {
  handleDate: any;
  date: any;
  chosenDate: any;
}

const Calendar = (props: any) => {
  console.log("Chosen Date Redux", props.chosenDate);

  // const [chosenDate, setChosenDate]= useState<String>('')

  // set calendar value to todays date
  const currentdate = new Date();
  const datetime =
    currentdate.getFullYear() +
    "-" +
    (currentdate.getMonth() + 1) +
    "-" +
    currentdate.getDate().toString();

  const handleInputChange = (event: any) => {
    localStorage.setItem("chosenDate", props.chosendate);
    // setChosenDate(event.currentTarget.value)
    // handleDate(event.currentTarget.value)
  };
  return (
    <Card>
      <div className="Calendar">
        <p>Chosen Date: {props.chosendate}</p>
        <input
          type="date"
          id="delivery"
          name="delivery-date"
          value={datetime}
          onChange={(event) => handleInputChange(event)}
          onClick={() => props.chooseDate(props.choosedate)}
        />
        <button
          onClick={props.cancelChoosing}
          onChange={(event) => handleInputChange(event)}
        >
          Cancel booking
        </button>
      </div>
    </Card>
  );
};

// redux
const mapStateToProps = (state: any) => {
  console.log("mapStateProps:", state.calendar.chosendate);
  return {
    chosendate: state.calendar.chosendate,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  // console.log("mapDispatchToProps", state);
  return {
    cancelChoosing: () => dispatch(cancelChoosing()),

    chooseDate: () => dispatch(chooseDate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
