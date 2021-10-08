import {types} from '../types/types';


export const chatReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registerChat:

        return{
           email: action.payload.email,
           name: action.payload.name
        }

        default:
          return state;
    }
}