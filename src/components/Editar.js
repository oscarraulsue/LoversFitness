import { Form, Button } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProducto, editar } from '../actions/actionRegProducto';
import { Link } from 'react-router-dom';



export const Editar = (dataPro) => {
    let ediPro = "";
    let id = "";

    if(dataPro.history.location.dataPro){
     ediPro = dataPro.history.location.dataPro.imagen
     id = ediPro.id;
     
}
    const proActivo = useSelector(state => state.activo)
    console.log("proActivo")
    console.log(proActivo)
//     if(dataPro.history.location.dataPro){
//         setEdiPro(dataPro.history.location.dataPro.imagen)
//         id = ediPro.id;
// }
    const dispatch = useDispatch();


    const [formValues, handleInputChange, reset] = useForm({
        nom: ediPro.nom,
        precio: ediPro.precio,
        detPre: ediPro.detPre,
        color: ediPro.color,
        detProducto: ediPro.detProducto

    });

    const { nom, precio, detPre, color, detProducto } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(editar(nom, precio, detPre, color, detProducto, id));
        reset()
    }


    return (
        <div>
            <Form className="formEdi" onSubmit={handleRegistro}>
                <Form.Group className="mb-3 " controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nom"
                        value={nom}
                        required
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="text"
                        name="precio"
                        value={precio}
                        required
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDetPre">
                    <Form.Label>Detalle precio</Form.Label>
                    <Form.Control
                        type="text"
                        name="detPre"
                        value={detPre}
                        required
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicColor">
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        type="text"
                        name="color"
                        value={color}
                        required
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDetProducto">
                    <Form.Label>Detalle del Producto</Form.Label>
                    <Form.Control
                        type="text"
                        name="detProducto"
                        value={detProducto}
                        required
                        onChange={handleInputChange}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Guardar Cambios
                </Button>

                
                <Button 
                onClick={() => dispatch(deleteProducto(ediPro.id))}
                style={{ margin:"10px"}}
                variant="danger" type="botton">
                    Eliminar Registro
                </Button>
               
                <Link
                to ="/"
                >
                <Button 
                onClick={() => reset()}
                variant="danger" type="button">
                    Cancelar
                </Button>
                </Link>
            </Form>

        </div>
    )
}