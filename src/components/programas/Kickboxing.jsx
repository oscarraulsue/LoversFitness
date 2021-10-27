import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import PintarCard from './PintarCard'

const url ="https://api-proyectofinal.herokuapp.com/kickboxing"

export const Kickboxing = () => {
    const[kickboxing, setKickboxing]= useState([])

    const peticionesGet=async()=>{
        await axios.get(url)
        .then(res =>{
            setKickboxing(res.data);
           
        }).catch(error=>{
            console.log(error);
        })
    }
    useEffect(() => {
       peticionesGet();
       
    }, [])

    
    return (
        <div className="container_productos">
            <div className="productos_pintar">
                {
                    kickboxing.map(item=>(
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
