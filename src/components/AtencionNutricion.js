import React from 'react'
import { Link } from 'react-router-dom'
import SupportEngine from '../supportengine/SupportEngine'

export const AtencionNutricion = () => {
    return (
        <div className="containerr">
            <div className="nutri">
                {/* <img className="logos" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634148608/logolovers_jetoby.png" alt="" /> */}
                <img className="aten" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634665158/WhatsApp_Image_2021-10-13_at_4.00.20_PM_-_copia_enruwo.jpg" alt="" />
                <h2 className="nom">Ana Lucía Contreras Durán</h2>
                <h2 className="for">Formación <br />
                Nutrición y Dietética - Universidad Nacional De Colombia. </h2>
                
                
                <h3 className="des">Ayudo a las personas a transformar sus vidas  <br />
                alimentándose de forma balanceada, para que puedan <br /> 
                tener buenos resultados físicos y emocionales. </h3>

                <Link to="/telemedicina" type="button" className="volveer">Volver</Link><br />
            </div>
            <SupportEngine />
        </div>
    )
}
