import React from 'react'
import ReactPlayer from 'react-player'

const PintarCard = (props) => {
const{
    id,
    portada,
    titulo, 
    video
}=props.card
console.log("soy el video",video)
    return (
        <div className="cart_programas">
            <div className="programas">
                {/* <img src={portada} alt="no disponible" srcset="" /> */}
                <h2 className="titulo_programa">{titulo}</h2>
                <ReactPlayer
                style={{ display: 'flex',margin: '40px auto ',alignItems: 'center'}}
                    url={video}
                    controls= {true}
                    playing= {false}
                    muted={false}
                    width='300px'
                    height='200px'
                    // origin="https://api-proyectofinal.herokuapp.com/cardio"
                    // loading="lazy"
                    
                />
            </div>
            
        </div>
    )
}

export default PintarCard
