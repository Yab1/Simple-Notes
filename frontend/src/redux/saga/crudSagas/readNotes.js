import { call, put, takeLatest } from "redux-saga/effects";
import { dbStart, dbSucceeded, dbFailure } from "@/redux/slices";
import { sagaActions } from "@/constants";

function* readNotesSaga() {
  try {
    yield put(dbStart());

    const response = yield call(fetch, import.meta.env.VITE_FETCH_API_TARGET);

    if (!response.ok) throw new Error("Failed to fetch notes");

    const data = yield call([response, "json"]);

    yield put(dbSucceeded(data));
  } catch (error) {
    yield put(dbFailure(error.message));
  }
}

function* watchFetchNotesRequest() {
  yield takeLatest(sagaActions.READ_NOTES, readNotesSaga);
}

export default watchFetchNotesRequest;
