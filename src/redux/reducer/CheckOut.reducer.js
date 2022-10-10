import * as ActionType from '../ActionType';

const initval = {
    checkUser : null
}

export const checkoutReducer = (state = initval,action) => {
    console.log(action.type,action.payload);
    switch(action.type){
        case ActionType.CHECKOUT_CART :
            return {
                ...state,
                checkUser : action.payload
            }
        default :
            return state
    }
}