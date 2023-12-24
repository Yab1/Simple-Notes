import { call, put, takeLatest, select } from "redux-saga/effects";
import { dbStart, setNotes, dbFailure } from "@/redux/slices";
import { sagaActions } from "@/constants";
import { getToken } from "@/redux/slices";

function* readNotesSaga() {
  try {
    yield put(dbStart());

    const token = yield select(getToken);

    const response = yield call(
      fetch,
      import.meta.env.VITE_API_FETCH_NOTES_ENDPOINT,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch notes");

    const data = yield call([response, "json"]);

    yield put(setNotes(data));
  } catch (error) {
    yield put(dbFailure(error.message));
  }
}

function* watchFetchNotesRequest() {
  yield takeLatest(sagaActions.READ_NOTES, readNotesSaga);
}

export default watchFetchNotesRequest;
