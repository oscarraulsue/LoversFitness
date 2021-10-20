import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { DeleteProCarro } from '../actions/actionCarrito';
import { typesProducto } from '../types/types';


const Carrito = () => {
    const carrito = useSelector(state => state.carrito)
    console.log(carrito.carrito.producto)
    let prod = carrito.carrito?.producto


    const dispatch = useDispatch()

    // const eliminarCarrito = (id, all = false) => {
    //     console.log(id, all);
    //     if(all){
    //         dispatch({type: typesProducto.remover_todo, payload:id})
    //     } else{
    //         dispatch({type: typesProducto.remover_uno, payload:id})
    //     }
        
    // };

    return (
        <div>
              <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th className="enca">Producto</th>
                        <th className="enca">Precio</th>
                        <th className="enca">Cantidad</th>
                        <th className="enca">Sub-Total</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        (prod) ?
                            (

                                prod.map((element, index) => (

                                    <tr key={index}>
                                        <td><img src={element.producto.newProducto.img[0].response  } alt="" width="50px" /></td>
                                        <td className="nompro">{element.producto.newProducto.nom}</td>
                                        <td className="precio">{element.producto.newProducto.precio}</td>
                                        <td className="cantidad">{element.producto.newProducto.cantidad}</td>
                                        <td className="cantidad">{element.producto.newProducto.cantidad * element.producto.newProducto.precio}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{dispatch(DeleteProCarro())}}
                                      >Eliminar</button>
                                        </td>

                                    </tr>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }
                    <tr>
                    <th colspan="4" scope="col" className="text-right total">TOTAL :</th>
                    <th scope="col">
                        <p id="total">"hola"</p>
                    </th>
                    <td>{}</td>
                </tr>
                </tbody>
            </Table>
            <Link
            to = "/auth/formdetalle"
            >
            <button className="btn btn-warning next">finalizar compra</button>
            </Link>

            <Link
            to = "/detalle"
            >
            <button className="btn btn-primary next">Volver</button>
            </Link>
        </div>
    )
}

export default Carrito
