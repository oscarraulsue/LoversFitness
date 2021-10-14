import {types} from '../types/types';


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:

        return{
            id: action.payload.id,
            name: action.payload.displayname,
            email: action.payload.email,
            foto: action.payload.photoURL
        }
        case types.logout:

        return []
        default:
          return state;
    }
}