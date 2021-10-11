import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types"



export const listarTienda = () => {
    return async (dispatch) => { 
        const querySnapshot = await getDocs(collection(`http://localhost:4001/productos/`, "product"));
        const tiend = [];
        querySnapshot.forEach((product) => {
            console.log(product.data())
            tiend.push({
                ...product.data()
            })
        });
        dispatch(listar(tiend));
    }
}

export const listar = (tiend) => {
    return {
        type: types.tienda,
        payload: tiend
    }
}