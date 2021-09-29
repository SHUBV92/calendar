import { useState, createContext } from "react";
import Buttons from "./components/Button";
import Modal from "./components/Modal/Modal";
import Calendar from "./Calendar2/Calendar";
import ChosenDeliveryDate from "./components/Delivery";

interface ChosenDate {
  date: string;
}

const ChosenDateContext = createContext<ChosenDate | null>(null);

const todaysDate: ChosenDate = {
  date: new Date().toString(),
};

const App = () => {
  const [date, setDate] = useState(todaysDate);

  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(!show);
  };

  const handleDate = (date: any) => {
    setDate(date);
  };

  return (
    <ChosenDateContext.Provider value={todaysDate}>
      <div className="App">
        <Calendar />
        {/* <button onClick={() => setShow(true)}>Show Modal</button> */}
        {/* <Modal title={"choose date"} onClose={() => setShow(false)} show={show}> */}
        {/* current chosen delivery slot*/}
        {/* <ChosenDeliveryDate date={date.date} onClick={handleModal} /> */}
        {/* calendar component to change the dates */}
        {/* {show && <Calendar handleDate={handleDate} />} */}
        {/* </Modal> */}
      </div>
    </ChosenDateContext.Provider>
  );
};

export default App;
