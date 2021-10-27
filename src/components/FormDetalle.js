import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import {registerCompra} from '../actions/actionRegCompra';
import { DeleteProCarro } from '../actions/actionCarrito'; 

export const FormDetalle = () => {
    window.scroll({ top: 0 })
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    let yyyy = today.getFullYear();
    const dispatch = useDispatch();
    const carrito = useSelector(state => state.carrito)
    let prod = carrito.carrito?.producto
    console.log(prod)
    if (dd < 10) {
      dd = '0' + dd;
    }
    
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;

    const [formValues, handleInputChange, rest] = useForm({
            nombre: "",
            direccion: "",
            telefono: "",
            otrotel: "",
              });

    const { nombre, direccion, telefono, otrotel } = formValues;
    let total= 0
    prod?.forEach((element) => {
       let subTotal= element.producto.newProducto.cantidad * element.producto.newProducto.precio * 1000 
      total += subTotal

    })
    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registerCompra(nombre, direccion, telefono, otrotel, today, prod )) 
        prod?.forEach((element) => {
           dispatch(DeleteProCarro(element.id))

        
    })
        rest()
    }
        
    return (
        <div className="formDetalle">

            <Form className="cart" 
             onSubmit={handleRegistro}
            >
            <h1 className="titlee">Datos del Cliente</h1>
             <br/>
                <Form.Group className="mb-3 caja" controlId="formBasicNombre">
                    <Form.Label className="caja">Nombre y Apellido:</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}

                    />
                </Form.Group>
                <Form.Group className="mb-3 caja" controlId="formBasicprecio">
                    <Form.Label className="pre">Dirección:</Form.Label>
                    <Form.Control
                        type="text"
                        name="direccion"
                        value={direccion}
                        onChange={handleInputChange}

                    />
                </Form.Group>

                <Form.Group className="mb-3 caja" controlId="formBasicprecio">
                    <Form.Label className="pre">Teléfono de Contácto:</Form.Label>
                    <Form.Control
                        type="text"
                        name="telefono"
                        value={telefono}
                        onChange={handleInputChange}

                    />
                </Form.Group>

                <Form.Group className="mb-3 caja" controlId="formBasicprecio">
                    <Form.Label className="pre">Otro Teléfono de Contácto:</Form.Label>
                    <Form.Control
                        type="text"
                        name="otrotel"
                        value={otrotel}
                        onChange={handleInputChange}

                    />
                </Form.Group>

                <Form.Group className="mb-3 caja" controlId="formBasicprecio">
                    <Form.Label className="pre">Fecha de Compra:</Form.Label>
                    <Form.Control
                        type="text"
                        name="fecha"
                        value={today}
                        readOnly
                    />
                </Form.Group>
                <Form.Group className="mb-3 caja" controlId="formBasicprecio">
                    <Form.Label className="pre">Total de la Compra:</Form.Label>
                    <Form.Control
                        type="text"
                        name="total"
                        value={total}
                        onChange={handleInputChange}
                        readOnly
                    />
                </Form.Group>     
                <Button variant="primary" type="submit">
                    Enviar
                </Button>        
                <Link
            to = "/auth/carrito"
            >
            <button className="btn btn-danger next">Volver</button>
            </Link>
            </Form>

        </div>
    )
}