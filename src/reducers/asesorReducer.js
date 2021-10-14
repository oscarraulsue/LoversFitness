import {types} from '../types/types';


export const asesorReducer = (state = {}, action) => {
    switch (action.type) {
        case types.asesor: 

            return{
                tipoAsesor: action.payload.tipoAsesor,
            }
        default:
          return state;
    }
}