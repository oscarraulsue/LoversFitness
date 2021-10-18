import { Form, Button } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';


export const Comentarios = () => {
    

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        description: '',
        sexo: ''
    });

    const { nombre, email, description, sexo } = formValues;

    const buttonMailto = document.querySelector('#mail')
    
    const handleComentarios = () => {
        // e.preventDefault();
        // const form = new FormData(this)
        // console.log(nombre)
        buttonMailto.setAttribute('href', `mailto:loversfitnes812@gmail.com?subject= nombre y apellido: ${nombre} correo: ${email}&body=${description}`)
        buttonMailto.click()
    }
    

    return (
        <div className="containerRegistro">
            <br />
            <Form
                className="formRegistro"
                onSubmit={handleComentarios}>
        
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

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombres y Apellidos</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su información"
                        required
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
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

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Comentarios</Form.Label>
                    <textarea
                            name="description"
                            className="form-control mt-2"
                            autoComplete="of"
                            value={description}
                            onChange={handleInputChange}
                        ></textarea>
                </Form.Group>

                
                <br /> <br />  <br />
                <Button variant="info" type="submit" style={{ marginLeft: "32%", marginTop: '-4.8rem', color: 'white' }}>
                    Enviar
                </Button>

            </Form>
            <a href="mailto:loversfitnes812@gmail.com" id="mail" style={{display:"none"}}>mail</a>
        </div>
    )
}