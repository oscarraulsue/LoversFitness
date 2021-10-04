import { collection, getDocs } from "@firebase/firestore";
import { bd } from "../firebase/configFirebase";
import { types } from "../types/types"



export const listarProgramas = () => {
    return async (dispatch) => { 
        const querySnapshot = await getDocs(collection(bd, "programas"));
        const programs = [];
        querySnapshot.forEach((program) => {
            // console.log(program.data())
            programs.push({
                ...program.data()
            })
        });
        dispatch(listar(programs));
    }
}

export const listar = (programs) => {
    return {
        type: types.about,
        payload: programs
    }
}