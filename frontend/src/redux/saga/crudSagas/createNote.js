import { call, put, takeLatest, select } from "redux-saga/effects";
import { dbStart, dbSucceeded, dbFailure } from "@/redux/slices";
import { sagaActions } from "@/constants";
import { getToken } from "@/redux/slices";

function* createNoteSaga({ data }) {
  try {
    yield put(dbStart());

    const token = yield select(getToken);

    const response = yield call(
      fetch,
      import.meta.env.VITE_API_FETCH_NOTES_ENDPOINT,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
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
