import React, {useEffect, useState} from 'react'
import {Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NewProCarro } from '../actions/actionCarrito';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



export const Detalle = (data) => {
   
    const proActivo = useSelector(state => state.active)

    let imagen = " "
    let imag = ""
    let imgInit = ""
    let adm = false
    let tipoU = ""
    const dispatch = useDispatch();
    const [cantidad, setCantidad] = useState(1)
    const tipoAsesor = useSelector(state => state.asesor)

    if (tipoAsesor.tipoAsesor) {
        
        tipoU = tipoAsesor.tipoAsesor.tipo?.tipoAsesor
        if(tipoU === "administrador") {
        adm = true
        }
    }

    if(proActivo && proActivo.active.img){
    imagen = proActivo.active
    imag = imagen.img
     imgInit = imag[0];

    }

    const [selecImg, setSelecImg] = useState(imgInit.response)
    const [picture, setPicture] = useState("")
    const [scrolly, setScrolly] = useState("")
    const [zoom, setZoom] = useState("")
    const [rect, setRect] = useState("")


useEffect(() => {
    window.scroll({ top: 0 })
     setPicture(document.querySelector('#pictures'))
     setRect(document.querySelector('#rect'))
     setZoom(document.querySelector('#zoom'))

     setSelecImg(imgInit.response)
 

     if(zoom){
     zoom.style.backgroundImage = "url(" + imgInit.response + ")";
     }
     window.onscroll = function() {
        setScrolly(window.scrollY)
        
      };

    },[imgInit.response])

    const changeImg = (imgSrc) => {
      
     setSelecImg(imgSrc)
    zoom.style.backgroundImage = "url(" + imgSrc + ")";
}
let w1 = picture.offsetWidth;
let x, y, xx, yy;

const move = (e) => {

    xx = (x-224) * 4.8;
    yy = (y-178) * 4.6; 
    x = e.pageX;
    y = e.clientY;
    if(x < (w1+155)){
        x=w1+155
    }
 
    if(scrolly > 0){
      
        y = scrolly + y;
    }
    if(y < (175)){
        y=175
    }
    if(y > (522)){
        y=522
    }

    if (x > (w1+510)) {
        x=w1+510
       
    }
    
    rect.style.left= (x) + 'px';
    rect.style.top= (y) + 'px';
  


    zoom.style.backgroundPosition = "-" + xx + "px -" + yy + "px";
}
const hadleless = () => {
    if(cantidad > 1){
        setCantidad(cantidad - 1)
    }
}

const hadlePlus = () => {
  
        setCantidad(cantidad + 1)

}





    return (
        <>
        <div className="contgrid">
              <div className="container" style={{marginRight:"-90px"}}>
            <div className="pictures" id="pictures">
            {
                        (imag) ?
                            (

                                imag.map((element, index) => (
                                    <div className="contProducto1" key={index}>
                                    <img className="img" 
                                    onMouseMove={()=> changeImg(element.response, index)} 
                                    id={index} 
                                    style={{width: "50px"}}
                                    src={element.response} 
                                    alt=""/>  
                                    </div>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }
                 </div>
                
                <div className="picture" id="picture"  onMouseMove={move}>
                
                <img id="pic" src={selecImg} alt=""/>
                </div>
                <div className="rect" id ="rect" ></div>
               
                <div className="zoom" id="zoom"></div>
                <Link
                to ={{
                 pathname:"/auth/editar",
                 dataPro: {imagen}
                }}
                >
                <Button
                hidden={adm? false : true}
                style={{ marginLeft:"150px",width:"330px", height:"50px"  }}
                 variant="success"
                 type="button">
                    Editar Registro
                </Button>
                </Link>
                </div>
                <div className="detalleProducto" style={{marginRight:"60px"}}>
               
                    <p style={{fontWeight:"bold", fontSize:"22px"}}>{imagen.nom}</p>
                    <h1 className="" style={{color: "#2cec4d"}}>$ {imagen.precio}</h1>
                    <p>{imagen.detPre}</p>
                    <h1 style={{fontSize:"20px"}}>Color: {imagen.color}</h1>
                    <p>{imagen.detProducto}</p>
                </div>
                <div className="detallePrecio">
                <Link to = "/auth/carrito">
                <button className="btn btn-success compras"
                   ><ShoppingCartIcon/></button>
                   </Link>
                    <h1 style={{color:"#2cec4d"}}>$ {imagen.precio}</h1>
                    <p className="depo">{imagen.detPre}</p>
                    <button className="btn btn-danger menos"
                    style = {{borderRadius: "50%",  paddingTop: "-150px" }}
                    onClick={hadleless}
                    ><label style = {{cursor:"pointer", marginTop: "-14px", marginLeft: "-3px", position:"absolute" }}
                    >-</label>
                    </button>
                    <label
                    style = {{ marginLeft: "-10px" }}
                    >{cantidad}</label>
                    <button className="btn btn-success mas"
                    style = {{borderRadius: "50%"}}
                    onClick={hadlePlus}
                    >
                    <label style = {{ cursor:"pointer", marginTop: "-14px", marginLeft: "-5px", position:"absolute" }}
                    >+</label>
                    </button>
                    <br/>
                    <button
                  onClick={()=>{dispatch(NewProCarro(imagen.nom, imagen.color, imagen.detProducto, imagen.detPre, imagen.precio, imagen.img, cantidad))}}
                    className="btn btn-success agregar"
                    >
                    Agregar al Carrito</button>

                </div>
            

        </div>
        </>
    )
}

