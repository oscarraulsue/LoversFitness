import { db } from '../firebase/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'


export const loadCarrito = async (id) => {

    const querySnapshot = await getDocs(collection(db,`${id}/carrito/data/`));
    let producto = [];
    console.log(querySnapshot)
    querySnapshot.forEach(hijo=>{
        console.log(hijo)
        producto.push({
        id:hijo.id,
        producto:hijo.data()
       })
    })


    return producto
}

