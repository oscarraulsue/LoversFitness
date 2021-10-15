import React from 'react'
import { Link } from 'react-router-dom'
import SupportEngine from '../supportengine/SupportEngine'

export const AtencionMedica = () => {
    return (
        <div className="container">
            <div className="atencion">
                <img className="logo" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634148608/logolovers_jetoby.png" alt="" />
                <h3 className="descrip">Hola, 
                ya puedes hacer tus consultas a <br />
                través de nuestros chats.</h3>
                <img className="asesorme" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634146278/prueba_uckgna.jpg" alt="" />
                <h4 className="ase">Dra. Anlli Gallardo</h4>
                <h5 className="ase1">Asesora Online</h5>

                <img className="asesor" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634149764/medicos-2_blzjt4.jpg" alt="" />
                <br /><br />
                <Link to="/telemedicina" type="button" className="volver">Volver</Link><br />
            </div>
            <SupportEngine />
        </div>
    )
    
}
