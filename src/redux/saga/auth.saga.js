import { call, all, takeEvery, takeLatest, put } from 'redux-saga/effects'
import * as ActionType from '../ActionType';
import { history } from '../../history';
import { forGotPasswordApi, SignInApi, SigninWithGoogle, SignOutApi, SignUpApi } from '../../common/api/Auth.api';
import { setAlert } from '../action/alert_action';
import { signedInAction, signedOutAction } from '../action/auth_action';

function* Sign_Up(action) {
  try {
    const user = yield call(SignUpApi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}

function* Sign_in(action) {
  try {
    const user = yield call(SignInApi, action.payload);
    yield put(signedInAction(user))
    history.push('/');
    yield put(setAlert({ text: "Login Is SuccessFully", color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* Sign_out(action) {
  try {
    const user = yield call(SignOutApi, action.payload)
    yield put(signedOutAction(user));
    history.push('/');
    yield put(setAlert({ text: user.payload, color: "success" }));
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* SigninWith_Google(action) {
  try {
    const user = yield call(SigninWithGoogle, action.payload)
    yield put(signedInAction(user))
    history.push('/')
    yield put(setAlert({ text: "Sign In SuccessFully", color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: "error", color: "error" }))
    console.log(e);
  }
}

function* ForgotPass_word(action) {
  try {
    const user = yield call(forGotPasswordApi, action.payload)
    yield put(signedOutAction(user));
    history.push('/');
    yield put(setAlert({ text: user.payload, color: "success" }));
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* watchSignup() {
  yield takeEvery(ActionType.SIGNUP_USER, Sign_Up);
}

function* watchSignin() {
  yield takeEvery(ActionType.SIGNIN_USER, Sign_in);
}

function* watchSignout() {
  yield takeEvery(ActionType.SIGNOUT_USER, Sign_out);
}

function* watchSignInWithgoogle() {
  yield takeEvery(ActionType.SIGNINWITHGOOGLE, SigninWith_Google)
}

function* watchForGotPass() {
  yield takeEvery(ActionType.FORGOTPASS_USER, ForgotPass_word)
}

export function* SignUpSaga() {
  yield all([
    watchSignup(),
    watchSignin(),
    watchSignout(),
    watchForGotPass(),
    watchSignInWithgoogle()
  ])
}