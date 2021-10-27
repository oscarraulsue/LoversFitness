import { typesProducto } from "../types/types";

const initialState = {
    compras: []
}

export const comprasReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducto.compras:
            return {
                compras: action.payload
            }


        default:
            return state;
    }

}