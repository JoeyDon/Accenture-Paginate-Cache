import { UPDATE_CACHE_INDEX } from "../actions";
import { INITIAL_CACHE_PAGES, MAX_CACHE_PAGES } from "../settings/settings";

export default (state = INITIAL_CACHE_PAGES, { type }) => {
  switch (type) {
    case UPDATE_CACHE_INDEX:
      return state + MAX_CACHE_PAGES;
    default:
      return state;
  }
};
