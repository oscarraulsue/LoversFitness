import {types} from '../types/types';


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:

        return{
            id: action.payload.id,
            name: action.payload.displayname,
            email2: action.payload.email,
            password: action.payload.password
        }

        default:
          return state;
    }
}