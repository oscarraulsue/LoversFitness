import React from 'react'
import { Link } from 'react-router-dom'
import { Coaches } from './Coaches'
import Navbar from './Navbar'
import Programas from './Programas'

const PortadaPrincipal = () => {
    return (
        <div className="portada_Principal">
            <Navbar />
            < div className="imagen-portada">
                <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1633825295/proyecto_final/image_1_cttuin.png" alt="no disponible" srcset="" />
            </div>
            <h2 className="titulo_prog">Programas</h2>
            <Programas />
           <Link to="/programaRetos"> <h2>Retos</h2> </Link>
            <h2 className="titulo_prog">Coaches</h2>
            <Coaches />
            
        </div>
    )
}

export default PortadaPrincipal
