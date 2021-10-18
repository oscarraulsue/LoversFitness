import {types} from '../types/types';


export const comentariosReducer = (state = {}, action) => {
    switch (action.type) {
        case types.comentarios:

        return{
            sexo: action.payload.sexo,
            name: action.payload.name,
            email: action.payload.email,
            description: action.payload.description,
        }
          default:
          return state;
    }
}