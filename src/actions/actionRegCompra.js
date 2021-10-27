import { typesProducto } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection,getDocs } from "@firebase/firestore";


let id = ""
//Eliminar
// export const deleteProducto = (id) =>{
//     return async(dispatch) => {

//        deleteDoc(doc(db,"productos",id));
//          dispatch(deleteSincrono(id));
//          const { value: accept } = Swal.fire({
//             title: '¿Desea Eliminar los cambios?',
//             input: 'checkbox',
//             inputValue: 1,
//             inputPlaceholder:
//               'Si',
//             confirmButtonText:
//               'Continuar <i class="fa fa-arrow-right"></i>',
//             inputValidator: (result) => {
//               return window.location.reload()
              
//             }
            
//           })
//     }
// }

// export const deleteSincrono = (id) => {
//     return{
//         type: typesProducto.delete,
//         payload: id
//     }
// }

export const registerCompra = (nombre, direccion, telefono, otrotel, today, prod) => {
    console.log("hola")
    console.log(nombre, direccion, telefono, otrotel, today, prod)
   return( dispatch) => {
       const newCompra = {
        nombre, 
        direccion, 
        telefono, 
        otrotel, 
        today, 
        prod 
          
       }
       addDoc(collection(db,"compras"),newCompra)
       .then(resp => {
           dispatch(registerCompraSincrono(newCompra))
            
          })
   }
}

export const registerCompraSincrono = (compra) => {
    return{
        type: typesProducto.compras,
        payload: compra
    }

}

//Lectura

export const listProducto = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "compras"));
        const producto = [];
        querySnapshot.forEach((doc) => {
             producto.push({
                
                ...doc.data(id),
                id:doc.id
            })
        });
        dispatch(list(producto));
    }
}

export const list = (productos) => {
    return {
        type: typesProducto.list,
        payload: productos
    }
}
