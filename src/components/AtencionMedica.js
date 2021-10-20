import React from 'react'
import { Link } from 'react-router-dom'
import SupportEngine from '../supportengine/SupportEngine'


export const AtencionMedica = () => {
    return (
        <div className="container1">
            <div className="atencion">
                {/* <img className="logo" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634148608/logolovers_jetoby.png" alt="" /> */}
                <h3 className="descrip">Hola, 
                ya puedes hacer tus consultas a <br />
                través de nuestros chats.</h3>
                <img className="asesorme" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634665164/WhatsApp_Image_2021-10-13_at_3.59.42_PM_-_copia_rx8ock.jpg" alt="" />
                <h4 className="ase">Dra. Maritza Colina</h4>
                <h5 className="ase1">Asesora Online</h5>


                <h3 className="de"> Servicios de gestión y asesoría deportivas,  <br />
                evaluación, entrenadores personales, de esta forma<br /> 
                 disfrutarás de un equipo profesional multidisciplinar. </h3>

                {/* <img className="asesor" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634149764/medicos-2_blzjt4.jpg" alt="" /> */}
                <br /><br />
                <Link to="/telemedicina" type="button" className="volver">Volver</Link><br />
            </div>
            <SupportEngine />
        </div>
    )
    
}
