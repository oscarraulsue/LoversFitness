import { types } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc, updateDoc,collection,deleteDoc,getDocs, doc, query, where } from "@firebase/firestore";
import Swal from 'sweetalert2'

let id = ""
export const listRetos = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "retos"));
        const reto = [];
        querySnapshot.forEach((doc) => {
            console.log(reto)
             reto.push({
                ...doc.data(id),
                id:doc.id
            })
        });
        dispatch(listReto(reto));
    }
}

export const listReto = (reto) => {
    console.log(reto)
    return {
        type: types.retos,
        payload: reto
    }
}