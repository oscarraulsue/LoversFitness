import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { listProducto } from '../actions/actionRegProducto';
import { ListarProducto } from './ListarProducto'



const AppTienda = (history) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducto());
      }, [dispatch])

    return (
        <div>
     
        <ListarProducto /> 
        </div>
    )
}

export default AppTienda
