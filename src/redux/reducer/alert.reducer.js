import * as ActionType from '../ActionType';

const initval = {
    text : '',
    color : ''
}

export const alertReducer = (state = initval,action) => {
    switch(action.type){
        case ActionType.SET_ALERT : 
            return{
                ...state,
                text : action.payload.text,
                color : action.payload.color
            }
        case ActionType.RESET_ALERT :
            return{
                ...state,
                text : '',
                color : ''
            }
        default : 
            return state;
    }
}