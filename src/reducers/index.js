import { combineReducers } from "redux";

import dataReducer from "./dataReducer";
import paginationReducer from "./paginationReducer";
import cacheReducer from "./cacheReducer";

export default combineReducers({
  dataReducer,
  paginationReducer,
  cacheReducer
});
