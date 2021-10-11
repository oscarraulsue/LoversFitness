import React from 'react'
import { Link } from 'react-router-dom';



const AtencionMedica = () => {

	
	return (
		<div>
    <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1633917139/telemedicina_npdlwb.webp" width="100%" alt="" />
			<Link
			to="/auth/medicinadeportiva"
			>
			<button>Ingresa a citas Telemedicina Deportiva</button>
			</Link>
  	<img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1633918950/nutriii_u56bdu.webp" width="100%" alt="" />
  			<Link
			  to="/auth/nutricionista"
			  >
			  <button>Ingresa a citas Telemedicina Deportiva</button>
			</Link>
		</div>
	)
}

export default AtencionMedica;
