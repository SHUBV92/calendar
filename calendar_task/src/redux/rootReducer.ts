import { combineReducers } from "redux";

import calendarReducer from "../Redux-Calendar/calendar.reducer";

console.log('Root-reducer', calendarReducer)

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

export default rootReducer;
