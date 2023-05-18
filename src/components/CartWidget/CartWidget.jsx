import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext" 


const CartWidget = () => {
    const {carritoCounter} = useContext(CarritoContext);
    return(
        <div>
            {carritoCounter()}

            <Link to='/cart'></Link>
        </div>
    )
}

export default CartWidget