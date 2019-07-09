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
  const state = yield select();
  console.log("Saga - after fire reducer func");
  console.log(state);
  const { paginationReducer, cacheReducer } = state;

  if (paginationReducer + 1 === cacheReducer) {
    console.log("the end of page cached, pulling more");

    yield getApiData();
    yield put({ type: UPDATE_CACHE_INDEX });
    console.log("5 triggered and get api finished");
  }
  // console.log("current index:", paginationReducer);
  // console.log("current cacheReducer:", cacheReducer);
  // console.log("fire go next page");
  yield put({ type: GO_NEXT_PAGE });

  const stateAfter = yield select();
  console.log(
    "Finished next page, now index is ",
    stateAfter.paginationReducer
  );
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
