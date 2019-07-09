import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "./actions";
import { fetchData } from "./api";
import { delay } from "redux-saga";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  const state = yield select();

  console.log(state)
  try {
    // do api call
    console.log('Process - Saga - watchTrigerd - getApi()')
    const data = yield call(fetchData,60);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  console.log('Process - Saga - EntryPoint')
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
