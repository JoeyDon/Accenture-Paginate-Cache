import {
  call,
  put,
  takeEvery,
  takeLatest,
  select,
  all
} from "redux-saga/effects";
import {
  REQUEST_API_DATA,
  receiveApiData,
  updateLastItemIndex,
  REQUEST_NEXT_PAGE,
  GO_NEXT_PAGE,
  UPDATE_CACHE_INDEX
} from "./actions";

import {
  PAGE_SIZE,
  MAX_CACHE_PAGES,
  INITIAL_CACHE_PAGES
} from "../src/settings/settings";

import { fetchData } from "./api";

function* getApiData() {
  try {
    const state = yield select();
    console.log(state);

    // Initialize counts to call from API.
    let numbersToGrab = 0;

    // Perform initial cache, or fetch more caches based on (data.length in store).
    /* Formula:
       Initial cache: 
       INITIAL_CACHE_PAGES * PAGE_SIZE
       E.g. 5 * 12 = 60. 
       60 cards to cache initially.

       Fetch more to prepare:
       (state.cacheReducer + MAX_CACHE_PAGES) * PAGE_SIZE
       E.g. ( 5 + 8 ) * 12 = 156. 
       156 cards to cache when this function is fired.(When user visit the page 4)
    */
    state.dataReducer.length === 0
      ? (numbersToGrab = INITIAL_CACHE_PAGES * PAGE_SIZE)
      : (numbersToGrab = (state.cacheReducer + MAX_CACHE_PAGES) * PAGE_SIZE);

    // Perform API call. fetchData() is in api.js
    const data = yield call(fetchData, numbersToGrab);

    // data[0] is the X-Total-Count header, update to store.
    yield put(updateLastItemIndex(data[0]));

    // Update data to store.
    yield put(receiveApiData(data.slice(1)));
  } catch (e) {
    console.log(e);
  }
}

function* OnNextPageAsync() {
  // Update pagination to store
  yield put({ type: GO_NEXT_PAGE });

  const state = yield select();
  const { paginationReducer, cacheReducer } = state;

  // Check if user hits the last cached page
  // e.g. User click on 'Next' on page 4,
  // then current page (paginationReducer) is 5,
  // if then current page (paginationReducer) === last cache page(cacheReducer)
  // fetch more cards to cache.
  if (paginationReducer === cacheReducer) {
    console.log("This is the end of cached page, now pulling more");
    yield getApiData();

    yield put({ type: UPDATE_CACHE_INDEX });
    console.log("Finished fetching more, and cache index updated");
  }
}

// Watch for API Call
function* watchAPIRequest() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

// Watch for 'Next Page' button
function* watchOnNextPageAsync() {
  yield takeEvery(REQUEST_NEXT_PAGE, OnNextPageAsync);
}

export default function* rootSaga() {
  yield all([watchAPIRequest(), watchOnNextPageAsync()]);
}
