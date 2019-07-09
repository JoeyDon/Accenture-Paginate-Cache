export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const REQUEST_NEXT_PAGE = "REQUEST_NEXT_PAGE";
export const GO_NEXT_PAGE = "GO_NEXT_PAGE";

export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const UPDATE_CACHE_INDEX = "UPDATE_CACHE_INDEX";

// export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const requestApiData = () => {
  console.log("Process - Action");
  return { type: REQUEST_API_DATA };
};

export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const onNextPage = currentPageIndex => {
  console.log("nextpage in action");
  console.log(currentPageIndex);
  return { type: REQUEST_NEXT_PAGE };
};

export const onPreviousPage = () => {
  console.log("previous in action");
  return { type: PREVIOUS_PAGE };
};

export const updateNewIndexToCache = index => {
  console.log("updateNewIndexToCache ACTION", index);
  return { type: UPDATE_CACHE_INDEX, index };
};
