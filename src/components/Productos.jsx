import React from 'react'

const Productos = ({titulo, descripcion, precio}) => {
  return (
    <div>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <strong>{precio}</strong>
    </div>
  )
}

export default Productos