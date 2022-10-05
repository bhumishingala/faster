// import * as ActionType from '../ActionType';

// const initval = {
//     counter : 1
// }

// export const CounterReducer = (state=initval,action) => {
//     switch(action.type){
//         case ActionType.INCREMENT_COUNTER :
//             return{
//                 ...state,
//                 counter : state.counter.map((inc) => {
//                     if(inc.id === action.payload){
//                         // return {...inc , quntity : inc.services + 1 };
//                         return(
//                             console.log({...inc , quntity : inc.services + 1 })
//                         )
//                     }
//                     return inc;
//                 })
//             }
//         case ActionType.DECREMENT_COUNTER :
//             return{
//                 ...state,
//                 counter : state.counter-1
//             }
//         default :
//             return state
//     }
// }