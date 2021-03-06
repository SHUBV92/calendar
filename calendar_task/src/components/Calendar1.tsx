import { connect } from 'react-redux';
import Card from './card/Card';

import { cancelChoosing, chooseDate } from '../Redux-Calendar/calendar.actions';

interface ChooseDateFromCalendar {
  handleDate: any;
  date: any;
  chosenDate: any;
}

const Calendar = (props: any) => {
  console.log('Chosen Date Redux', props.chosenDate);

  // set calendar value to todays date
  const currentdate = new Date();
  const datetime =
    currentdate.getFullYear() +
    '-' +
    (currentdate.getMonth() + 1) +
    '-' +
    currentdate.getDate().toString();

  const handleInputChange = (event: any) => {
    localStorage.setItem('chosenDate', props.chosendate);
    // setChosenDate(event.currentTarget.value)
    // handleDate(event.currentTarget.value)
  };
  return (
    <Card backgroundColor={'green'}>
      <div className='Calendar'>
        <p>Chosen Date: {props.chosendate}</p>
        <input
          type='date'
          id='delivery'
          name='delivery-date'
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
  console.log('mapStateProps:', state.calendar.chosendate);
  return {
    chosendate: state.calendar.chosendate,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    cancelChoosing: () => dispatch(cancelChoosing()),

    chooseDate: () => dispatch(chooseDate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
