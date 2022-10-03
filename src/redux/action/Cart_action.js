import * as ActionType from '../ActionType';

export const addCart = (data) => (dispatch) => {
    dispatch({ type: ActionType.ADD_CART, payload: {id : data.id,ser : data.services} })
    // console.log({id : data.id,ser : data.services ,category : data.category});
}