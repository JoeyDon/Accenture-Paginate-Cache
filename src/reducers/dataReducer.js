import { RECEIVE_API_DATA } from "../actions";

// This reducer is for ***the whole bunch of cards cached data***
export default (state = [], { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      console.log("Process - Reducer - Switch - return to state.");
      return data;
    default:
      return state;
  }
};
