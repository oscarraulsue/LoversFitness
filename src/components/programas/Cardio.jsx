import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import PintarCard from './PintarCard'

const url ="https://api-proyectofinal.herokuapp.com/cardio"

export const Cardio = () => {
    const[cardio, setCardio]= useState([])

    const peticionesGet=async()=>{
        await axios.get(url)
        .then(res =>{
            setCardio(res.data);
           
        }).catch(error=>{
            console.log(error);
        })
    }
    useEffect(() => {
       peticionesGet();
       
    }, [])

    console.log("yo soy cardio",cardio)
    
    return (
        <div className="container_cardio">
            <div className="cardio">
                {
                    cardio.map(item=>(
                        <PintarCard
                        style={{ display: 'flex',margin: '40px auto ',alignItems: 'center'}}
                            url={item.video}
                            controls= {true}
                            playing= {false}
                        />
                    ))
                }
            </div>
            
        </div>
    )
}
