import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginGoogle, loginFacebook } from '../actions/actionLogin';
import Navbar from './Navbar';

function Login() {

    const dispatch = useDispatch();

    const [ values, handleInputChange, reset ] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginEmailPassword(email,password));
    console.log(loginEmailPassword)
    }

    const handleGoogle = () => {
        dispatch(loginGoogle());
   }

   const handleFacebook = () => {
    dispatch(loginFacebook());
    }

    const iniciarSesion = () => {
        dispatch(Navbar())
    }

    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Iniciar Sesion
            </Button>

            <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                    onClick={handleGoogle}

                >
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                    </Container>

                    <Container
                    className="facebook-btn"
                    onClick={handleFacebook}>
                    </Container>
                    <Container className="facebook-icon-wrapper">
                        <img className="facebook-icon" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1632858497/icon-fb_l9ewqn.jpg" width="50px" height="48px" alt="facebook button" />
                    </Container>
                
            </Container>
            <Link to="/registro">Registrarse</Link><br />
            <Link to="/">Página Principal</Link>

        </Form>

    );
}

export default Login;