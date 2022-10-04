import * as ActionType from '../ActionType';

const initval = {
    isLoading: false,
    cart: [],
    error: ''
}

export const cartReducer = (state = initval, action) => {
    console.log(state.cart.filter((c) => c.id !== action.payload));
    switch (action.type) {
        case ActionType.ADD_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.concat(action.payload),
                error: ''
            }
        case ActionType.DETELE_CART : 
            return {
                ...state,
                isLoading : false,
                cart : state.cart.filter((c) => c.id !== action.payload),
                error : ''
            }
        default:
            return state;
    }
}