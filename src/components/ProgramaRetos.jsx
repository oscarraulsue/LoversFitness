import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Fragment } from 'react/cjs/react.production.min'
import Cards from './Card'

const url = "https://api-proyectofinal.herokuapp.com/retos"
export const ProgramaRetos = () => {
    


    const [retos, setRetos] = useState([]);
 

    const peticionesGet=async()=>{
        await axios.get(url)
        .then(res =>{
            setRetos(res.data);
        }).catch(error=>{
            console.log(error);
        })
        
    }
 
    const portada=[
        retos[0].retos_abdominales[0],
        retos[1].retos_espartano[0],
        retos[2].reto_nalgas_piernas[0],
        retos[3].reto_tabata_express[0],
        retos[5].reto_espartano_extremo[0]
 
    ]
    useEffect(() => {
       peticionesGet();
       
       console.log('hola arreglo')   
    },[])
    console.log("estos es retos",retos)

 

    console.log('esto es ',portada);
        
    
   


    return (
        <Fragment>
            
                
                < div className="imagen-portada">
                <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1633825295/proyecto_final/image_1_cttuin.png" alt="no disponible" srcset="" />
                </div>
                    <h1>perros</h1>
                <div className="card_impresas">
                    {
                   
                    portada.map((item )=> {
                                <img src={item.imagen} alt="no disponible" />
                                // <span> {{item.nombre}} </span>
                            
                        }
                        )
                    }
                </div>
       

      </Fragment>
    )
}
