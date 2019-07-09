export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const PUSH_CACHE_INDEX = "PUSH_CACHE_INDEX"



// export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const requestApiData = () => { 
    console.log('Process - Action')
    return {type: REQUEST_API_DATA}
};

export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const onNextPage = (currentPageIndex) => {
    console.log('nextpage in action')
    console.log(currentPageIndex)
    return { type: NEXT_PAGE }
}

export const onPreviousPage = () => {
    console.log('previous in action')
    return { type: PREVIOUS_PAGE }
}

export const onPushNewIndexToCache = (index) => {
    return { type: PUSH_CACHE_INDEX, index }
}