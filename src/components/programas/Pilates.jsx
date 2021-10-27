import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import PintarCard from './PintarCard'

const url ="https://api-proyectofinal.herokuapp.com/pilates"

export const Pilates = () => {
    const[pilates, setPilates]= useState([])

    const peticionesGet=async()=>{
        await axios.get(url)
        .then(res =>{
            setPilates(res.data);
           
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
                    pilates.map(item=>(
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
