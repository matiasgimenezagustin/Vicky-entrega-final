import React from "react";
import Navegador from "./components/Navegador/Navegador";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainar/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoContext";
import Cart from "./components/Cart/Cart";
import Productos from "./productos/componentes/Productos";
import Formulario from "./Formulario/Formulario";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navegador />
  
          
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/cart/checkout" element={<Formulario/>}/>
            <Route path="*" element={<h2>Sitio en Construcción</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
