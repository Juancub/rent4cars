import React from 'react';
import './style.css'

export function CardCategoria({nombre, foto, alteText, values, setValues, clickToReferencia}) {
  const selectCategoria = () => {
    
    clickToReferencia();
    setValues({...values, category: nombre, location: ""});
  }
  return (
    <div className='card-categoria' onClick={selectCategoria}>
        <img src={foto} alt={alteText}></img>
        <h3>{nombre}</h3>
    </div>
  )
}