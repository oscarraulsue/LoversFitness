import { List, makeStyles, Drawer, Toolbar, IconButton, Avatar } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react"
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { logout } from '../actions/actionLogin';
import { Delete } from '../actions/actionTipoAsesor';




const Navbar = () => {

    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const classes = useStyles();
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

    const handlelogout = () => {
        if (idTipo) {
            dispatch(Delete(idTipo))
            setOpen(false)
        } else {
            dispatch(logout())
            setOpen(false)
        }
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
        <div className="containerNavbar">


            <Toolbar className={classes.toolbar}>
                <div>
                    <Link
                        to="/"
                        style={{ position: "absolute", marginLeft: "-20px", marginTop: "-5px" }}
                    >
                        <img className={classes.log} src="https://res.cloudinary.com/dky22nhv5/image/upload/v1634661975/logo_wpilre.png" alt="Ir a inicio" title="Ir a inicio" />
                    </Link>
                    <div style={{ marginLeft: "140px" }}>
                        <a href="https://m.facebook.com/home.php?ref=wizard&_rdr">
                            <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679406/facebook_gqfii0.png" className={classes.logo} alt="Logo" />
                        </a>
                        <a href="https://www.instagram.com/loversfitnnes/">
                            <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679407/inst_yc3kha.png" className={classes.logo} alt="Logo" />
                        </a>
                        <a style={{ marginLeft: "-2px" }} href="https://twitter.com/loversfitnnes?t=tqvG_H77EyfMkzN24479lg&s=09">
                            <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1633958065/Imagen2_wmxycr.png" className={classes.logo} alt="Logo" />
                        </a>
                    </div>
                </div>
                <List edge="end" className={classes.list}>

                    <label
                        
                        className={classes.labelMenu}
                    >Menu
                        <ul className={classes.ul}>
                            <li style={{ backgroundColor: "#2B2F3A", height: "13.5px", width: "200px", textDecoration: "none", color: "white", position: "absolute" }}><label></label></li>
                            <li style={{ marginTop: "17px" }}>
                                <Link
                                    className={classes.li}
                                    to="/programaRetos"
                                >Programas</Link></li>
                            <li><Link
                                className={classes.li}
                                to="/coaches"
                            >Coaches</Link></li>
                            <li><Link
                                to="/telemedicina"
                                className={classes.li}
                            >Salud</Link></li>
                        </ul>
                    </label>

                    <Link
                        to="/apptienda"
                        className={classes.itemMenu}
                    >Tienda</Link>

                    <Link
                        to="/comentarios"
                        className={classes.itemMenu}
                    >Contacto</Link>

                    <Link
                        hidden={isLoggedIn ? true : false}
                        to="/login"
                        className={classes.itemMenu}

                    >Iniciar sesión</Link>


                </List>
                <IconButton edge="end" className={classes.listbottom} onClick={() => setOpen(true)}>
                    <Avatar
                    hidden = {!isLoggedIn ? true : false}
                        alt=""
                        src= {usuario.foto? usuario.foto : "/static/images/avatar/1.jpg"}
                        style={{ marginLeft: "40%", width: 50, height: 50, cursor: 'pointer' }}
                    />
                </IconButton>
            </Toolbar>

            <Drawer  anchor="right" open={open} onClose={() => setOpen(false)} className={classes.menul}>
            <div style={{backgroundColor:"#2B2F3A", height:"100%", width: "25vw"}}>
                <IconButton onClick={() => setOpen(false)} className={classes.close}>
                    <CancelIcon fontSize="large" />
                </IconButton>
                
                <br/>
                <Avatar
                    
                        alt=""
                        src= {usuario.foto? usuario.foto : "/static/images/avatar/1.jpg"}
                        style={{ marginLeft: "38%", width: 100, height: 100, cursor: 'pointer' }}
                    />
                    <div className={classes.menulName}>
                    <label>¡Hola!</label> <br/>
                    <label>{usuario.name}</label>
                    </div>

                <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}>Mis retos</Link>
                    
                <Link
                    to="/auth/supportadmin"
                    spy={true}
                    smooth={true}
                    duration={500}
                    hidden={medico? false : true}
                    offset={-64}>Chat</Link>
                   
                <Link
                    to="/auth/regproducto"
                    spy={true}
                    smooth={true}
                    duration={500}
                    hidden={adm? false : true}
                    offset={-64}>Gestion de productos</Link>
                   
                   <Link
                    to="/auth/formcompra"
                    spy={true}
                    smooth={true}
                    duration={500}
                    hidden={adm? false : true}
                    offset={-64}>Compras Realizadas</Link>

                <Link
                    onClick={handlelogout}
                    to="/"
                    spy={true}
                    smooth={true}
                    >Cerrar sesión</Link>

</div>
            </Drawer>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    log: {
        width: "150px",
        height: "88px"
    },
    menulName:{
        textAlign: "center",
        color:"#22D9DB",
        fontWeight: 'bold',
        fontSize: "1.4rem",
        textDecoration: "none",
    },

    labelMenu: {
        color: "#fff",
        fontSize: "1.4rem",
        fontWeight: 'bold',
        marginLeft: theme.spacing(3),
        textDecoration: "none",
        "&:hover": {
            cursor: "pointer",
            color: "#35669F",
            padding: "0 5px",
            borderBottom: "2px solid #35669F",
            borderLeft: "2px solid #35669F",
            boxShadow: "-2px 2px 5px #35669F",
            backgroundColor: "#22D9DB",
            "& ul": {
                display: "block"

            }
        },
        "& ul": {
            top: "44px",
            left: "-10px",
            display: "none",
            position: "absolute",
            minWidth: "140px",
            backgroundColor: "#0c2f5983",
            textDecoration: "none",
            listStyle: "none",
            padding: "0 20px 10px 0px",
            color: "white"
        }
    },

    li: {
        minWidth: "140px",
        textDecoration: "none",
        marginLeft: "20px",
        color: "white",
        "&:hover": {
            color: "#22D9DB"
        }
    },
    root: {
        backgroundColor: "#2B2F3A",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
    toolbar: {
        display: "flex",
        backgroundColor: "#2B2F3A",

    },
    logo: {
        width: "50px",
        height: "50px",
        marginLeft: "15px",
        "&:hover": {
            cursor: 'pointer',
        }
    },
    list: {
        alignItems: "right",
        display: "flex",
        margin: "auto",
        marginRight: "0",
    },
    listbottom: {

        display: "block",
        color: "#fff",
        top: 0,
        right: 0,
        margin: "-10px"


    },
    itemMenu: {
        color: "#fff",
        fontSize: "1.4rem",
        fontWeight: 'bold',
        marginLeft: theme.spacing(3),
        textDecoration: "none",
        "&:hover": {
            cursor: "pointer",
            color: "#35669F",
            padding: "0 5px",

            borderBottom: "2px solid #35669F",
            borderLeft: "2px solid #35669F",
            boxShadow: "-2px 2px 5px #35669F",
            backgroundColor: "#22D9DB"
        }
    },

    menul: {
            "& a": {
            textDecoration: "none",
            marginLeft: "50px",
            marginTop:"20px",
            display: "block",
            fontSize: "1.4rem",
            color: "#fff",
            fontWeight: "bold",
        },
        "& a:hover": {
            color: "#22D9DB",
            cursor: "pointer",
        }

    },
    close: {
        color: "red",
        position: "absolute",
        top: 0,
        right: 10,
    }
}))

export default Navbar

