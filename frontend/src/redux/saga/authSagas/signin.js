import { call, put, takeLatest } from "redux-saga/effects";
import { authStart, authSucceeded, authFailure } from "@/redux/slices";
import { sagaActions } from "@/constants";

function* signinSaga({ credentials }) {
  try {
    yield put(authStart());

    console.log(credentials);
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* watchSigninRequest() {
  yield takeLatest(sagaActions.SIGNIN_USER, signinSaga);
}

export default watchSigninRequest;
