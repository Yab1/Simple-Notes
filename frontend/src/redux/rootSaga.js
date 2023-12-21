import { all } from "redux-saga/effects";
import { watchFetchNotesRequest } from "./saga/crudSagas";

function* rootSaga() {
  yield all([watchFetchNotesRequest()]);
}

export default rootSaga;
