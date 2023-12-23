import { call, put, takeLatest } from "redux-saga/effects";
import { authStart, authSucceeded, authFailure } from "@/redux/slices";
import { sagaActions } from "@/constants";

function* signupSaga({ credentials }) {
  try {
    yield put(authStart());

    console.log(credentials);
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* watchSignupRequest() {
  yield takeLatest(sagaActions.SIGNUP_USER, signupSaga);
}

export default watchSignupRequest;
