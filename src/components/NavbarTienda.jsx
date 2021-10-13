import { List, makeStyles, Toolbar} from '@material-ui/core';
import React, { useRef } from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { busquedaActiva } from '../actions/actionBuscar';
import { Link } from 'react-router-dom';



const NavbarTienda = ({history}) => {
    const classes = useStyles();
    const [search, setSearch] = useState('')
    const searchref = useRef()
    const dispatch = useDispatch();
    const [posicion, setPosicion] = useState({
        center: {
          lat:0,
          lng: 0
        },
        zoom: 0
      });
      
    navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosicion({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            zoom: 15
          });
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        },
        {
          enableHighAccuracy: true,
         }
         );
 
    const handleInputChange = (e,) => {
         e.preventDefault()
         setSearch(e.target.value)
         dispatch(busquedaActiva(search))
    }
    return (
        <>
            <Toolbar className={classes.toolbar}>
                <List edge="end" className={classes.list}>

                    <Link
                        to={{
                            pathname: "/auth/map",
                            posicion1: posicion
                        }}
                        spy={true}
                        smooth={true}
                    >Elige tu dirección</Link>


                    <form>
                        <input
                            name="search"
                            ref={searchref}
                            placeholder="Buscar"
                            value={search}
                            onChange={handleInputChange}
                            className={classes.inBusca}
                            style={{ width: "500px", marginLeft: "-50%" }}
                        />

                    </form>

                    <Link
                                    to="/auth/regproducto"
                                    spy={true}
                                    smooth={true}
                                >Agregar Producto</Link>
                </List>
            </Toolbar>

        </>
    )
}


const useStyles = makeStyles((theme) => ({

    toolbar: {
        display: "flex",
        alignItems: "center",
        margin: "0",
        marginBottom: "2rem",
        width:"100%"
    },

    list: {
        alignItems: "center",
        display: "flex",
        margin: "0",
        width:"100%",
        color: "#000",

        "& a": {
            color: "#000",
            fontSize: "1rem",
            fontWeight: 'bold',
            margin: " auto 10px",
            textDecoration: "none"
        },
        "& a:hover": {
            cursor: "pointer",
            color: "tomato",
            paddingLeft: "5px",
            borderBottom: "2px solid tomato",
            borderLeft: "2px solid tomato",
            boxShadow: "-2px 2px 5px tomato"
        }
    },
    listbottom: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "#fff",
            position: "absolute",
            top: 0,
            right: 10,
        }
    },

  
}))

export default NavbarTienda

