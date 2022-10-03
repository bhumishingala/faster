import * as ActionType from '../ActionType';

const initval = {
    isLoading: false,
    cart: [],
    error: ''
}

export const cartReducer = (state = initval, action) => {
    switch (action.type) {
        case ActionType.ADD_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.concat(action.payload),
                error: ''
            }
        default:
            return state
    }
}