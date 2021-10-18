import React from 'react'
import { Form, Button } from 'react-bootstrap';


export const FormCompra = () => {

    return (
        <div className="formCompra">

            <Form className="carta">
                <h1 className="title_cliente">Detalles de Facturación</h1>
            
                <table className="table table-dark tabla" >
                    <thead>
                        <tr className="table-active">
                            <th>Nombre de Usuario</th>
                            <th>Número de Compra</th>
                            <th>Fecha</th>
                            <th>Monto Total</th>
                            <th>Detalles</th>
                        </tr>
                
                    </thead>
                    <tbody>
                        <tr>
                            <td>Anlli</td>
                            <td>#456789</td>
                            <td>17/10/21</td>
                            <td>$100</td>
                <td><Button className="sende" variant="primary" type="submit">
                    Detalle de Compra
                </Button></td>
                        </tr>
                        <tr>
                            <td>Oscar</td>
                            <td>#456789</td>
                            <td>17/10/21</td>
                            <td>$200</td>
                <td><Button className="sende" variant="primary" type="submit">
                    Detalle de Compra
                </Button></td>
                        </tr>
                    </tbody>
                </table>             
                
            </Form>

        </div>
        )
    }