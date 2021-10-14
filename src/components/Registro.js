import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { registroEmailPasswordNombre } from '../actions/actionRegister';
import { useDispatch } from 'react-redux'
import { fileUpload } from '../helpers/FileUpload';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { IconButton, Avatar } from '@material-ui/core';
import VisibilidadIcon from '@material-ui/icons/Visibility';
import { useState } from "react"
import Swal from 'sweetalert2'

export const Registro = () => {
    const [passV, setPassV] = useState(false)
    const [passN, setPassN] = useState(false)
    const [imagen, setImagen] = useState("")
    const [imagenText, setImagenText] = useState("Agregar foto")
    const dispatch = useDispatch();


    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: '',
        sexo: ''
    });

    const { nombre, email, pass1, pass2, sexo } = formValues;
    const handleRegistro = (e) => {
        e.preventDefault();

        if (pass1.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!Algo salió mal!',
                footer: 'La contraseña debe tener mínimo 6 caracteres'
            })
        }
        if (pass1 !== pass2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!Algo salió mal!',
                footer: 'La contraseña no coincide'
            })
        } else {

            dispatch(registroEmailPasswordNombre(email, pass1, nombre, imagen, sexo))
        }
    }

    const handlePassVisible = () => {
        setPassN(!passN)
    }

    const handlePassVisibleC = () => {
        setPassV(!passV)
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {

        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                setImagen(response)
                setImagenText("Cambiar foto")
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="containerRegistro">
            <br />
            <Form
                className="formRegistro"
                onSubmit={handleRegistro}>
                <Avatar
                    alt=""
                    src={imagen ? imagen : "/static/images/avatar/1.jpg"}
                    style={{ marginLeft: "30%", width: 100, height: 100, cursor: 'pointer' }}
                />
                <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChanged}
                />

                <Button
                    onClick={handlePictureClick}
                    style={{ margin: '20px 27%', color: 'white', width:"118px" }}
                    variant="info"
                    type="button">
                    {imagenText}
                </Button>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre"
                        required
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSexo">
                    <Form.Label>Sexo</Form.Label>
                    <br />
                    <Form.Label title="Seleccione una opción" className="radiobox">
                        <input
                            name="sexo"
                            value="m"
                            type="radio"
                            required
                            className="input-radio"
                            onChange={handleInputChange}

                        /> Masculino</Form.Label>

                    <Form.Label
                        title="Seleccione una opción" className="radiobox">
                        <input
                            name="sexo"
                            value="f"
                            type="radio"
                            required
                            className="input-radio"
                            onChange={handleInputChange}
                            style={{ marginLeft: '2rem' }}
                        /> Femenino</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ marginTop: '-0.8rem' }}>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        required
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type={passN ? "text" : "password"}
                        placeholder="Password"
                        name="pass1"
                        value={pass1}
                        required
                        onChange={handleInputChange}
                    />
                    <IconButton
                        className="btnVis"
                        onClick={handlePassVisible}
                        hidden={!passN ? true : false}
                    >
                        <VisibilityOffIcon />
                    </IconButton>
                    <IconButton
                        className="btnVis"
                        onClick={handlePassVisible}
                        hidden={passN ? true : false}
                    >
                        <VisibilidadIcon />
                    </IconButton>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword" style={{ marginTop: '-3rem' }}>
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type={passV ? "text" : "password"}
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        required
                        onChange={handleInputChange}
                    />
                    <IconButton
                        className="btnVis"
                        onClick={handlePassVisibleC}
                        hidden={!passV ? true : false}
                    >
                        <VisibilityOffIcon />
                    </IconButton>
                    <IconButton
                        className="btnVis"
                        onClick={handlePassVisibleC}
                        hidden={passV ? true : false}
                    >
                        <VisibilidadIcon />
                    </IconButton>
                </Form.Group>
                <Button variant="info" type="submit" style={{ marginLeft: "32%", marginTop: '-4.8rem', color: 'white' }}>
                    Registrarse
                </Button>

                <Link to="/login"
                    style={{ marginLeft: "-6.2rem" }}
                >
                    Iniciar Sesión
                </Link>
            </Form>
            <br /> <br />  <br />
        </div>
    )
}