import * as ActionType from '../ActionType';

export const addCart = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: ActionType.ADD_CART, payload: data})
}

export const deleteCart = (data) => (dispatch) => {
    console.log("data");
    dispatch({type : ActionType.DETELE_CART , payload : data})
}