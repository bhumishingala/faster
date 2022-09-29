import * as ActionType from '../ActionType';

export const incrementACtion = () => (dispatch) => {
    dispatch({type : ActionType.INCREMENT_COUNTER})
}

export const decrementAction = () => (dispatch) => {
    dispatch({type : ActionType.DECREMENT_COUNTER})
}