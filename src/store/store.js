import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { chatReducer } from '../reducers/chatReducer';
import { aboutReducer } from '../reducers/aboutReducer';

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    chat: chatReducer,
    about: aboutReducer
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
   
)