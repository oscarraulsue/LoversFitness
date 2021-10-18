import { typesProducto } from "../types/types";

const initialState = {
    active: []
}

export const activeReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducto.active:
            return {
                active: action.payload
            }


        default:
            return state;
    }

}