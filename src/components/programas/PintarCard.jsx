import React from 'react'

const PintarCard = (props) => {
const{
    id,
    portada,
    titulo,
    video
}=props.card

    return (
        <div className="cart_programas">
            <div className="programas">
                <img className="img_programas" src={portada} alt="no disponible" srcset="" />
                <h2 className="titulo_programa">{titulo}</h2>
                <video src="video"></video>
                
            </div>
            
        </div>
    )
}

export default PintarCard
