export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const REQUEST_NEXT_PAGE = "REQUEST_NEXT_PAGE";
export const GO_NEXT_PAGE = "GO_NEXT_PAGE";

export const GO_PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const UPDATE_CACHE_INDEX = "UPDATE_CACHE_INDEX";

export const UPDATE_LASTITEM_INDEX = "UPDATE_LASTITEM_INDEX";

export const requestApiData = () => ({ type: REQUEST_API_DATA });

export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const onNextPage = () => ({ type: REQUEST_NEXT_PAGE });

export const onPreviousPage = () => ({ type: GO_PREVIOUS_PAGE });

/**
 * @function updateNewIndexToCache
 * @param {int} index - Total cached pages.
 * @returns {object} - Trigger reducer.
 */
export const updateNewIndexToCache = index => ({
  type: UPDATE_CACHE_INDEX,
  index
});

/**
 * @function updateLastItemIndex
 * @param {int} index - X-Total-Count from the header
 * @returns {object} - Trigger reducer.
 */
export const updateLastItemIndex = index => ({
  type: UPDATE_LASTITEM_INDEX,
  index
});
