import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { DeleteProCarro } from '../actions/actionCarrito';



const Carrito = () => {
    const carrito = useSelector(state => state.carrito)
    console.log(carrito.carrito.producto)
    let prod = carrito.carrito?.producto


    
    return (
        <div>
              <Table striped bordered hover className="tab">
                <thead>
                    <tr>
                        <th></th>
                        <th className="encab">Producto</th>
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
                                        <td ><img src={element.producto.newProducto.img[0].response  } alt="" width="50px" /></td>
                                        <td className="nompro">{element.producto.newProducto.nom}</td>
                                        <td className="precio">$ {element.producto.newProducto.precio}</td>
                                        <td className="cantidad">{element.producto.newProducto.cantidad}</td>
                                        <td className="cantidad"> $ {element.producto.newProducto.cantidad * element.producto.newProducto.precio}.00</td>
                                        <td>
                                            <button className="btn btn-danger"
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
