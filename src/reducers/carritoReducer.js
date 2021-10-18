import { typesProducto } from "../types/types";

const initialState = {
    carrito: []
}

export const carritoReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducto.carrito:
            return {
                carrito: action.payload
            }
            case typesProducto.remover_uno: {
                let itemDelete = state.carrito.find(item => item.id === action.payload);
    
                return itemDelete.quantity > 1 
                ? {
                    ...state,
                    carrito: state.carrito.map((item) => 
                        item.id === action.payload 
                        ? {...item, quantity: item.quantity - 1}
                        : item
                        ),
                } 
                : {
                    ...state,
                    carrito: state.carrito.filter((item) => item.id !== action.payload),
                };
            }
    
            case typesProducto.remover_todo: {
                return {
                    ...state,
                    carrito: state.carrito.filter((item) => item.id !== action.payload),
                }
            }
    
            case typesProducto.limpiar_carrito:  
            return initialState;

        default:
            return state;
    }

}

