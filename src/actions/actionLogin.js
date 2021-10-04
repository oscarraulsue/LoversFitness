import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { google, facebook } from "../firebase/firebaseConfig";
import {types} from "../types/types";


export const loginEmailPassword = (email,password) =>{
    
    return (dispatch) =>{

       const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
             dispatch(
                loginSincrono(user.uid,user.displayName)
             ) 
             console.log('Bienvenid@');
       })
       .catch(e =>{
           console.log(e);
            console.log('El usuario no existe');
       })
    }
}
const auth = getAuth();

export const loginGoogle = () => {

    return(dispatch) => {
       
        signInWithPopup(auth,google)
        .then(({user}) => {
          dispatch(loginSincrono(user.uid,user.displayName))
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
          dispatch(loginSincrono(user.uid,user.displayName))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const loginSincrono = (id, displayname) => {

    return{
       type: types.login,
       payload: {
           id,
           displayname
       }
    }
}
