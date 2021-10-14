import { db } from '../firebase/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'


export const loadAsesor = async (id) => {
    console.log('hola',id)
    const querySnapshot = await getDocs(collection(db,`${id}/asesor/data/`));
    let tipo = {};

    querySnapshot.forEach(hijo=>{
        tipo = {
        id:hijo.id,
        tipo:hijo.data()
       }
    })


    return tipo
}

