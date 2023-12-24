import { put, takeLatest, select } from "redux-saga/effects";
import SagaActions from "@/constants/sagaActions";
import { dbStart, dbFailure } from "@/redux/slices/notesSlice";
import { getToken } from "@/redux/slices";

function* updateNoteSaga({ noteId, data }) {
  try {
    yield put(dbStart());

    const token = yield select(getToken);

    console.log(token);
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
