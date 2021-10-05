import { DeliveryContainer } from './Delivery.styles';
import Card from './card/Card';
import { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTruck } from '@fortawesome/free-solid-svg-icons';

interface Dates {
  onClick: MouseEventHandler;
}

const ChosenDeliveryDate = ({ onClick }: Dates) => {
  const chosenDate = localStorage.getItem('chosenDate');

  return (
    <>
      <Card backgroundColor={'lightgray'} className='primary'>
        <DeliveryContainer>
          <div className='delivery-state'>
            <h2>Chosen your delivery day</h2>
            <strong className='strong'>Delivery is always free</strong>
          </div>
          <div className='delivery-card'>
            <div className='info'>
              <p>{chosenDate}</p>
              <p className='info-message'>
                <FontAwesomeIcon icon={faTruck} />
                <h5>Earliest delivery</h5>
              </p>
            </div>
            <button onClick={onClick} className='change-button'>
              <div>
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div className='change-button-info'>
                Change <i className='arrow right'></i>
              </div>
            </button>
          </div>
        </DeliveryContainer>
      </Card>
    </>
  );
};

export default ChosenDeliveryDate;
