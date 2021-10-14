import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
import Swal from "sweetalert2";
import { google, facebook } from "../firebase/firebaseConfig";
import {types} from "../types/types";
import { registroChat } from "./actionChat";
import { NewAsesor } from "./actionTipoAsesor";

export const loginEmailPassword = (email,password,tipoAsesor) =>{
    
    return (dispatch) =>{

       const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
        console.log(user)
        if(tipoAsesor){
            dispatch(NewAsesor(tipoAsesor, user.uid)) 
           }else{
            dispatch(loginSincrono(user.uid,user.displayName, user.email, user.photoURL))
            }
                
              console.log('Bienvenid@');
       })
       .catch(e =>{
            console.log(e);
            console.log('El usuario no existe');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!Algo salió mal!',
                footer: 'Usuario o Contraseña invalidos'
            })
       })
    }
}
const auth = getAuth();

export const loginGoogle = () => {

    return(dispatch) => {
       
        signInWithPopup(auth,google)
        .then(({user}) => {
            console.log(user)
          dispatch(loginSincrono(user.uid,user.displayName, user.email, user.photoURL), registroChat(user.displayName,user.email, user.uid))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}


export const loginFacebook = () => {

    return(dispatch) => {
       
        signInWithPopup(auth,facebook)
        .then(({user}) => {
          dispatch(loginSincrono(user.uid,user.displayName, user.email, user.photoURL))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const loginSincrono = (id,displayname, email, photoURL) => {

    return{
       type: types.login,
       payload: {
           id,
           displayname,
           photoURL,
           email
           }
    }
}

//logout

export const logout = () => {
    return async(dispatch) => {
        const auth = getAuth();
            await signOut(auth);
            dispatch(logoutSincrono());

    }
}


export const logoutSincrono = () => {
   return{
       type: types.logout,
   }
}


