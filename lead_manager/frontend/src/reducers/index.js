import { combineReducers } from "redux";

import asyncAction from "./async/asyncReducer";
import leads from "./leads/leads";

const rootReducer = combineReducers({
  async: asyncAction,
  leads
});

export default rootReducer;
