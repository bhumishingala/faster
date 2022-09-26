import * as ActionType from '../ActionType';

const initval = {
    isLoading: false,
    Products: [],
    error: ''
}

export const productReducer = (state = initval, action) => {
    console.log(action.type, action);
    switch (action.type) {
        case ActionType.GET_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                Products: action.payload,
                error: ''
            }
        case ActionType.ADD_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                Products: state.Products.concat(action.payload),
                error: ''
            }
        case ActionType.ERROR_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                Products: [],
                error: action.payload
            }
        case ActionType.DETETE_PRODUCTS :
            return {
                ...state,
                isLoading: false,
                Products: state.Products.filter((f) => f.id !== action.payload),
                error: ''
            }
        case ActionType.UPDATE_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                Products: state.Products.map((pro) => {
                    if (pro.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return pro;
                    }
                })
            }
        default:
            return state
    }
}