import React from 'react'
import { Form } from 'react-bootstrap';


export const FormAvances = () => {

    return (
        <div className="formAvance">

            <Form className="carta1">
                <h1 className="title_cliente1">Detalles de los Retos</h1>
            
                <table className="table table-dark table" >
                    <thead>
                        <tr className="table-active">
                            <th>Reto Realizado</th>
                            <th>Nombre y Apellido</th>
                            <th>Comentarios</th>
                        </tr>
                
                    </thead>
                    <tbody>
                        <tr>
                            <td>ABS</td>
                            <td>Anlli Gallardo</td>
                            <td>Difícil</td>
                            
                
                        </tr>
                    </tbody>
                </table>             
                
            </Form>

        </div>
        )
    }