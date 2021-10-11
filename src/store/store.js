import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { aboutReducer } from '../reducers/aboutReducer';
import { tiendaReducer } from '../reducers/tiendaReducer';


const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    about: aboutReducer,
    tienda: tiendaReducer
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
   
)