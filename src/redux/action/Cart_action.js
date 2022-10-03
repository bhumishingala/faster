import * as ActionType from '../ActionType';

export const getCart = (data) => (dispatch) => {
    // console.log(data);
    dispatch({ type: ActionType.GET_CART, payload: data })
}

export const addCart = (data) => (dispatch) => {
    dispatch({ type: ActionType.ADD_CART, payload: data })
    console.log(data);
}