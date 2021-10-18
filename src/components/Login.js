import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginGoogle, loginFacebook } from '../actions/actionLogin';


function Login() {

    
    const dispatch = useDispatch();

    const [ values, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginEmailPassword(email,password));
    }


    const handleGoogle = () => {
      dispatch(loginGoogle());
   }

   const handleFacebook = () => {
    dispatch(loginFacebook());
    }


    return (
        <div className="containerLogin">
        <Form onSubmit={handleLogin}
         className="formLogin"
        >
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
            <Button variant="info" type="submit"  style={{ marginLeft: "28%", marginTop: '10px', color: 'white' }}>
                Iniciar Sesion
            </Button>

            <Container className="networks" style={{height: '60px'}}>
                <Container
                     className="google"
                    onClick={handleGoogle}
                >
                           <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>

                    <Container
                    className="facebook"
                    onClick={handleFacebook}>
                        <img className="facebook-icon" src="https://res.cloudinary.com/dky22nhv5/image/upload/v1633275260/mndk57d48ruwaxg3oukp.png" alt="facebook button" />
                    </Container>
                
            </Container>
            <Link className="linkRegistro" to="/registro">Registrarse</Link><br />
            <Link className="linkAsesor" to="/loginasesor">Ingresar como asesor</Link><br />

        </Form>
        
    </div>
    );
}

export default Login;