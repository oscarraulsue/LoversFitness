import { types } from '../types/types';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';



export const registroEmailPasswordNombre = (email, password, name, foto, sexo) => {

    if (!sexo) {
        sexo = "n"
    }
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {

                await updateProfile(auth.currentUser, { displayName: name, photoURL: foto })
                dispatch(registerSincrono(user.email, user.uid, user.displayName, user.photoURL, sexo))

            })
            .catch(e => {
                console.log(e);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '!Algo salió mal!',
                    footer: 'El usuario ya se encuentra registrado'
                })
            })
    }
}

export const registerSincrono = (email, password, name, foto, sexo) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            name,
            foto,
            sexo
        }
    }
}

