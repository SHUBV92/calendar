import { DeliveryContainer } from "./Delivery.styles";
import Card from "./card/Card";
import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTruck } from "@fortawesome/free-solid-svg-icons";

interface Dates {
  onClick: MouseEventHandler;
}

const ChosenDeliveryDate = ({ onClick }: Dates) => {
  const chosenDate = localStorage.getItem("chosenDate");

  return (
    <Card variant={"primary"}>
      <DeliveryContainer>
        <h2>Chosen your delivery day</h2>
        <strong className="strong">Delivery is always free</strong>
        <div className="delivery">
          <div className="info">
            <p>{chosenDate}</p>
            <p>
              <FontAwesomeIcon icon={faTruck} />
              Earliest delivery
            </p>
          </div>
          <button onClick={onClick} className="change-button">
            <div>
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div>
              Change <i className="arrow right"></i>
            </div>
          </button>
        </div>
      </DeliveryContainer>
    </Card>
  );
};

export default ChosenDeliveryDate;
