import './Item.css'
import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, precio, img}) => {

  return (
  
    <div className='cards'>
       
        <p>Nombre: {nombre}</p>
        <p>Precio : {precio}</p>
        <img  className='imgProducto' src={img} alt={nombre}/>
        
      {
      //<button className='botonDetalle'> Ver Detalles </button>
      }

      <Link to={`/item/${id}`}> Ver Detalles </Link>
    </div>
    
    
  )
}

export default Item