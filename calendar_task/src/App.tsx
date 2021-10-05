import { useState, createContext } from 'react';
import GlobalStyle from './globalStyles';
import Theme from './Theme';

import Modal from './components/Modal/Modal';
import ChosenDeliveryDate from './components/Delivery';
import FinalCalendar from './components/Calendar2/FinalCalendar';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Theme>
        <GlobalStyle />
        <ChosenDeliveryDate onClick={() => setShow(true)} />
        <Modal
          title={'choose date'}
          onClose={() => setShow(false)}
          show={show}
          buttonName='Shubs'
          button={false}
        >
          <FinalCalendar onClose={setShow} />
        </Modal>
      </Theme>
    </>
  );
};

export default App;
