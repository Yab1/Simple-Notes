import { put, takeLatest } from "redux-saga/effects";
import SagaActions from "@/constants/sagaActions";
import { dbStart, dbFailure } from "@/redux/slices/notesSlice";

function* updateNoteSaga({ noteId, data }) {
  try {
    yield put(dbStart());

    console.log(noteId);
    console.log(data);
  } catch (error) {
    yield put(dbFailure(error.message));
  }
}

function* watchUpdateNoteRequest() {
  yield takeLatest(SagaActions.UPDATE_NOTE, updateNoteSaga);
}

export default watchUpdateNoteRequest;
