import { GO_NEXT_PAGE, GO_PREVIOUS_PAGE } from "../actions/actions";

/**
 * @function paginationReducer
 * @param {int} state - Current *PAGE* index before reducer.
 * @param {string} type - action to be reduced.
 * @returns {int} - New state of current *PAGE* index (Go to next/previous page).
 */
export default (state = 1, { type }) => {
  switch (type) {
    // case REQUEST_NEXT_PAGE:
    case GO_NEXT_PAGE:
      return state + 1;
    case GO_PREVIOUS_PAGE:
      return state - 1;
    default:
      return state;
  }
};
