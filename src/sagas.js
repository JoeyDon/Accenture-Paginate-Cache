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
    //console.log("get api in saga triggered");
    // const data = yield call(fetchData, 60);
    const state = yield select();
    console.log("Saga - before fire reducer func");
    const countsToCall =
      state.cacheReducer === initialCachePages
        ? initialCachePages * pageSize
        : (state.cacheReducer + maxCachePages) * pageSize;
    console.log(countsToCall);
    const data = yield call(fetchData, countsToCall);

    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* OnNextPageAsync() {
  const stateAfter = yield select();
  console.log("Saga - after fire reducer func");
  console.log(stateAfter);
  const { paginationReducer, cacheReducer } = stateAfter;

  if (paginationReducer === cacheReducer) {
    console.log("the end of page cached, pulling more");

    yield put({ type: UPDATE_CACHE_INDEX });
    yield getApiData();
    console.log("5 triggered and get api finished");
  }

  yield put({ type: GO_NEXT_PAGE });
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
