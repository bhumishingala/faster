import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";
import { cartReducer } from "./Cart_Reducer";
import { categoryReducer } from "./Category_reduex";
// import { CounterReducer } from "./Counter_Reducer";
import { productReducer } from "./Products_Reducer";

export const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer,
    category : categoryReducer,
    products : productReducer,
    // counter : CounterReducer,
    cart : cartReducer
})