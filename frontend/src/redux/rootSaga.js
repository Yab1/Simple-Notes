import { all } from "redux-saga/effects";
import {
  watchCreateNoteRequest,
  watchFetchNotesRequest,
  watchUpdateNoteRequest,
  watchDeleteNoteRequest,
} from "./saga/crudSagas";

function* rootSaga() {
  yield all([
    watchCreateNoteRequest(),
    watchFetchNotesRequest(),
    watchUpdateNoteRequest(),
    watchDeleteNoteRequest(),
  ]);
}

export default rootSaga;
