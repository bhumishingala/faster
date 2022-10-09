import * as ActionType from '../ActionType';

export const addCart = (data) => (dispatch) => {
    dispatch({ type: ActionType.ADD_CART, payload: data})
}

export const deleteCart = (data) => (dispatch) => {
    console.log("data");
    dispatch({type : ActionType.DETELE_CART , payload : data})
}

export const incrementAction = (data) => (dispatch) => {
    dispatch({type : ActionType.INCREMENT_COUNTER ,payload : data})
}

export const decrementAction = (data) => (dispatch) => {
    dispatch({type : ActionType.DECREMENT_COUNTER,payload : data})
}