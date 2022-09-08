import { all } from "redux-saga/effects";
import { SignUpSaga } from "./auth.saga";

export function* rootSaga(){
    yield all([
        SignUpSaga()
    ])
}