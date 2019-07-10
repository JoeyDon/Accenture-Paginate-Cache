import { UPDATE_LASTITEM_INDEX } from "../actions";
import { pageSize} from '../settings/settings'

export default (state = 1, { type,index }) => {
  switch (type) {
    case UPDATE_LASTITEM_INDEX:
      return Math.ceil(index / pageSize);
    default:
      return state;
  }
};
