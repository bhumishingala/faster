import * as ActionType from '../ActionType';
import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { history } from '../../history';
import { setAlert } from './alert_action';

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

export const CheckOutAction = (data) => async(dispatch)=> {
    try{
        const checkRef = await addDoc(collection(db, "cheoutUser"), data);
          console.log("Document written with ID: ", checkRef.id);
          dispatch({type : ActionType.CHECKOUT_CART,payload : {id : checkRef.id,...data}})
    }catch(e) {
        setAlert({ text: e.payload, color: "error" })
        console.log(e);
    }
}