import * as ACtionType from '../ActionType'

export const setAlert = (data) => (dispatch) => {
    dispatch({type : ACtionType.SET_ALERT ,payload : data})
}

export const resetAlert = () => (dispatch) => {
    dispatch({type : ACtionType.RESET_ALERT})
}