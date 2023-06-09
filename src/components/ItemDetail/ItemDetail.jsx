import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import React,{ useState } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'


const ItemDetail = ({id, nombre, precio, img, stock, descripcion}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const contadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
//console.log("Productos agregados:" + cantidad);

    const item = {id: id, nombre, precio};
    agregarProducto( item, cantidad);
  }


  return (
    <div className='contendorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>{descripcion}</p>
        <img src= {img} alt= {nombre}/>
        
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={contadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail