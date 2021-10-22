import React from 'react'
import { Link } from 'react-router-dom'

const CardRetos = (data) => {
    console.log(data.location)
    let vid = data.location.data?.item.videos
    let portada = data.location.data?.item.portada
    console.log(portada)
    return (
        <div className="App1 ">
           

            <h2 className="titulo1">{data.location.data?.item.nombre}</h2>
            <p>{data.location.data?.item.desc}</p>

            <div className="container_portada">
              
              
                

            { vid?.map((item, index) => {
             return (
            <div className="imagenes" key={index}>
              
                
            <Link
            to ={{ 
              pathname: "/auth/detallereto",
              data: { item,index }
            }}
            style={{textDecoration: "none", color: "white"}}
            >
              
             <img className="imagen_reto1" src={ portada } alt="" />
             <h1 
             style={{marginTop:"-50px",marginLeft:"400px", textDecoration: "none", color: "white", fontSize: "20px"}}
             >Día {index+1}</h1>
            </Link>
            
            </div>
            )
             }) }
             
             </div>
             </div>
        
         );
}

export default CardRetos
