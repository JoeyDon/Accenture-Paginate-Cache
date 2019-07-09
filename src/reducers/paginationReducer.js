import { GO_NEXT_PAGE, PREVIOUS_PAGE } from "../actions";

export default (state = 1, { type }) => {
  switch (type) {
    // case REQUEST_NEXT_PAGE:
    case GO_NEXT_PAGE:
      return state + 1;
    case PREVIOUS_PAGE:
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
};
