import { REQ_COUNT_UP } from "../actions";

export default (state = 0, { type }) => {
  switch (type) {
    // case REQUEST_NEXT_PAGE:
    case REQ_COUNT_UP:
      return state + 1;
    default:
      return state;
  }
};
