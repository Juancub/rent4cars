import React from 'react';
import './style.css'

export function CardCategoria({nombre, foto, alteText, cant, values, setValues}) {
  const selectCategoria = () => {
    setValues({...values, category: nombre, location: ""});
  }
  return (
    <div className='card-categoria' onClick={selectCategoria}>
        <img src={foto} alt={alteText}></img>
        <h3>{nombre}</h3>
    </div>
  )
}