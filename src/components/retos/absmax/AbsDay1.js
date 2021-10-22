import React from 'react'
import ReactPlayer from 'react-player'

const AbsDay1 = () => {
    return (
        <div>
        <p>
        Hola bienvenido al primer dia del reto absmax
        <br/>
        Si apenas estás empezando, puedes realizar 1 sola ronda de la rutina completa.
        <br/> Si deseas exigirte un poco mas y acelerar tu proceso de cambio, puedes repetirla 2 veces</p>
              <ReactPlayer
                style={{ display: 'flex',margin: '40px auto ',alignItems: 'center'}}
                    url="https://www.youtube.com/watch?v=Q58-N7lC24M&list=PLKRChTJIqg22d7oZy1SyK_stQ4guXgIdz&index=1&t=44s"
                    controls= {true}
                    playing= {false}
                    muted={false}
                    width='500px'
                    height='300px'
                   
                />
        {/* <a href="https://co.pinterest.com/pin/454019206167243720/feedback/?invite_code=d7dc09b58710bd81dd410918d2781e4c&sender_id=454019343592719107">
        Dieta y consejos</a> */}

        </div>
    )
}

export default AbsDay1
