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

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData() {
  try {
    const numbersToGrab = INITIAL_CACHE_PAGES * PAGE_SIZE;
    const data = yield call(fetchData, numbersToGrab);

    yield put(updateLastItemIndex(data[0]));
    yield put(receiveApiData(data.slice(1)));
  } catch (e) {
    console.log(e);
  }
}

function* getMoreData() {
  try {
    const state = yield select();
    const numbersToGrab = (state.cacheReducer + MAX_CACHE_PAGES) * PAGE_SIZE;
    const data = yield call(fetchData, numbersToGrab);

    yield put(updateLastItemIndex(data[0]));
    yield put(receiveApiData(data.slice(1)));
  } catch (e) {
    console.log(e);
  }
}

function* OnNextPageAsync() {
  yield put({ type: GO_NEXT_PAGE });

  const state = yield select();
  console.log("Saga - after fire reducer func");
  console.log(state);
  const { paginationReducer, cacheReducer } = state;

  if (paginationReducer === cacheReducer) {
    console.log("the end of page cached, pulling more");
    yield getMoreData();

    yield put({ type: UPDATE_CACHE_INDEX });
    console.log("5 triggered and get api finished");
  }
}

function* watchAPIRequest() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

function* watchOnNextPageAsync() {
  yield takeEvery(REQUEST_NEXT_PAGE, OnNextPageAsync);
}

export default function* rootSaga() {
  yield all([watchAPIRequest(), watchOnNextPageAsync()]);
}
