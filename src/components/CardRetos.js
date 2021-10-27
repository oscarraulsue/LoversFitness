import React from 'react'
import { Link } from 'react-router-dom'

const CardRetos = (data) => {
    let vid = data.location.data?.item.videos
    let portada = data.location.data?.item.portada
    let nom = data.location.data?.item.nombre
    window.scroll({ top: 0 })
    return (
        <div className="App1 ">
           

            <h2 className="titulo1">{data.location.data?.item.nombre}</h2>
            <p>{data.location.data?.item.desc}</p>

            <div className="container_portada"
            style={{display:"grid", gridTemplateColumns:'repeat(3, 1fr)', marginLeft:"350px"}}
            >
            { vid?.map((item, index) => {
             return (
            <div className="imagenes" key={index}>
              
                
            <Link
            to ={{ 
              pathname: "/auth/detallereto",
              data: { item,index, nom }
            }}
            style={{textDecoration: "none", color: "white", margin:"20px"}}
            className="imagen_prog"
            >
              
             <img className="imagen_reto1"  src={ portada } alt="" />
             <h1 
             style={{cursor:"pointer", marginTop:"-40px", width:"340px",  display:"flex", marginLeft:"140px", textDecoration: "none", color: "white", fontSize: "20px"}}
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
