import { call, put, takeLatest } from "redux-saga/effects";
import { dbStart, noteDeleted, dbFailure } from "@/redux/slices";
import { sagaActions } from "@/constants";

function* deleteNoteSaga({ noteId }) {
  try {
    yield put(dbStart());

    const response = yield call(
      fetch,
      import.meta.env.VITE_API_FETCH_NOTES_ENDPOINT + "/" + noteId,
      {
        method: "DELETE",
      }
    );
    const json = yield call([response, "json"]);

    if (!response.ok) throw Error(json.error);

    yield put(noteDeleted(json._id));
  } catch (error) {
    console.log(error);
    yield put(dbFailure(error.message));
  }
}

function* watchDeleteNoteRequest() {
  yield takeLatest(sagaActions.DELETE_NOTE, deleteNoteSaga);
}

export default watchDeleteNoteRequest;
