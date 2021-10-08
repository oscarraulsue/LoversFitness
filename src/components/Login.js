import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginGoogle } from '../actions/actionLogin';

function Login() {

    
    const dispatch = useDispatch();

    const [ values, handleInputChange, reset ] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = values;
    const config = async () => {

        };
        const peticionGet =  () => {
            console.log("hola sientre")
            var axios = require('axios');
          
        var config = {
            method: 'get',
            url: 'https://api.chatengine.io/users/',
            headers: {
                'PRIVATE-KEY': '{{9cd8488d-13cc-4d3a-8ecf-ee89a5690313}}'
            },
             };
        
        axios(config)
        .then(function (response) {
            let data = response.data;
             let buscador = data.find(user => user.username === "1jorgevalles@gmail.com");
            console.log(JSON.stringify(response.data));
            console.log(data)
            console.log(buscador)
            console.log(buscador.id)
            console.log("response")

        })
        .catch(function (error) {
            console.log(error);
        });
        
        }


        const peticionDelete =  () => {
            console.log("hola sientre")
            var axios = require('axios');
          
        var config = {
            method: 'delete',
            url: 'https://api.chatengine.io/users/132250',
            headers: {
                'PRIVATE-KEY': '{{9cd8488d-13cc-4d3a-8ecf-ee89a5690313}}'
            },
             };
        
        axios(config)
                
        }
    const handleLogin = (e) => {
       e.preventDefault();
       peticionGet()
    // dispatch(loginEmailPassword(email,password));
    }


    const handleGoogle = () => {
        peticionDelete()
        // dispatch(loginGoogle());
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
                Enviar
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
            </Container>
            <Link to="/atencionmedica">Registrarse</Link>

        </Form>

    );
}

export default Login;