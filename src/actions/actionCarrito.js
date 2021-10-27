import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { loadCarrito } from '../helpers/loadCarrito'
import { typesProducto } from '../types/types'



export const NewProCarro = (nom, color, detProducto, detPre, precio, img, cantidad) => {
    return async (dispatch, getState) => {
        const uid = getState().login.id;
        const newProducto = {
            nom,
            precio,
            detPre,
            img,
            color, 
            detProducto,
            cantidad
           
        }
        await addDoc(collection(db, `${uid}/carrito/data`), {newProducto});
        dispatch(ListarCar(uid))

    }
}


export const addNewProCarro = (producto) => ({
    type: typesProducto.carrito,
    payload: {producto}
})

export const ListarCar = uid => {

    return async (dispatch) => {
    
        const cards = await loadCarrito(uid)
         dispatch(addNewProCarro(cards))
    }
}
export const DeleteProCarro = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().login.id;
        await deleteDoc(doc(db, `${uid}/carrito/data/`, `${id}`));
        dispatch(ListarCar(uid))
    }
}
