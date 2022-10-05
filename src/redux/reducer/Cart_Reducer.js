import * as ActionType from '../ActionType';

const initval = {
    isLoading: false,
    cart: [],
    error: ''
}

export const cartReducer = (state = initval, action) => {
    console.log(action.type, action);
    switch (action.type) {
        case ActionType.ADD_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.concat(action.payload),
                error: ''
            }
        case ActionType.INCREMENT_COUNTER:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload.id) {
                        return { ...c, services: c.services + 1 }
                    }
                    return c;
                }),
                error: ''

            }
        case ActionType.DECREMENT_COUNTER:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload.id) {
                        return { ...c, services: c.services - 1 }
                    }
                    return c;
                }),
                error: ''

            }
        // if(action.type === "INCREMENT_COUNTER"){

        // }
        case ActionType.DETELE_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.filter((c) => c.id !== action.payload),
                error: ''
            }
        default:
            return state;
    }
}