import { UPDATE_CACHE_INDEX } from "../actions";
import { initialCachePages } from "../settings/settings";

export default (state = initialCachePages, { type, newIndexToCache }) => {
  switch (type) {
    case UPDATE_CACHE_INDEX:
      console.log(newIndexToCache);
      return newIndexToCache;
    default:
      return state;
  }
};
