import * as ActionType from '../ActionType';

const initVal = {
    isLoading : false,
    user : null,
    error : ''
}

export const authReducer = (state = initVal, action) => {
    console.log(action.payload);
    switch(action.type){
        case ActionType.SIGNEDIN_USER : 
            return {
                ...state,
                isLoading :false,
                user : action.payload,
                error : ''
            }
        case ActionType.SIGNEDOUT_USER :
            return{
                ...state,
                isLoading : false,
                user :null,
                error : '' 
            }
        default : 
            return state;
    }
}