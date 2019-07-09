import { PUSH_CACHE_INDEX} from '../actions'
import { initialsedCachePages } from '../settings/settings'

export default (state = initialsedCachePages, { type, newIndexToCache }) => {
  switch (type) {
    case PUSH_CACHE_INDEX:
      console.log(type, newIndexToCache)
      return [...state, newIndexToCache];
    default:
      return state;
  }
};
