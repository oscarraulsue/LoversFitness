import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';

const RegistroReto = () => {
    const [allVideo, setAllVideo] = useState([])
    const [video1, setVideo1] = useState("")
    const [formValues, handleInputChange] = useForm({
        nombre: '',
        portada: '',
        video: video1,
    });

    const { nombre, portada, video } = formValues;

    console.log(allVideo)



 


    return (
        <div className="containerRegistro">
        <br />
        <Form
            className="formRegistro"
            // onSubmit={handleRegistro}
            >
 <div id="pintar"></div>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese nombre del reto"
                    required
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Portada</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese url de la imagen para la portada"
                    required
                    name="portada"
                    value={portada}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>video</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese url de la imagen para la portada"
                    required
                    name="video"
                    value={video}
                    onChange={handleInputChange}
                />
            </Form.Group>
           <br/>




        </Form>
        <br /> <br />  <br />
    </div>
    )
}

export default RegistroReto
