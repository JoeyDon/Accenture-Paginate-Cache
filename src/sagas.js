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
  REQUEST_NEXT_PAGE,
  GO_NEXT_PAGE,
  UPDATE_CACHE_INDEX
} from "./actions";
import {
  pageSize,
  maxCachePages,
  initialCachePages
} from "../src/settings/settings";
import { fetchData } from "./api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData() {
  try {
    const numbersToGrab = initialCachePages * pageSize;
    const data = yield call(fetchData, numbersToGrab);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* getMoreData() {
  try {
    const state = yield select();
    const numbersToGrab = (state.cacheReducer + maxCachePages) * pageSize;
    const data = yield call(fetchData, numbersToGrab);
    yield put(receiveApiData(data));
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
