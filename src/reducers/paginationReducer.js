import { GO_NEXT_PAGE, GO_PREVIOUS_PAGE } from "../actions";

export default (state = 1, { type }) => {
  switch (type) {
    // case REQUEST_NEXT_PAGE:
    case GO_NEXT_PAGE:
      return state + 1;
    case GO_PREVIOUS_PAGE:
      return state - 1 ;
    default:
      return state;
  }
};
