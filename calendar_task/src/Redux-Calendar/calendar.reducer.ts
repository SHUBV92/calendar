import { CHOOSEDATE, CANCEL } from "./calendar.types";

const INITIAL_STATE = {
  chosendate: '20-09-2021',
};

const reducer = (state = INITIAL_STATE , action:any) => {
  switch (action.type) {
    case CHOOSEDATE:
      return {
        ...state,
        chosendate: '16/08/1992',
      };

    case CANCEL:
      return {
        ...state,
        chosendate: '00-00-0000',
      };
      default: return state;
  }
};

export default reducer;
