import { UPDATE_CACHE_INDEX } from "../actions/actions";
import { INITIAL_CACHE_PAGES, MAX_CACHE_PAGES } from "../settings/settings";

/**
 * @function cacheReducer
 * @param {int} state - Number of initial pages to cache.
 * @param {string} type - action to be reduced.
 * @returns {int} - Total cached pages.
 */
export default (state = INITIAL_CACHE_PAGES, { type }) => {
  switch (type) {
    case UPDATE_CACHE_INDEX:
      return state + MAX_CACHE_PAGES;
    default:
      return state;
  }
};
