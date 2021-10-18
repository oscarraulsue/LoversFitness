import { types } from "../types/types";

const initialState = {
    retos: []
}

export const retosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.retos:
            return {
                retos: action.payload
            }


        default:
            return state;
    }

}