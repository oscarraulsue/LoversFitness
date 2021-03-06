import { typesProducto } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc, updateDoc,collection,deleteDoc,getDocs, doc } from "@firebase/firestore";
import Swal from 'sweetalert2'

let id = ""
//Eliminar
export const deleteProducto = (id) =>{
    return async(dispatch) => {

       deleteDoc(doc(db,"productos",id));
         dispatch(deleteSincrono(id));
         const { value: accept } = Swal.fire({
            title: '¿Desea Eliminar los cambios?',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder:
              'Si',
            confirmButtonText:
              'Continuar <i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
              return window.location.reload()
              
            }
            
          })
    }
}

export const deleteSincrono = (id) => {
    return{
        type: typesProducto.delete,
        payload: id
    }
}

export const registerProducto = (nom,precio,detPre,color,detProducto,img) => {
    
   return( dispatch) => {
       const newProducto = {
           nom,
           precio,
           detPre,
           color,
           detProducto,
           img
          
       }
       addDoc(collection(db,"productos"),newProducto)
       .then(resp => {
           dispatch(registerProductoSincrono(newProducto))
           const { value: accept } = Swal.fire({
            title: '¿Desea gurdar los cambios?',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder:
              'Si',
            confirmButtonText:
              'Continuar <i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
              return window.location.reload()
              
            }
            
          })
          
          if (accept) {
            Swal('Registro Guardado')
          }
       })
       .catch(error => {
           console.log(error);
       })
   }
}

export const registerProductoSincrono = (producto) => {
    return{
        type: typesProducto.register,
        payload: producto
    }

}

//Lectura

export const listProducto = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "productos"));
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

export const editar = (nom,precio,detPre,color,detProducto,id) => {
    return async () => {

        const docRef = await doc(db,"productos", id);

        // Update the timestamp field with the value from the server
         await updateDoc(docRef, {
            nom,
            precio,
            detPre,
            color,
            detProducto,
        });
        const { value: accept } = await Swal.fire({
            title: 'Estas seguro de realizar los cambios',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder:
              'Si',
            confirmButtonText:
              'Continuar <i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
              return window.location.reload()
              
            }
            
          })
          
          if (accept) {
            Swal('Registro Guardado')
          }

        
    }
}
export const editSincrono = (producto) => {
    return{
        type: typesProducto.register,
        payload: producto
    }

}
export const cargarActive = (nom, color, detProducto, detPre, precio, img) =>{
  return( dispatch) => {
    const newProducto = {
        nom,
        precio,
        detPre,
        img,
        color, 
        detProducto
       
    }
    addDoc(collection(db,"activo"),newProducto)
    .then(resp => {
        dispatch(active(newProducto))

    })
    .catch(error => {
        console.log(error);
    })
}
}
export const active = (productos) => {
  return {
      type: typesProducto.active,
      payload: productos
  }
}
export const listAct2 = () => {
  return async (dispatch) => {
      const querySnapshot = await getDocs(collection(db, "activo"));

      querySnapshot.forEach((doc) => {
          
        dispatch(active(doc.data(id)))
      });

  }
}
export const listAct = () => {
  return async (dispatch) => {
      const querySnapshot = await getDocs(collection(db, "activo"));
 
      querySnapshot.forEach((doc) => {
       dispatch(deleteActve(doc.id))
      });

  }
}
export const deleteActve = (id) =>{
  return async(dispatch) => {

     deleteDoc(doc(db,"activo",id));
     

  }
}