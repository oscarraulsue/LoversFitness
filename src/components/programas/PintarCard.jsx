import React from 'react'
import ReactPlayer from 'react-player'

const PintarCard = (props) => {
const{
    titulo, 
    video
}=props.card

    return (
        <div className="cart_programas">
            <div className="programas">
    
                <h2 className="titulo_programa">{titulo}</h2>
                <ReactPlayer
                style={{ display: 'flex',margin: '40px auto ',alignItems: 'center'}}
                    url={video}
                    controls= {true}
                    playing= {false}
                    muted={false}
                    width='300px'
                    height='200px'

                    
                />
            </div>
            
        </div>
    )
}

export default PintarCard
