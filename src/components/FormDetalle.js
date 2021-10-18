import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';


export const FormDetalle = () => {

    const [formValues, handleInputChange] = useForm({
            nombre: "Anlli Gallardo",
            direccion: "cl. 127bis #91-60",
            telefono: "3142144768",
            otrotel: "3106805526",
            fecha: "17/10/21",
            total: "$300.00"
    });

    const { nombre, direccion, telefono, otrotel, fecha, total} = formValues;

        
    return (
        <div className="formCliente">

            <Form className="carta1" >
            <h1 className="title">Datos del Cliente</h1>
             <br/>
                <Form.Group className="mb-3 nomb" controlId="formBasicNombre">
                    <Form.Label className="no">Nombre y Apellido:</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        readOnly
                    />
                </Form.Group>
                <Form.Group className="mb-3 precio" controlId="formBasicprecio">
                    <Form.Label className="pre">Dirección:</Form.Label>
                    <Form.Control
                        type="text"
                        name="direccion"
                        value={direccion}
                        onChange={handleInputChange}
                        readOnly
                    />
                </Form.Group>

                <Form.Group className="mb-3 precio" controlId="formBasicprecio">
                    <Form.Label className="pre">Teléfono de Contácto:</Form.Label>
                    <Form.Control
                        type="text"
                        name="telefono"
                        value={telefono}
                        onChange={handleInputChange}
                        readOnly
                    />
                </Form.Group>

                <Form.Group className="mb-3 precio" controlId="formBasicprecio">
                    <Form.Label className="pre">Otro Teléfono de Contácto:</Form.Label>
                    <Form.Control
                        type="text"
                        name="otrotel"
                        value={otrotel}
                        onChange={handleInputChange}
                        readOnly
                    />
                </Form.Group>

                <Form.Group className="mb-3 precio" controlId="formBasicprecio">
                    <Form.Label className="pre">Fecha de Compra:</Form.Label>
                    <Form.Control
                        type="text"
                        name="fecha"
                        value={fecha}
                        onChange={handleInputChange}
                        readOnly
                    />
                </Form.Group>
                <Form.Group className="mb-3 precio" controlId="formBasicprecio">
                    <Form.Label className="pre">Total de la Compra:</Form.Label>
                    <Form.Control
                        type="text"
                        name="total"
                        value={total}
                        onChange={handleInputChange}
                        readOnly
                    />
                </Form.Group>             
                
            </Form>

        </div>
    )
}