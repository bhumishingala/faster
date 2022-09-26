import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../firebase';
import * as ActionType from '../ActionType';

export const getProducts = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, "Products"));
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: ActionType.GET_PRODUCTS, payload: data })
    } catch (error) {
        dispatch(error_Products(error.message))
    }
}

export const addProducts = (data) => async (dispatch) => {
    try {

        let radomNum = Math.floor(Math.random() * 1000000).toString();

        const productsRef = ref(storage, 'Products/' + radomNum);
        uploadBytes(productsRef, data.Prof_img)
            .then((snapshot) => {
                getDownloadURL(ref(storage, snapshot.ref))
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "Products"), {
                            ...data,
                            Prof_img: url,
                            fileName: radomNum
                        });
                        dispatch({
                            type: ActionType.ADD_PRODUCTS, payload: {
                                id: docRef.id,
                                ...data,
                                Prof_img: url
                            }
                        })
                    });
            });
            console.log(data);
    } catch (error) {
        dispatch(error_Products(error.message));
    }
}

export const deleteProducts = (data) => async (dispatch) => {
    try {
        const deletetRef = ref(storage, "Products/" + data.fileName);

        deleteObject(deletetRef)
            .then(async () => {
                await deleteDoc(doc(db, "Products", data.id));
                dispatch({ type: ActionType.DETETE_PRODUCTS, payload: data.id })
            }).catch((error) => {
                dispatch(error_Products(error.message))
            });
    } catch (error) {
        dispatch(error_Products(error.message))
    }
}


export const updateProducts = (data) => async(dispatch) => {
    console.log(data);
    try {
        const productsRef = doc(db, "Products", data.id);
        if (typeof data.Prof_img === "string") {
            await updateDoc(productsRef, {
                name: data.name,
            });
            dispatch({ type: ActionType.UPDATE_PRODUCTS, payload: data })
        } else {
            const delproductRef = ref(storage, "Products/" + data.fileName);
            let radomNum = Math.floor(Math.random() * 1000000).toString();
            const upcategoryRef = ref(storage, 'Products/' + radomNum);

            deleteObject(delproductRef)
                .then(() => {
                    uploadBytes(upcategoryRef, data.Prof_img)
                        .then((snapshot) => {
                            getDownloadURL(ref(storage, snapshot.ref))
                                .then(async (url) => {
                                    await updateDoc(productsRef, {
                                        name: data.name,
                                        fileName: radomNum,
                                        Prof_img: url
                                    });
                                    dispatch({ type: ActionType.UPDATE_PRODUCTS, payload: { ...data, fileName: radomNum, Prof_img: url } })
                                })
                        })
                })
        }

    } catch (error) {
        dispatch(error_Products(error.message));
    }
}

export const error_Products = (error) => (dispatch) => {
    dispatch({ type: ActionType.ERROR_CATEGORY, payload: error })
}