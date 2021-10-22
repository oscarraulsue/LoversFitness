import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { cargarActive, listAct } from '../actions/actionRegProducto';



export const ListarProducto = () => {
    const [end, setEnd] = useState(10)
    const [noEncontre, setNoEncontre] = useState("")
    let noFind = "";
    let noFind2 = "";
    const { producto } = useSelector(store => store.productos);
    const { busqueda } = useSelector(store => store.buscar);
    const dispatch = useDispatch();
    const proActivo = useSelector(state => state.active)
    console.log(proActivo)
    
    useEffect(() => {

        setNoEncontre(document.getElementById("noFindDiv"))
        window.scroll({ top: 0 })
        setEnd(10)
        if (!busqueda && busqueda === '') {
            noEncontre.style.display = "none";
        }
        dispatch(listAct())
        
    }, [busqueda])

    let producto2 = producto;

    if (busqueda && busqueda !== '') {
        console.log(busqueda)
        console.log(producto)
        console.log(producto.nom)
        let busq = busqueda.valueOf().toLowerCase();
        producto2 = producto.filter(prod => prod.nom.toLowerCase().includes(busq));
        if (!producto2.length) {
            console.log("no encontre")
            noEncontre.style.display = "block";
            noFind = "https://res.cloudinary.com/dky22nhv5/image/upload/v1632084156/buscar_xsyvmf.png"
            noFind2 = `No se encontraron resultados para "${busqueda}"`;
        }
    }


    let prodImp = producto2.slice(0, end)
    return (
        <>

            <InfiniteScroll
                dataLength={prodImp.length}
                next={() => setEnd(end + 2)}
                hasMore={true}
            >
                <div className="contProd">
                    {
                        (prodImp) ?
                            (

                                prodImp.map((element, index) => (
                                    
                                    <Link className="tarjeta"
                                        key={index}
                                        style={{ textDecoration: "none", color: "black", textAlign: "center"  }}
                                        to={{
                                            pathname: "/detalle",
                                            data: { element }
                                            
                                        }}
                                      
                                        onClick={()=>{dispatch(cargarActive(element.nom, element.color, element.detProducto, element.detPre, element.precio, element.img))}}
                                    >

                                        <div className="contProducto" >

                                            <img className="imgPro" src={element.img[0].response} alt="" />
                                            <h1 className="nomPro">{element.nom}</h1>
                                            <h1 className="preProd">$ {element.precio}</h1>
                                            <h1 className="detpPro">{element.detPre}</h1>

                                        </div>

                                    </Link>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }

                </div>
            </InfiniteScroll>
            <div className="noFind" id="noFindDiv">
                <img style={{ margin: "auto", display: "flex", width: "420px", height: "330px" }} src={noFind} alt="" />
                <h1 style={{ width: "100%", margin: "0 auto", display: "flex", justifyContent: "center", textalign: "center" }}>{noFind2}</h1>
            </div>
        </>
    )
}
