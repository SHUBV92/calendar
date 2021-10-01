import { useState, createContext } from "react";

import Modal from "./components/Modal/Modal";
import ChosenDeliveryDate from "./components/Delivery";
import FinalCalendar from "./Calendar2/FinalCalendar";

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
        <ChosenDeliveryDate date={date.date} onClick={() => setShow(true)} />
        <Modal title={"choose date"} onClose={() => setShow(false)} show={show}>
          <FinalCalendar />
        </Modal>
      </div>
    </ChosenDateContext.Provider>
  );
};

export default App;
