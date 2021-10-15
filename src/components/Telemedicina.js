import React from 'react'
import { Link } from 'react-router-dom'


export const Telemedicina = () => {
    return (
        <div className="prin">
            <img className="teleme" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634158863/WhatsApp_Image_2021-10-13_at_3.59.42_PM_kjc1fd.jpg" alt=""/>
            <h1 className="resena">Telemedicina Deportiva </h1>
            <h1 className="resena1">Nuestro servicio les permite a <br/>
            todos nuestros usuarios a realizar <br/>
            sus consultas médicas deportivas con atención <br/>
            de calidad. Nuestra conexión <br/>
             es privada entre especialistas y usuarios, <br/>
            esto les garantiza un servicio personalizado <br/>
            pensando en su beneficio.</h1>

             <Link to="/auth/atencionmedica" type="button" className="nu">Ver Perfil Telemedicina</Link><br />

            <img className="telemed" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1634158863/WhatsApp_Image_2021-10-13_at_4.00.20_PM_zyngah.jpg" alt=""/>
            
            <h1 className="resena2">Nutrición y Dietética</h1>
            <h1 className="resena3"> 1. Asesorías de parte de un profesional. <br/>
                    2. Evaluación completa. <br/>
                    3. Educación nutricional. <br/>
                    4. Resolvemos dudas. <br/>
                    5. Plan de alimentación, menús de ejemplos <br/>
                    y recomendaciones de acuerdo a sus necesidades. </h1>

             <Link className="nu" to="/auth/atencionnutricion" type="button">Ver Perfil Nutrición</Link><br />
        </div>
    )
}
