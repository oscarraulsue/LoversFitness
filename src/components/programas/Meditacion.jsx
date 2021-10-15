import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import PintarCard from './PintarCard'

const url ="https://api-proyectofinal.herokuapp.com/meditacion"

export const Meditacion = () => {
    const[meditacion, setMeditacion]= useState([])

    const peticionesGet=async()=>{
        await axios.get(url)
        .then(res =>{
            setMeditacion(res.data);
           
        }).catch(error=>{
            console.log(error);
        })
    }
    useEffect(() => {
       peticionesGet();
       
    }, [])

    console.log("yo soy meditacion",meditacion)
    
    return (
        <div className="container_productos">
            <div className="productos_pintar">
                {
                    meditacion.map(item=>(
                        <PintarCard 
                        key={item.titulo}
                        card={item}
                        />
                    ))
                }
            </div>
            
        </div>
    )
}