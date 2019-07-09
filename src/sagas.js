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
  onReqCountUp,
  updateNewIndexToCache
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
      state.reqCountReducer === 0
        ? initialCachePages * pageSize
        : (state.cacheReducer + maxCachePages) * pageSize;

    const data = yield call(fetchData, countsToCall);

    yield put(receiveApiData(data));
    yield put(onReqCountUp());
  } catch (e) {
    console.log(e);
  }
}

function* OnNextPageAsync() {
  yield put({ type: GO_NEXT_PAGE });

  const stateAfter = yield select();
  console.log("Saga - after fire reducer func");
  console.log(stateAfter);
  const { paginationReducer, cacheReducer } = stateAfter;

  if (paginationReducer === cacheReducer) {
    console.log("the end of page cached, pulling more");
    yield getApiData();
    console.log("5 triggered and get api finished");
    yield put(updateNewIndexToCache(paginationReducer + maxCachePages));
  }
}

function* watchAPIRequest() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

function* watchOnNextPageAsync() {
  yield takeLatest(REQUEST_NEXT_PAGE, OnNextPageAsync);
}

export default function* rootSaga() {
  yield all([watchAPIRequest(), watchOnNextPageAsync()]);
}
