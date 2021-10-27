import React from 'react'
import ReactPlayer from 'react-player'
import { Form, Button } from 'react-bootstrap';
import {  useSelector } from 'react-redux';

const DetalleReto = (data) => {
    window.scroll({ top: 0 })
    const usuario = useSelector(state => state.login)
    let video = data.location.data?.item
    let dia = data.location.data?.index + 1 
    let frase = usuario.name + " ha realizado con éxito el día " + dia
    let autor = "del reto " + data.location.data?.nom
    let tweet= 'https://twitter.com/intent/tweet?hashtags=FITNESSLOVERS&related=loversfitnnes&text=' +
    encodeURIComponent( frase + ' ' + autor);
    let instagram = 'https://telegram.me/share/url?url=DIRECCION_URL&text=' +
    encodeURIComponent('' + frase + '' + autor);
    let facebook = 'https://www.facebook.com/sharer/sharer.php?u=' +
    encodeURIComponent('' + frase + '' + autor);
    return (
        <div className="App">
           

            <h2 className="titulo">Bienvenido al Dia {data.location.data?.index + 1}</h2>
            <p className="titulo">Si apenas estás empezando, puedes realizar 1 sola ronda de la rutina completa, si deseas 
            <br/>  exigirte un poco más y acelerar tu proceso de cambio, puedes repetirla 2 veces.</p>

            <ReactPlayer
                style={{ display: 'flex',margin: '40px auto ',alignItems: 'center'}}
                    url="https://www.youtube.com/watch?v=m8Nk0sOsfys&list=PLKRChTJIqg21CYdO4zFPLiRpeGcASDM2I&index=1"
                    controls= {true}
                    playing= {false}
                    muted={false}
                    width='500px'
                    height='300px'
                   
                />
        <h2 className="titulo"> Luego del calentamiento comencemos con la rutina del día.</h2>
        <ReactPlayer
                style={{ display: 'flex',margin: '40px auto ',alignItems: 'center'}}
                    url={video}
                    controls= {true}
                    playing= {false}
                    muted={false}
                    width='500px'
                    height='300px'
                   
                />
        <h2 className="titulo">¿Ya finalizaste el reto? cuéntanos como te ha parecido. </h2>

<Form
                className="formRegistro"
                // onSubmit={handleComentarios}
                >
        
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombres y Apellidos</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su información"
                        required
                        name="nombre"
                        // value={nombre}
                        // onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        required
                        // value={email}
                        // onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3 comenta" controlId="formBasicName">
                    <Form.Label>Comentarios</Form.Label>
                    <textarea
                            name="description"
                            className="form-control mt-2"
                            autoComplete="of"
                            // value={description}
                            // onChange={handleInputChange}
                        ></textarea>
                </Form.Group>
                
                <br /> <br />  <br />
                <Button variant="info" type="submit" style={{ marginLeft: "38%", marginTop: '-4.8rem', color: 'white' }}>
                    Enviar
                </Button>

            </Form>
            <h2 className="titulo">Comparte tu avance</h2>
            <div style={{ marginLeft: "0px" }}>
                        <a href="https://m.facebook.com/home.php?ref=wizard&_rdr">
                            <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679406/facebook_gqfii0.png" width="100px" alt="Logo" />
                        </a>
                        <a href="https://www.instagram.com/loversfitnnes/">
                            <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679407/inst_yc3kha.png" width="100px" alt="Logo" />
                        </a>
                        <a style={{ marginLeft: "-2px" }} href={tweet}>
                            <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1633958065/Imagen2_wmxycr.png" width="100px" alt="Logo" />
                        </a>
                    </div>
        </div>
         );
}

export default DetalleReto