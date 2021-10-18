import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { chatReducer } from '../reducers/chatReducer';
import { aboutReducer } from '../reducers/aboutReducer';
import { productoReducer } from '../reducers/productoReducer';
import { buscarReducer } from '../reducers/buscarReducer';
import { asesorReducer } from '../reducers/asesorReducer';
import { activeReducer } from '../reducers/activeReducer';
import { carritoReducer } from '../reducers/carritoReducer';
import { comentariosReducer } from '../reducers/comentariosReducer'
import { retosReducer } from '../reducers/retosReducer'

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    chat: chatReducer,
    about: aboutReducer,
    productos: productoReducer,
    buscar: buscarReducer,
    asesor: asesorReducer,
    active: activeReducer,
    carrito: carritoReducer,
    comentarios: comentariosReducer,
    retos: retosReducer,
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
   
)