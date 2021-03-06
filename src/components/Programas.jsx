import React from 'react'
import { Link } from 'react-router-dom'


const Programas = () => {
    return (
        <div className="container_pro">
        
           <Link to='/auth/cardio'> <img className="imagen_prog" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632377694/proyecto_final/cardio_eazswg.png" alt="no disponible" srcSet="" /> </Link>
           <Link to='/auth/meditacion'> <img className="imagen_prog" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632377694/proyecto_final/meditacion_gqffga.png" alt="no disponible" srcSet="" /> </Link>
           <Link to='/auth/dance'> <img className="imagen_prog" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632377693/proyecto_final/dance_qkiouq.png" alt="no disponible" srcSet="" /> </Link>
           <Link to='/auth/pilates'> <img className="imagen_prog" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632377692/proyecto_final/pilates_yopjql.png" alt="no disponible" srcSet="" /> </Link>
           <Link to='/auth/yoga'> <img className="imagen_prog" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632377695/proyecto_final/yoga_kn53b9.png" alt="no disponible" srcSet="" /> </Link>
           <Link to='/auth/kickboxing'> <img className="imagen_prog" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632377696/proyecto_final/kickboxing_wzrzi0.png" alt="no disponible" srcSet="" /> </Link>
            

        </div>
    )
}

export default Programas
