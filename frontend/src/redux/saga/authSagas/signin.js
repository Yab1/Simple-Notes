import { call, put, takeLatest } from "redux-saga/effects";
import { authStart, authSucceeded, authFailure } from "@/redux/slices";
import { sagaActions } from "@/constants";

function* signinSaga({ credentials }) {
  try {
    yield put(authStart());

    const response = yield call(
      fetch,
      import.meta.env.VITE_API_USER_SIGNIN_ENDPOINT,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );

    const json = yield call([response, "json"]);
    if (!response.ok) throw Error(json.error);

    console.log(json);

    localStorage.setItem("daisy-notes-user", JSON.stringify(json));
    yield put(authSucceeded(json));
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* watchSigninRequest() {
  yield takeLatest(sagaActions.SIGNIN_USER, signinSaga);
}

export default watchSigninRequest;
