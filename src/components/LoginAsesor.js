import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword } from '../actions/actionLogin';
import Swal from 'sweetalert2';


function Login() {
    const [tipoAsesor, setTipoAsesor] = useState("")
    const [ingreso, setIngreso] = useState(false)
    const [background, setBackground] = useState(false)
    const dispatch = useDispatch();

    const [ values, handleInputChange, reset ] = useForm({
        email: '',
        password: '',
        passwordA: ''
    })

    const {email,password,passwordA} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginEmailPassword(email,password,tipoAsesor));
       reset()
    }
    const handleLoginA = (e) => {
        e.preventDefault();
        if(passwordA === "medico2030"){
            setTipoAsesor("medico")
            setIngreso(true)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'A ingresado como asesor medico',
                showConfirmButton: false,
                timer: 1500
              })
              setBackground('https://www.icronline.com/storage/app/media/especialidades_medicina_deporte.png')
              reset()
        }else if(passwordA === "admi3020"){
            setTipoAsesor("administrador")
            setIngreso(true)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'A ingresado como administrador',
                showConfirmButton: false,
                timer: 1500
              })
              setBackground('https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/p640x640/161791818_121650423306232_4252090054138662822_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=VJU2x5bAHMwAX-2Ccjb&_nc_ht=scontent.fbog4-1.fna&oh=0446bcf94103b3307f0833d937d30cc9&oe=618E8059')
              reset()
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!Algo salió mal!',
                footer: 'La contraseña es incorrecta'
            })
            reset()
        }
     }
     console.log(background)
    return (
        <div
        >
        <div
        hidden={ingreso? true : false} 
        className="containerLoginAsesor"
        style={{backgroundImage:`url(https://www.feda.net/wp-content/uploads/2021/05/slide-sala-fitness-entrenamiento-personal.jpg)`}}

        >
         <Form onSubmit={handleLoginA}
         className="formRegistro"
        >
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ingrese su contraseña de asesor</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="passwordA"
                    value={passwordA}
                    onChange={handleInputChange} />
            </Form.Group>

            <Button variant="info" type="submit"  style={{ marginLeft: "28%", marginTop: '10px', color: 'white' }}>
                Ingresar
            </Button>

        </Form>
        </div>
        <div 
        style={{backgroundImage:`url(${background})`}}
        hidden={!ingreso? true : false} 
        className="containerLoginAsesor">
        <Form onSubmit={handleLogin}
         className="formRegistro"
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

        </Form>
        
    </div>
    </div>
    );
}

export default Login;