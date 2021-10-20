import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { Coaches } from './Coaches'
import Programas from './Programas'
import { useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const PortadaPrincipal = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [open, setOpen] = useState(false);
    let medico = false
    let adm = false
    // const [tipoU, setTipoU] = useState(false);
   let tipoU = ""
    let idTipo = ""
    
    const usuario = useSelector(state => state.login)
    const tipoAsesor = useSelector(state => state.asesor)

    if (tipoAsesor.tipoAsesor) {
        
        tipoU = tipoAsesor.tipoAsesor.tipo?.tipoAsesor
        if(tipoU === "administrador") {
        adm = true
        }
        if(tipoU === "medico"){
        medico = true
        }
        idTipo = tipoAsesor.tipoAsesor.id
    }
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

        });
    }, [setIsLoggedIn])
    return (
        <div className="portada_Principal">
            <div 
            hidden={isLoggedIn ? true : false}
            className="imagen-portada">
                <img width="1430vw" height="650rem" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1633825295/proyecto_final/image_1_cttuin.png" alt="no disponible" srcSet="" />
           
            </div>
            <div
             hidden={isLoggedIn ? false : true}
            >
            <img width="1430vw" height="650rem" src="https://www.lavanguardia.com/files/article_main_microformat/uploads/2021/05/26/60ae6d9f84808.jpeg" alt="no disponible" srcSet="" />
           <p
           style={{fontStyle:"italic", fontSize:"40px", color:"white", position:"absolute", top:"400px", marginLeft:"40px", textShadow:"3px 3px 3px black"}}
           >"Acepta los retos para así sentir </p>
           <p
            style={{fontStyle:"italic", fontSize:"40px", color:"white", position:"absolute", top:"460px", marginLeft:"240px", textShadow:"3px 3px 3px black"}}
           > la euforia de la victoria" </p>
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
