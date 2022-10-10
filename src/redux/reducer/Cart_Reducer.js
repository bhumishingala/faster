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
            let cIn = state.cart.find((c) => c.id === action.payload)
            if (cIn) {
                cIn.services++;
                return {
                    ...state,
                    cart: state.cart.map((a) => {
                        if (a.id === cIn.id) {
                            return cIn
                        } else {
                            return a
                        }
                    }).filter((a) => a.services !== 0)
                }
            }
        case ActionType.DECREMENT_COUNTER:
            let cDe = state.cart.find((c) => c.id === action.payload)
            if (cDe) {
                cDe.services--;
                return {
                    ...state,
                    cart: state.cart.map((a) => {
                        if (a.id === cDe.id) {
                            return cDe
                        } else {
                            return a
                        }
                    }).filter((a) => a.services !== 0)
                }
            }
        case ActionType.DETELE_CART:
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload)
            }
        case ActionType.EMPTY_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}