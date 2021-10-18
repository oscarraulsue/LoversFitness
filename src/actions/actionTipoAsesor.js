import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { loadAsesor } from '../helpers/loadAsesor'
import { types } from '../types/types'
import { logout } from './actionLogin'


export const NewAsesor = (tipoAsesor, id) => {
    return async (dispatch) => {
        await addDoc(collection(db, `${id}/asesor/data`), {tipoAsesor});
        dispatch(Listar(id))
    }
}


export const addNewAsesor = (tipoAsesor) => ({
    type: types.asesor,
    payload: {tipoAsesor}
})
export const Listar = (uid) => {
    return async (dispatch) => {
        const cards = await loadAsesor(uid)
        dispatch(addNewAsesor(cards))
    }
}
export const Delete = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().login.id;
        await deleteDoc(doc(db, `${uid}/asesor/data/`, `${id}`));
            dispatch(logout())
    }
}

