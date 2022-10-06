import * as ActionType from '../ActionType';

const initval = {
    cart: [],
    count: 0
}

export const cartReducer = (state = initval, action) => {
    console.log(action.type,action.payload.cart);
    switch (action.type) {
        case ActionType.ADD_CART:
            if(state.count == 0 ){
                let cartInit = {
                    id : action.payload.id,
                    services : 1
                }
            }else{
                let check = false;
                state.cart.map((c,i) => {
                    if(c.id === action.payload.id){
                        state.cart[i].services++;
                        check = true;
                    }
                })
                if(!check){
                    let CartValue = {
                        ...state,
                        id : action.payload.id,
                        services : 1 
                    }
                    state.cart.push(CartValue)
                }
            }
            return {
                ...state,   
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