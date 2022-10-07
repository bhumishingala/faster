import * as ActionType from '../ActionType';

const initval = {
    cart: [],
}

export const cartReducer = (state = initval, action) => {
    console.log("cartReducercartReducer", action.type, action.payload, state.cart);
    switch (action.type) {
        case ActionType.ADD_CART:
            let c = state.cart.find((c) => c.id === action.payload.id)
            if (c) {
                c.services++;
                return {
                    ...state,
                    cart: state.cart.map((a) => {
                        if (a.id === c.id) {
                            return c
                        } else {
                            return a
                        }
                    })
                }
            } else {
                return {
                    ...state,
                    cart: state.cart.concat(action.payload)
                }
            }
        case ActionType.INCREMENT_COUNTER:
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

        case ActionType.CHECKOUT_CART:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state;
    }
}