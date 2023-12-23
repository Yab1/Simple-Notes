import { call, put, takeLatest } from "redux-saga/effects";
import { authStart, authSucceeded, authFailure } from "@/redux/slices";
import { sagaActions } from "@/constants";

function* signupSaga({ credentials }) {
  try {
    yield put(authStart());

    const response = yield call(
      fetch,
      import.meta.env.VITE_API_USER_SIGNUP_ENDPOINT,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );

    const json = yield call([response, "json"]);

    if (!response.ok) throw Error(json.error);

    localStorage.setItem("daisy-notes-user", JSON.stringify(json));
    yield put(
      authSucceeded({
        json,
        msg: "Your account has been created successfully. Thank you for joining us.",
      })
    );
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* watchSignupRequest() {
  yield takeLatest(sagaActions.SIGNUP_USER, signupSaga);
}

export default watchSignupRequest;
