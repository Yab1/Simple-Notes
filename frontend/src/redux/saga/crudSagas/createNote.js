import { call, put, takeLatest } from "redux-saga/effects";
import { dbStart, dbSucceeded, dbFailure } from "@/redux/slices";
import { sagaActions } from "@/constants";

function* createNoteSaga({ data }) {
  try {
    yield put(dbStart());

    const response = yield call(fetch, import.meta.env.VITE_FETCH_API_TARGET, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = yield call([response, "json"]);

    if (!response.ok) throw Error(json.error);

    yield put(dbSucceeded([json]));
  } catch (error) {
    console.log(error);
    yield put(dbFailure(error.message));
  }
}

function* watchCreateNoteRequest() {
  yield takeLatest(sagaActions.CREATE_NOTE, createNoteSaga);
}

export default watchCreateNoteRequest;
