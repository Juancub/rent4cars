import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import "./navUbicacionProducto.css"

const NavUbicacionProducto = ({ciudad,pais,direccion}) => {
  return (
    <div className='navUbicacion'>
      <FontAwesomeIcon className='iconLocation' icon={faLocationDot}/>
      <div className='navText'>
        <p>{ciudad}, {pais}</p>
        <p>{direccion}</p>
      </div>
    </div>
  )
}

export default NavUbicacionProducto