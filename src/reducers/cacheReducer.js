import { UPDATE_CACHE_INDEX } from "../actions";
import { initialCachePages, maxCachePages } from "../settings/settings";

export default (state = initialCachePages, { type }) => {
  switch (type) {
    case UPDATE_CACHE_INDEX:
      return state + maxCachePages;
    default:
      return state;
  }
};
