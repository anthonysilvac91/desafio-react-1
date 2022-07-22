import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <> 
    <div>
        <h1>Kiripaper</h1>
        <button>Inicio</button>
        <button>Tienda</button>
        <button>Blog</button>
        <button>Descargas</button>
        <button>Contacto</button>
    </div>
    <div>
    <CartWidget/>
    </div>
    

    </>
  )
}

export default Navbar