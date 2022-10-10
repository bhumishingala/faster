import * as ActionType from '../ActionType';
import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { history } from '../../history';
import { setAlert } from './alert_action';

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