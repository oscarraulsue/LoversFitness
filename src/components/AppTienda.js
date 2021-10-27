import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { busquedaActiva } from '../actions/actionBuscar';
import { listProducto } from '../actions/actionRegProducto';
import { ListarProducto } from './ListarProducto'
import { List, makeStyles, Toolbar} from '@material-ui/core';
import { useState } from "react"
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const AppTienda = (history) => {
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

    useEffect(() => {
        dispatch(listProducto());
      }, [dispatch])

    return (
        <div>
  <Toolbar className={classes.toolbar}>
                <List edge="end" className={classes.list}>

                    <Link
                        to={{
                            pathname: "/auth/map",
                            posicion1: posicion
                        }}
                    >
                        <img width= "80px" src="https://i1.wp.com/soytecno.com/wp-content/uploads/2017/07/area-01-e1501620926535.png?fit=1200%2C809&ssl=1" alt="" title="Elige tu dirección"/>
                    </Link>


                    <form>
                        <input
                            name="search"
                            ref={searchref}
                            placeholder="Buscar"
                            value={search}
                            onChange={handleInputChange}
                            className={classes.inBusca}
                           
                        />

                    </form>
                    <Link to = "/auth/carrito">
                <button 
                style={{marginLeft:"-270px", position:"relative", zIndex:'-1'}}
                className="btn btn-success compras"
                   ><ShoppingCartIcon/></button>
                   </Link>
                </List>
            </Toolbar>
        <ListarProducto /> 
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    inBusca: { 
        width: "500px", 
        position: "relative", 
        zIndex:"-1", 
        marginLeft: "-500px",
    },
    toolbar: {
        disy: "flex",
        alignItems: "center",
        margin: "0",
        top: "30px",
        marginBottom: "1rem",
        color: "#FFFFFF",
        width:"100%"
    },

    list: {
        alignItems: "center",
        display: "flex",
        margin: "0",
        padding: "0",
        width:"100%",
        color: "#FFFFFF",

        "& a": {
            color: "#FFFFFF",
            fontSize: "1rem",
            fontWeight: 'bold',
            marginRight: " 20px",
            marginLeft: "23%",
            width: "80px",
            textDecoration: "none"
        },
        "& a:hover": {
            cursor: "pointer",
            color: "#FFFFFF",
            boxShadow: "-2px 2px 5px grey"
        }
    },


  
}))

export default AppTienda
