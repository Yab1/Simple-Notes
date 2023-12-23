import { all } from "redux-saga/effects";
import { watchSignupRequest, watchSigninRequest } from "./saga/authSagas";
import {
  watchCreateNoteRequest,
  watchFetchNotesRequest,
  watchUpdateNoteRequest,
  watchDeleteNoteRequest,
} from "./saga/crudSagas";

function* rootSaga() {
  yield all([
    watchSignupRequest(),
    watchSigninRequest(),
    watchCreateNoteRequest(),
    watchFetchNotesRequest(),
    watchUpdateNoteRequest(),
    watchDeleteNoteRequest(),
  ]);
}

export default rootSaga;
