import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import PintarCard from './PintarCard'

const url ="https://api-proyectofinal.herokuapp.com/dance"

export const Dance = () => {
    const[dance, setDance]= useState([])

    const peticionesGet=async()=>{
        await axios.get(url)
        .then(res =>{
            setDance(res.data);
           
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
                    dance.map(item=>(
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

