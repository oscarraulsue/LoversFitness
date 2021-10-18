import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Carrito = () => {
    const carrito = useSelector(state => state.carrito)
    console.log(carrito.carrito.producto)
    let prod = carrito.carrito?.producto
    return (
        <div>
              <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Sub-Total</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        (prod) ?
                            (

                                prod.map((element, index) => (

                                    <tr key={index}>
                                        <td><img src={element.producto.newProducto.img[0].response  } alt="" width="50px" /></td>
                                        <td>{element.producto.newProducto.nom}</td>
                                        <td>{element.producto.newProducto.precio}</td>
                                        <td>{element.producto.newProducto.cantidad}</td>
                                        <td>{element.producto.newProducto.cantidad * element.producto.newProducto.precio}</td>
                                        <td>
                                            <button
                                      >Eliminar</button>
                                        </td>

                                    </tr>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }
                    <tr>
                    <th colspan="4" scope="col" class="text-right">TOTAL :</th>
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
            <button>finalizar compra</button>
            </Link>
        </div>
    )
}

export default Carrito
