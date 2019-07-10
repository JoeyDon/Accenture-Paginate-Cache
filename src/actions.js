export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const REQUEST_NEXT_PAGE = "REQUEST_NEXT_PAGE";
export const GO_NEXT_PAGE = "GO_NEXT_PAGE";

export const GO_PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const UPDATE_CACHE_INDEX = "UPDATE_CACHE_INDEX";

export const UPDATE_LASTITEM_INDEX = "UPDATE_LASTITEM_INDEX";


// export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const requestApiData = () => {
  console.log("Process - Action");
  return { type: REQUEST_API_DATA };
};

export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const onNextPage = () => {
  return { type: REQUEST_NEXT_PAGE };
};

export const onPreviousPage = () => {
  console.log("previous in action");
    return { type: GO_PREVIOUS_PAGE };
};

export const updateNewIndexToCache = index => {
  console.log("updateNewIndexToCache ACTION", index);
  return { type: UPDATE_CACHE_INDEX, index };
};
export const updateLastItemIndex = (index) => {
    return { type: UPDATE_LASTITEM_INDEX, index };
};
