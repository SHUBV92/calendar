// library
import react, { useState } from 'react';
import Calendar from 'react-calendar';
import { setItemFromLocalStorage } from '../../utils/localStorage';

// styling
import './FinalCalendar.css';
import 'react-calendar/dist/Calendar.css';

// reusable components
import Button from '../Button/Button';

interface calendarProps {
  onClose: any;
}

const FinalCalendar = ({ onClose }: calendarProps) => {
  const [date, setDate] = useState<any>(new Date());

  const changeDate = () => {
    setItemFromLocalStorage(
      'chosenDate',
      date.toDateString(),
      true,
      `Your chosen delivery date ${date.toDateString()}`
    );
  };

  return (
    <>
      <div className='calendar-container'>
        <div className='calendar-box'>
          <Calendar onChange={setDate} value={date} />
        </div>
        {date.length > 0 ? (
          <p className='text-center'>
            <span className='bold'>Start: </span> {date[0].toDateString()}
            &nbsp; |&nbsp;
            <span className='bold'>End: </span> {date[1].toDateString()}
          </p>
        ) : (
          <p className='text-center'>{date.toDateString()}</p>
        )}
        <div className='calendar-button'>
          <Button
            onClick={() => onClose(false)}
            backgroundColor={'lightgrey'}
            color={'black'}
            border={'none'}
          >
            CANCEL DON'T CHANGE
          </Button>
          <Button
            onClick={() => changeDate()}
            backgroundColor={'white'}
            color={'orange'}
            border={'2px solid orange'}
          >
            CHANGE DATE
          </Button>
        </div>
      </div>
    </>
  );
};

export default FinalCalendar;
