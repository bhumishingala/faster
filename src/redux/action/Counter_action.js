import * as ActionType from '../ActionType';

export const incrementACtion = (data) => (dispatch) => {
    dispatch({type : ActionType.INCREMENT_COUNTER ,payload : data})
}

export const decrementAction = (data) => (dispatch) => {
    dispatch({type : ActionType.DECREMENT_COUNTER,payload : data})
}