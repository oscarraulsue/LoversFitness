import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const DetalleReto = (data) => {
    console.log(data.location.data?.item)
let video = data.location.data?.item
    console.log()
    return (
        <div className="App">
           

            <h2 className="titulo">Bienvenido al Dia {data.location.data?.index + 1}</h2>
            <p>Si apenas estás empezando, puedes realizar 1 sola ronda de la rutina completa. 
            <br/> Si deseas exigirte un poco mas y acelerar tu proceso de cambio, puedes repetirla 2 veces</p>

            <ReactPlayer
                style={{ display: 'flex',margin: '40px auto ',alignItems: 'center'}}
                    url="https://www.youtube.com/watch?v=m8Nk0sOsfys&list=PLKRChTJIqg21CYdO4zFPLiRpeGcASDM2I&index=1"
                    controls= {true}
                    playing= {false}
                    muted={false}
                    width='500px'
                    height='300px'
                   
                />
        <h2 className="titulo"> Luego del calentamiento comencemos con la rutina del dia</h2>
        <ReactPlayer
                style={{ display: 'flex',margin: '40px auto ',alignItems: 'center'}}
                    url={video}
                    controls= {true}
                    playing= {false}
                    muted={false}
                    width='500px'
                    height='300px'
                   
                />

        <a href="https://co.pinterest.com/pin/454019206167243720/feedback/?invite_code=d7dc09b58710bd81dd410918d2781e4c&sender_id=454019343592719107">
        Dieta y consejos</a>
            
        </div>
         );
}

export default DetalleReto