import * as ActionType from '../ActionType';

const initval = {
    cart: [],
    count: 0
}

export const cartReducer = (state = initval, action) => {
    console.log(state.cart,action.payload);
    switch (action.type) {
        case ActionType.ADD_CART:
            return {
                ...state,
                cart: state.cart.concat(action.payload),
            }
        case ActionType.INCREMENT_COUNTER:
            state.count++
            return {
                ...state,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload) {
                        return {
                            id: c.id,
                            services: c.services + 1
                        }
                    } else {
                        return c;
                    }
                }).filter((c) => c.services !== 0)
            }
        case ActionType.DECREMENT_COUNTER:
            state.count--
            return {
                ...state,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload) {
                        return {
                            id: c.id,
                            services: c.services - 1
                        }
                    } else {
                        return c;
                    }
                }).filter((c) => c.services !== 0)
            }
        case ActionType.DETELE_CART:
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload)
            }
        default:
            return state;
    }
}