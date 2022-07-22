import React from 'react'
import Productos from './Productos'

const ItemListContainer = () => {
  return (
    <>
    <div>Productos Destacados</div>
    <div> 
      <Productos titulo = "Producto 1" descripcion = "Lorem ipsum dolor sit amet" precio = "3000" />
      <Productos titulo = "Producto 2" descripcion = "Lorem ipsum dolor sit amet" precio = "1000"  />
      <Productos titulo = "Producto 3" descripcion = "Lorem ipsum dolor sit amet" precio = "1500" />
      <Productos titulo = "Producto 4" descripcion = "Lorem ipsum dolor sit amet" precio = "2000"  />
    </div>
    
    
    </>
  )
}

export default ItemListContainer