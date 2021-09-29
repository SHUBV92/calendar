import { combineReducers } from "redux";

import calendarReducer from "../Calendar/calendar.reducer";

console.log('Root-reducer', calendarReducer)

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

export default rootReducer;
