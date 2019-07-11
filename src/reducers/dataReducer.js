import { RECEIVE_API_DATA } from "../actions/actions";

/**
 * @function dataReducer
 * @param {array} state - Array of whole cached cards.
 * @param {string} type - action to be reduced.
 * @param {array} data - Array of whole cached cards from API.
 * @returns {array} - Updated array of whole cached cards.
 */
export default (state = [], { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};
