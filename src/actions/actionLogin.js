import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { google } from "../firebase/firebaseConfig";
import {types} from "../types/types";
import { registroChat } from "./actionChat";


export const loginEmailPassword = (email,password) =>{
    
    return (dispatch) =>{

       const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
             dispatch(
                loginSincrono(user.uid,user.displayName, user.email, user.password),
                registroChat(user.displayName,user.email, user.uid)
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
          dispatch(loginSincrono(user.uid,user.displayName), registroChat(user.displayName,user.email, user.uid))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const loginSincrono = (id, displayname, email) => {

    return{
       type: types.login,
       payload: {
           id,
           displayname,
           email,
           }
    }
}

