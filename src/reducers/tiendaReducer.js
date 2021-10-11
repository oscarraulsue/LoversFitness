import { types } from '../types/types'

const initialState = {
    tiendas: [],
}


export const tiendaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.tienda:
            return {
                ...state, 
                tienda: action.payload, ...state.tienda
            }

        default:
            return state
    }
}
