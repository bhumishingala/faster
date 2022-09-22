import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../firebase';
import * as ActionType from '../ActionType';

export const getCategory = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, "Category"));
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: ActionType.GET_CATEGORY, payload: data })
    } catch (error) {
        dispatch(error_category(error.message))
    }
}

export const addCategory = (data) => async (dispatch) => {
    try {

        let radomNum = Math.floor(Math.random() * 1000000).toString();

        const categoryRef = ref(storage, 'Category/' + radomNum);
        uploadBytes(categoryRef, data.Prof_img)
            .then((snapshot) => {
                getDownloadURL(ref(storage, snapshot.ref))
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "Category"), {
                            ...data,
                            Prof_img: url,
                            fileName: radomNum
                        });
                        dispatch({
                            type: ActionType.ADD_CATEGORY, payload: {
                                id: docRef.id,
                                ...data,
                                Prof_img: url
                            }
                        })
                    });
            });
            console.log(data);
    } catch (error) {
        dispatch(error_category(error.message));
    }
}

export const deleteCategory = (data) => async (dispatch) => {
    try {
        const deletetRef = ref(storage, "Category/" + data.fileName);

        deleteObject(deletetRef)
            .then(async () => {
                await deleteDoc(doc(db, "Category", data.id));
                dispatch({ type: ActionType.DETETE_CATEGORY, payload: data.id })
            }).catch((error) => {
                dispatch(error_category(error.message))
            });
    } catch (error) {
        dispatch(error_category(error.message))
    }
}


export const updateCategory = (data) => async(dispatch) => {
    console.log(data);
    try {
        const CategoryRef = doc(db, "Category", data.id);
        if (typeof data.Prof_img === "string") {
            await updateDoc(CategoryRef, {
                name: data.name,
            });
            dispatch({ type: ActionType.UPDATE_CATEGORY, payload: data })
        } else {
            const delcategorytRef = ref(storage, "Category/" + data.fileName);
            let radomNum = Math.floor(Math.random() * 1000000).toString();
            const upcategoryRef = ref(storage, 'Category/' + radomNum);

            deleteObject(delcategorytRef)
                .then(() => {
                    uploadBytes(upcategoryRef, data.Prof_img)
                        .then((snapshot) => {
                            getDownloadURL(ref(storage, snapshot.ref))
                                .then(async (url) => {
                                    await updateDoc(CategoryRef, {
                                        name: data.name,
                                        fileName: radomNum,
                                        Prof_img: url
                                    });
                                    dispatch({ type: ActionType.UPDATE_CATEGORY, payload: { ...data, fileName: radomNum, Prof_img: url } })
                                })
                        })
                })
        }

    } catch (error) {
        dispatch(error_category(error.message));
    }
}

export const error_category = (error) => (dispatch) => {
    dispatch({ type: ActionType.ERROR_CATEGORY, payload: error })
}