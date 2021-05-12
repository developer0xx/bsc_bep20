import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";

import { historyStore } from "./history/reducer";



const reducer = combineReducers({
  routing: routerReducer,
  historyStore,


});

export default reducer;
