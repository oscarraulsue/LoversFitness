import React from 'react'
import { Link } from 'react-router-dom'


export default function Cards(props) {
    const {
    imagen,
    instructor,
    nombre
    
    } = props.dato   
        
    return (
       
        <div className="modal-dialog modal-dialog-scrollable ">
            <div id="padre">
            <img src={imagen} id="content_div_one_photo" className="img-fluid card-img text-center border border-white" alt="no disponible imagen"/>
            </div>
        </div>
       


    )
}