import { UPDATE_LASTITEM_INDEX } from "../actions/actions";
import { PAGE_SIZE } from "../settings/settings";

/**
 * @function lastpageReducer
 * @param {int} state - Last available *ITEM* index(uncached).
 * @param {string} type - action to be reduced.
 * @param {int} index - Array of whole cached cards from API.
 * @returns {int} - Last available *PAGE* index(uncached).
 */
export default (state = 1, { type, index }) => {
  switch (type) {
    case UPDATE_LASTITEM_INDEX:
      return Math.ceil(index / PAGE_SIZE);
    default:
      return state;
  }
};
