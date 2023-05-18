import React,{ useState} from 'react';
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {  carrito: currentCart, calcTotal } = useContext(CarritoContext)
    console.log(currentCart)
    const  [carrito, vaciarCarrito] = useState(currentCart);
 
    /* const totalCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0); */
    
    let total = calcTotal()
    
  /*   if(totalCantidad && totalCantidad === 0) {
        return (
            <>
            <h2>No hay productos en el carrito</h2>
            <Link to='/'>Productos</Link>
            </>
        )
    }
 */
    return (
        <div>
            {
            carrito.length > 0 &&
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)}
            
            {
                carrito.length > 0 
                ? 
                <>
                    <h3>Total: ${total}</h3>
                    <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                    <Link to='checkout'>Finalizar compra</Link>
                </>
                :
                <h1>Aun no has agregado nada aqui...</h1>
            }
            
        </div>
    )
}

export default Cart