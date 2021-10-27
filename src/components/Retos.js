import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Retos () {
  const { retos } = useSelector(store => store.retos);
 
  return (
        <div className="App">
           

            <h2 className="container_ret">Retos</h2>
            <div className="container_portada" style={{display:"grid", gridTemplateColumns:'repeat(3, 1fr)'}}>
   
            { retos.length > 1 && retos.map((item, index) => {
             return (
            <div className="imagenes" key={index}>
            <Link
            to ={{ 
              pathname: "/auth/cardreto",
              data: { item }
            }}
            
            >
             <img className="imagen_prog" style = {{paddingRight: '10px'}} src={ item?.portada } alt={ item?.nombre } />
            </Link>
            </div>)
             }) }
             </div>
             
             
            
        </div>
         );
}

export default Retos;