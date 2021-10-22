import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Coaches } from './Coaches';


function Retos () {
  const [coverPage, setCoverPage] = useState([])
  const { retos } = useSelector(store => store.retos);



  return (
        <div className="App">
           

            <h2 className="container_ret">Retos</h2>
            <div className="container_portada">
   
            { retos.length > 1 && retos.map((item, index) => {
             return (
            <div className="imagenes" key={index}>
            <Link
            to ={{ 
              pathname: "/auth/cardreto",
              data: { item }
            }}
            >
             <img className="imagen_reto" src={ item?.portada } alt={ item?.nombre } />
            </Link>
            </div>)
             }) }
             </div>
             
             
            
        </div>
         );
}

export default Retos;