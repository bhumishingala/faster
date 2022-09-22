import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";
import { categoryReducer } from "./Category_reduex";

export const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer,
    category : categoryReducer
})