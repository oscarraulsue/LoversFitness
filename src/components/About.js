import axios from 'axios';
import { useEffect, useState } from 'react';


function About () {
  const [challenges, setChallenges] = useState([])
  const [coverPage, setCoverPage] = useState([])

  useEffect(() => {
    getUser();
  }, [])

  async function getUser () {
    try {
      const response = await axios.get('https://api-proyectofinal.herokuapp.com/retos');
      setChallenges(response.data);
      setCoverPage([
        response.data[0]?.retos_abdominales[0],
        response.data[1]?.reto_espartano[0],
        response.data[2]?.reto_nalgas_piernas[0],
        response.data[3]?.reto_tabata_express[0],
        response.data[4]?.cuatro_por_cuatro[0],
        response.data[5]?.reto_espartano_extremo[0],
      ])
      console.log(response.data[0]?.retos_abdominales[0])
    } catch (error) {
      console.error(error);
    }
  }

  return (
        <div className="App">
            < div className="imagen-portada">
                <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1633825295/proyecto_final/image_1_cttuin.png" alt="no disponible" srcset="" />
            </div>

            <h2 className="titulo">Programas</h2>
            <div className="container_portada">

            
                
            { coverPage.length > 1 && coverPage.map((item) => {
             return (
            <div className="imagenes">
             <img className="imagen_reto" src={ item?.imagen } alt={ item?.nombre } />
            {/* <span className="titulo_reto"> { item?.nombre } </span> */}
            </div>)
             }) }
             </div>
             <h2 className="titulo">Coaches</h2>

        </div>
         );
}

export default About;