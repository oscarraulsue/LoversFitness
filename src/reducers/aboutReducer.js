import {types} from '../types/types';


export const aboutReducer = (state = {}, action) => {
    switch (action.type) {
        case types.about:

        return{
            ...state
        }

        default:
          return state;
    }
}