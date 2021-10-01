import { DeliveryContainer } from "./Delivery.styles";
import Buttons from "./Button";
import Card from "./Card";
import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTruck } from "@fortawesome/free-solid-svg-icons";

interface Dates {
  date: string;
  onClick: MouseEventHandler;
}

const ChosenDeliveryDate = ({ date, onClick }: Dates) => {
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
        {/* <Card variant={"secondary"} >
          <p>
            <FontAwesomeIcon icon={faTruck} />
            {chosenDate}
            Earliest delivery
          </p>
          <Buttons onClick={onClick}>
            <>
              <FontAwesomeIcon icon={faCalendar} />
              Change
            </>
          </Buttons>
        // </Card> */}
      </DeliveryContainer>
    </Card>
  );
};

export default ChosenDeliveryDate;
