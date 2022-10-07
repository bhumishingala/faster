import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";
import { cartReducer } from "./Cart_Reducer";
import { categoryReducer } from "./Category_reduex";
import { productReducer } from "./Products_Reducer";

export const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer,
    category : categoryReducer,
    products : productReducer,
    cart : cartReducer
})