import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormCliente = () => {

    const formik = useFormik({
        initialValues: {
           nombre: "",
           precio: "",
           detallePrecio: "",
           color: "",
           detalleProducto: "",
           

        },
        validationSchema: Yup.object({
            nombre: Yup.string().required(),
            precio: Yup.string().required(),
            detallePrecio: Yup.string().required(),
            color: Yup.string().required(),
            detalleProducto: Yup.string().required(),
          }),
          onSubmit: (data,onSubmitProps) => {
     
                  handleCompra(data)
                  onSubmitProps.setSubmitting(false)
                  onSubmitProps.resetForm() 
                 
            },
   
     })
     const handleCompra = (data ) => {
        if(!data){
            alert("Debe llenar todos los campos")
        }
     }

    return (
        <div className="formCliente">

            <Form className="carta1" onSubmit={formik.handleSubmit}>
            <h1 className="title">Datos del Cliente</h1>
             <br/>
                <Form.Group className="mb-3 nomb" controlId="formBasicNombre">
                    <Form.Label className="no">Nombre y Apellido:</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        onChange={formik.handleChange}
                        error={formik.errors.nombre}

                    />
                </Form.Group>
                <Form.Group className="mb-3 precio" controlId="formBasicprecio">
                    <Form.Label className="pre">Dirección:</Form.Label>
                    <Form.Control
                        type="text"
                        name="precio"
                        onChange={formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3 precio" controlId="formBasicprecio">
                    <Form.Label className="pre">Teléfono de Contácto:</Form.Label>
                    <Form.Control
                        type="text"
                        name="precio"
                        onChange={formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3 precio" controlId="formBasicprecio">
                    <Form.Label className="pre">Otro Teléfono de Contácto:</Form.Label>
                    <Form.Control
                        type="text"
                        name="precio"
                        onChange={formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3 precio" controlId="formBasicprecio">
                    <Form.Label className="pre">Fecha de Compra:</Form.Label>
                    <Form.Control
                        type="text"
                        name="precio"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3 precio" controlId="formBasicprecio">
                    <Form.Label className="pre">Total de la Compra:</Form.Label>
                    <Form.Control
                        type="text"
                        name="precio"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Button className="sendd" variant="primary" type="submit">
                    Realizar Compra
                </Button>
              
                
            </Form>

        </div>
        )
    }