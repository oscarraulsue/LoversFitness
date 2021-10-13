import React from 'react'
import { useDispatch } from 'react-redux'


const dispatch = useDispatch()

const handlePerfil = () => {
    dispatch(mostrar())
}

export const Telemedicina = () => {
    return (
        <div className="prin">
            <img className="teleme" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634076140/Imagen1_apjvrw.png" alt="" />

            <h1 className="telede">Telemedicina Deportiva</h1>
            <h4 className="teleinn">Nuestro innovador servicio le permite 
            <br /> a nuestro usuarios realizar sus consultas médicas deportivas <br /> 
            de una manera interactiva y con calidad.<br />
             Una conexión privada con nuestros especialistas, <br />
             lo cual garantiza un servicio de calidad y <br />
             pensando en el beneficio de nuestros usuarios.</h4>

             <button 
             className="btn btn-primary"
             onClick={() => handlePerfil}             
             >Ver Perfil</button>
        </div>
    )
}
