import { call, all, takeEvery, takeLatest, put } from 'redux-saga/effects'
import * as ActionType from '../ActionType';
import { SignInApi, SignOutApi, SignUpApi } from '../../common/api/Auth.api';
import { setAlert } from '../action/alert_action';
import { signedInAction, signedOutAction } from '../action/auth_action';

function* Sign_Up(action) {
   try {
      const user = yield call(SignUpApi, action.payload);
      yield put(setAlert({text : user.payload , color : "success"}))
      console.log(user);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
    yield put(setAlert({text : e.payload , color : "error"}))
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* Sign_in(action){
  try{
    const user = yield call(SignInApi , action.payload);
    yield put(signedInAction(user))
    history.push('/');
    yield put(setAlert({text : user.payload , color : "success"}))
    console.log(user);
  }catch(e){
    yield put(setAlert({text : e.payload , color : "error"}))
    console.log(e);
  }
}

function* Sign_out(action){
  try{
    const user = yield call(SignOutApi, action.payload)
    yield put(signedOutAction(user));
    history.push('/');
    yield put(setAlert({text : user.payload  , color : "success"}));
    console.log(user);
  }catch(e){
    yield put(setAlert({text : e.payload , color : "error"}))
    console.log(e);
  }
}

function* watchSignup() {
  yield takeEvery(ActionType.SIGNUP_USER, Sign_Up);
}

function* watchSignin(){
  yield takeEvery(ActionType.SIGNIN_USER , Sign_in);
}

function* watchSignout(){
  yield takeEvery(ActionType.SIGNOUT_USER ,Sign_out);
}

export function* SignUpSaga(){
    yield all([
        watchSignup(),
        watchSignin(),
        watchSignout()
    ])
}