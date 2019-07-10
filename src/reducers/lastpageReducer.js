import { UPDATE_LASTITEM_INDEX } from "../actions";
import { PAGE_SIZE } from "../settings/settings";

// This reducer is for ***the last available page index***
export default (state = 1, { type, index }) => {
  switch (type) {
    case UPDATE_LASTITEM_INDEX:
      return Math.ceil(index / PAGE_SIZE);
    default:
      return state;
  }
};
