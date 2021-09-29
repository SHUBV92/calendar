import { CANCEL, CHOOSEDATE } from "./calendar.types";

export const chooseDate = () => {
  return {
    type: CHOOSEDATE,
  };
};

export const cancelChoosing = () => {
  return {
    type: CANCEL,
  };
};
