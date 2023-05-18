import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import './Navegador.css'
import { NavLink, Link } from "react-router-dom";

const Navegador = () => {
    const imgGrow = "<img src='/public/img/LogoRetro Colorido' alt= 'carrito'/>";
  return (

    <header>
      <Link to={"/"}>
      <img className="imgGrow" src={imgGrow} alt="Logo grow" />
      </Link>
      <ul>
        <li>
          <NavLink to={`/categoria/2`}>Tierras</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/3`} >Para fumadores</NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  )
}

export default Navegador