const CarritoItem = ({data, eliminarCarrito}) => {
    let {id, name, precio, quantity} = data;

    return (
        <div style={{borderBottom: "thin solid gray"}}><br/>
            <h4>{name}</h4>
            <h5>${precio}.00 x {quantity} = $ {precio * quantity}.00</h5> <br/>
            <button className="deleteall" onClick={() => eliminarCarrito(id)}>Eliminar Uno</button>
            
            <button className="deleteone" onClick={() => eliminarCarrito(id, true)}>Eliminar Todo</button>
            <br/><br/>
        </div>
    )
}

export default CarritoItem