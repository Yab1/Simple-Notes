import { call, put, takeLatest, select } from "redux-saga/effects";
import { dbStart, noteDeleted, dbFailure } from "@/redux/slices";
import { sagaActions } from "@/constants";
import { getToken } from "@/redux/slices";

function* deleteNoteSaga({ noteId }) {
  try {
    yield put(dbStart());

    const token = yield select(getToken);

    const response = yield call(
      fetch,
      import.meta.env.VITE_API_FETCH_NOTES_ENDPOINT + "/" + noteId,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const json = yield call([response, "json"]);

    if (!response.ok) throw Error(json.error);

    yield put(noteDeleted(json._id));
  } catch (error) {
    yield put(dbFailure(error.message));
  }
}

function* watchDeleteNoteRequest() {
  yield takeLatest(sagaActions.DELETE_NOTE, deleteNoteSaga);
}

export default watchDeleteNoteRequest;
