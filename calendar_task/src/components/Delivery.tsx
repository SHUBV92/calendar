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
  const chosenDate = date ? localStorage.getItem("chosendate") : new Date();

  return (
    <DeliveryContainer>
      <h2>Chosen your delivery day: </h2>
      <strong>Delivery is always free</strong>
      {chosenDate}
      <p>
        <FontAwesomeIcon icon={faTruck} />
        Earliest delivery
      </p>
      <Buttons onClick={onClick}>
        <>
          <FontAwesomeIcon icon={faCalendar} />
          Change
        </>
      </Buttons>
    </DeliveryContainer>
  );
};

export default ChosenDeliveryDate;
